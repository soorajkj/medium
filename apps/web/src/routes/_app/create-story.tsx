import { createFileRoute } from "@tanstack/react-router";
import BlogEditor from "../../components/blog-editor";

export const Route = createFileRoute("/_app/create-story")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="flex w-full mx-auto divide-x divide-neutral-100"
      style={{ maxWidth: "1336px" }}
    >
      <BlogEditor />
    </div>
  );
}
