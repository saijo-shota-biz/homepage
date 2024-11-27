import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { myOctokit } from "~/lib/MyOctokit";

export const loaderFunction = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.sha, "sha is required");
  const response = await myOctokit.request("GET /repos/{owner}/{repo}/git/blobs/{file_sha}", {
    owner: "saijo-shota-biz",
    repo: "saijo-shota-biz",
    file_sha: params.sha,
  });
  const markdown = Buffer.from(response.data.content, "base64").toString("utf-8");
  return { markdown, sha: params.sha };
};
