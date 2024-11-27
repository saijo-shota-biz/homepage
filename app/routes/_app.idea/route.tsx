import { Link, Outlet } from '@remix-run/react';

export const handle = {
  Breadcrumb: () => <Link to={"/idea"}>idea</Link>,
};

export default function Route() {
  return <Outlet />;
}
