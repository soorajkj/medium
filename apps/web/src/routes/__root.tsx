import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Outlet, createRootRouteWithContext } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import type { useAuth } from "../store/auth";
import React from "react";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
  auth: ReturnType<typeof useAuth>;
}>()({
  component: RootComponent,
  notFoundComponent: () => <div>Page not found</div>,
});

function RootComponent() {
  return (
    <React.Fragment>
      <Outlet />
      <TanStackRouterDevtools position="bottom-right" />
      <ReactQueryDevtools buttonPosition="bottom-right" />
    </React.Fragment>
  );
}
