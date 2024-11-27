import { Link, Outlet, useMatches } from "@remix-run/react";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { useIsMobile } from "~/hooks/use-mobile";
import { myOctokit } from "~/lib/MyOctokit";
import { AppSidebar } from "~/routes/_app/app-sidebar";

export const handle = {
  Breadcrumb: () => <Link to="/">saijo.shota</Link>,
};

export const meta = () => {};

export const loader = async () => {
  const main = await myOctokit.request("GET /repos/{owner}/{repo}/git/trees/{tree_sha}", {
    owner: "saijo-shota-biz",
    repo: "saijo-shota-biz",
    tree_sha: "main",
  });
  const trees = await Promise.all(
    main.data.tree.map(async (item) => {
      if (item.type === "tree" && item.sha) {
        const subdir = await myOctokit.request("GET /repos/{owner}/{repo}/git/trees/{tree_sha}", {
          owner: "saijo-shota-biz",
          repo: "saijo-shota-biz",
          tree_sha: item.sha,
        });
        return subdir.data.tree.map((subItem) => {
          return { ...subItem, path: `${item.path}/${subItem.path}` };
        });
      }
      return null;
    }),
  );
  const list = trees
    .flat()
    .filter(
      (item): item is typeof item & { path: string; sha: string } =>
        !!item?.path && item.path.endsWith(".md") && !!item.sha,
    )
    .map((item) => {
      const { path, sha } = item;
      const [date, title] = path.split(".");
      return { path, sha, date: new Date(date), title, category: path.split("/")[0] };
    })
    .sort((a, b) => b.date.getTime() - a.date.getTime());

  return { list };
};

export default function Route() {
  const isMobile = useIsMobile();
  const matches = useMatches();

  return (
    <>
      <SidebarProvider className={isMobile ? "flex-col" : "flex-row"}>
        <AppSidebar />
        {isMobile && (
          <nav className="h-20 p-4 grid grid-cols-[1fr_auto_1fr] justify-stretch items-center">
            <SidebarTrigger />
            <h1 className="flex flex-row">
              <Link to="/">Saijo Shota</Link>
            </h1>
          </nav>
        )}
        <div className="flex-1">
          <nav className="grid grid-cols-[28px_auto] justify-stretch items-center">
            <SidebarTrigger />
            <ol className="flex flex-row">
              {matches
                .filter((match) => {
                  // @ts-ignore
                  return match.handle?.Breadcrumb;
                })
                .map((match) => (
                  <li key={`breadcrumb-${match.id}`}>
                    <span className="mx-1">/</span>
                    {/** @ts-ignore */}
                    {match.handle?.Breadcrumb(match.data)}
                  </li>
                ))}
            </ol>
          </nav>
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
}
