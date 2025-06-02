import { createFileRoute } from "@tanstack/react-router";
import BlogRead from "../../components/BlogRead";

export const Route = createFileRoute("/_app/$user/$postSlug")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="flex w-full mx-auto divide-x divide-neutral-100"
      style={{ maxWidth: "1336px" }}
    >
      <BlogRead />
    </div>
  );
}
