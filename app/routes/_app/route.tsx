import { Link, Outlet } from "@remix-run/react";
import type { MetaFunction } from "@vercel/remix";
import { SidebarProvider, SidebarTrigger } from "~/components/ui/sidebar";
import { useIsMobile } from "~/hooks/use-mobile";
import { AppSidebar } from "~/routes/_app/app-sidebar";
import { Breadcrumbs } from "~/routes/_app/breadcrumbs";
import { loaderFunction } from "~/routes/_app/loader.server";

export const handle = {
  Breadcrumb: () => <Link to="/">saijo shota</Link>,
};

export const title = "saijo shota's homepage";
const description =
  "saijo shotaのホームページです。Reactと静的型付け言語が好きです。主にブログや考えを書いたりしています。";
const siteUrl = "https://www.systemya-saijo.com";
const ogpUrl = `${siteUrl}/ogp.png`;

export const meta: MetaFunction = () => [
  { title },
  { name: "description", content: description },
  { property: "og:title", content: title },
  { property: "og:description", content: description },
  { property: "og:site_name", content: title },
  { property: "og:type", content: "website" },
  { property: "og:url", content: siteUrl },
  { property: "og:image", content: ogpUrl },
  { name: "twitter:title", content: title },
  { name: "twitter:description", content: description },
  { name: "twitter:card", content: "summary" },
  { name: "twitter:image", content: ogpUrl },
  { name: "twitter:site", content: "@saijo_shota" },
  { name: "twitter:creator", content: "@saijo_shota" },
];

export const loader = loaderFunction;

export default function Route() {
  const isMobile = useIsMobile();

  return (
    <>
      <SidebarProvider className={isMobile ? "flex-col" : "flex-row"}>
        <AppSidebar />
        {isMobile && (
          <nav className="h-20 p-4 grid grid-cols-[1fr_auto_1fr] justify-stretch items-center">
            <SidebarTrigger />
            <h1 className="flex flex-row">
              <Link to="/">saijo shota</Link>
            </h1>
          </nav>
        )}
        <div className="flex-1">
          {!isMobile && (
            <nav className="p-2 grid grid-cols-[28px_auto] gap-2 justify-stretch items-center">
              <SidebarTrigger />
              <Breadcrumbs />
            </nav>
          )}
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
}
