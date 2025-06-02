import { createFileRoute, Outlet } from "@tanstack/react-router";
import Header from "../../components/Header";

export const Route = createFileRoute("/_app")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="h-screen min-h-screen flex flex-col">
      <Header />
      <main className="overflow-y-auto">
        <Outlet />
      </main>
    </div>
  );
}
