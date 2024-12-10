import { myOctokit } from "~/lib/MyOctokit.server";

export const loaderFunction = async () => {
  const main = await myOctokit.rest.git.getTree({
    owner: "saijo-shota-biz",
    repo: "saijo-shota-biz",
    tree_sha: "draft",
  });
  const trees = await Promise.all(
    main.data.tree.map(async (item) => {
      if (item.type === "tree" && item.path !== "me" && item.sha) {
        const subdir = await myOctokit.rest.git.getTree({
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
