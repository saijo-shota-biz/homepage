import { Link, useLoaderData } from '@remix-run/react';
import type { MetaFunction } from '@vercel/remix';
import { Octokit } from 'octokit';

export const meta: MetaFunction = () => {
  return [{ title: "New Remix App" }, { name: "description", content: "Welcome to Remix!" }];
};

export const loader = async () => {
  const octokit = new Octokit();
  const response = await octokit.request("GET /repos/{owner}/{repo}/git/trees/{tree_sha}", {
    owner: "saijo-shota-biz",
    repo: "saijo-shota-biz",
    tree_sha: "main",
  });

  return { list: response.data.tree };
};

export default function Index() {
  const { list } = useLoaderData<typeof loader>();
  return (
    <ul>
      {list
        .filter((item) => item.path !== "README.md")
        .map((item) => {
          return (
            <li key={item.sha}>
              <Link to={`/${item.sha}`}>{item.path?.split(".")[1]}</Link>
            </li>
          );
        })}
    </ul>
  );
}
