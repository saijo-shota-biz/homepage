import { type UIMatch, useMatches } from "@remix-run/react";
import type { loader } from "~/routes/_app/route";

export const useAppLoaderData = () => {
  const matches = useMatches();
  return (matches.find((match) => match.id === "routes/_app") as UIMatch<typeof loader>).data;
};
