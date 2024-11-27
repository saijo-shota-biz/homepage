import { Link, Outlet } from '@remix-run/react';

export const handle = {
  Breadcrumb: () => <Link to={"/blog"}>blog</Link>,
};

export default function Route() {
  return <Outlet />;
}
