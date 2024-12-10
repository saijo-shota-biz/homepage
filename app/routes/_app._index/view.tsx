import { Link } from "@remix-run/react";
import { format } from "date-fns";
import { Icons } from "~/routes/_app/app-sidebar";
import type { loader } from "~/routes/_app/route";

type Props = Awaited<ReturnType<typeof loader>>;

export const View = ({ list }: Props) => {
  return (
    <section className="grid lg:grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8">
      {list.map((item) => {
        const Icon = Icons[item.category];
        return (
          <Link
            key={item.sha}
            to={`/${item.category}/${item.sha}`}
            className="p-4 grid grid-cols-[auto_1fr] gap-0 grid-rows-subgrid border border-gray-200 rounded-lg hover:border-blue-400"
            style={{ gridRow: "span 2" }}
            aria-labelledby="title"
          >
            <div className="grid justify-center items-start mr-4" style={{ gridRow: "span 3" }}>
              <Icon className="w-12 h-12" aria-label={item.category} />
            </div>
            <div className="text-sm text-gray-500">{format(item.date, "yyyy年MM月dd日")}</div>
            <div id="title" className="text-xl font-bold justify-center items-start">
              {item.title}
            </div>
          </Link>
        );
      })}
    </section>
  );
};
