import { useMatches } from "@remix-run/react";

export const Breadcrumbs = () => {
  const matches = useMatches();

  return (
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
  );
};
