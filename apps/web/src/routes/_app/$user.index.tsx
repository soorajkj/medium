import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/$user/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <div>Hello "/_app/$user"!</div>;
}
