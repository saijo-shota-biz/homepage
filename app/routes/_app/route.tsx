import { Link, Outlet } from '@remix-run/react';
import { SidebarProvider, SidebarTrigger } from '~/components/ui/sidebar';
import { useIsMobile } from '~/hooks/use-mobile';
import { AppSidebar } from '~/routes/_app/app-sidebar';
import { Breadcrumbs } from '~/routes/_app/breadcrumbs';
import { loaderFunction } from '~/routes/_app/loader.server';

export const handle = {
  Breadcrumb: () => <Link to="/">saijo.shota</Link>,
};

export const meta = () => {};

export const loader = loaderFunction;

export default function Route() {
  const isMobile = useIsMobile();

  return (
    <>
      <SidebarProvider className={isMobile ? "flex-col" : "flex-row"}>
        <AppSidebar />
        {isMobile && (
          <nav className="h-20 p-4 grid grid-cols-[1fr_auto_1fr] justify-stretch items-center">
            <SidebarTrigger />
            <h1 className="flex flex-row">
              <Link to="/">Saijo Shota</Link>
            </h1>
          </nav>
        )}
        <div className="flex-1">
          {!isMobile && (
            <nav className="grid grid-cols-[28px_auto] justify-stretch items-center">
              <SidebarTrigger />
              <Breadcrumbs />
            </nav>
          )}
          <main className="p-4">
            <Outlet />
          </main>
        </div>
      </SidebarProvider>
    </>
  );
}
