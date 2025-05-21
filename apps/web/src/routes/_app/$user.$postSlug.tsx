import { createFileRoute } from '@tanstack/react-router';
import BlogRead from '../../components/BlogRead';

export const Route = createFileRoute('/_app/$user/$postSlug')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div>
      <BlogRead />
    </div>
  );
}
