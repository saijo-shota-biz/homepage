import { Link, Outlet } from "@remix-run/react";

export const handle = {
  Breadcrumb: () => <Link to={"/tech"}>tech</Link>,
};

export default function Route() {
  return <Outlet />;
}
