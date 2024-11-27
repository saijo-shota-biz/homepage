import { Link, useLoaderData } from "@remix-run/react";
import { myOctokit } from "~/lib/MyOctokit";

export const handle = {
  Breadcrumb: () => <Link to={"/about"}>自己紹介</Link>,
};

export const loader = async () => {
  const response = await myOctokit.request("GET /repos/{owner}/{repo}/readme", {
    owner: "saijo-shota-biz",
    repo: "saijo-shota-biz",
  });
  // @ts-ignore
  const markdown = Buffer.from(response.data.content, "base64").toString("utf-8");
  return { markdown };
};

export default function Route() {
  const { markdown } = useLoaderData<typeof loader>();
  return <pre>{markdown}</pre>;
}
