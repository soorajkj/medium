import { createFileRoute, Outlet } from '@tanstack/react-router';
import Header from '../../components/Header';

export const Route = createFileRoute('/_app')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col min-h-screen h-full w-full">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
