import type { LoaderFunctionArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { Octokit } from 'octokit';
import invariant from 'tiny-invariant';

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.sha, "This is a test error message");
  const octokit = new Octokit();
  const response = await octokit.request("GET /repos/{owner}/{repo}/git/blobs/{file_sha}", {
    owner: "saijo-shota-biz",
    repo: "saijo-shota-biz",
    file_sha: params.sha,
  });
  const markdown = Buffer.from(response.data.content, "base64").toString("utf-8");
  return { markdown };
};

export default function Index() {
  const { markdown } = useLoaderData<typeof loader>();
  return <pre>{markdown}</pre>;
}
