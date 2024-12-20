import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { myOctokit } from "~/lib/MyOctokit.server";
import { markdownToHtml } from "~/lib/markdownToHtml.server";

export const loaderFunction = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.sha, "sha is required");
  const response = await myOctokit.rest.git.getBlob({
    owner: "saijo-shota-biz",
    repo: "saijo-shota-biz",
    file_sha: params.sha,
  });
  const markdown = Buffer.from(response.data.content, "base64").toString("utf-8");
  const html = await markdownToHtml(markdown);
  return { html, sha: params.sha };
};
