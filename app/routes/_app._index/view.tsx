import { Link } from "@remix-run/react";
import { format } from "date-fns";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "~/components/ui/card";
import type { loader } from "~/routes/_app/route";

type Props = Awaited<ReturnType<typeof loader>>;

export const View = ({ list }: Props) => {
  return (
    <div
      className="grid gap-8"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))",
      }}
    >
      {list.map((item) => {
        return (
          <Link key={item.sha} to={`/${item.category}/${item.sha}`} className="contents">
            <Card className="grid grid-rows-subgrid gap-2" style={{ gridRow: "span 3" }}>
              <CardHeader>
                <CardDescription>{format(item.date, "yyyy年MM月dd日")}</CardDescription>
              </CardHeader>
              <CardContent>
                <CardTitle>{item.title}</CardTitle>
              </CardContent>
              <CardFooter>
                <div className="text-sm text-gray-500">{`#${item.category}`}</div>
              </CardFooter>
            </Card>
          </Link>
        );
      })}
    </div>
  );
};
