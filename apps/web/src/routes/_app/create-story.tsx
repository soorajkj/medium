import { createFileRoute } from "@tanstack/react-router";
import Editor from "../../components/editor/index";

export const Route = createFileRoute("/_app/create-story")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="flex w-full mx-auto divide-x divide-neutral-100"
      style={{ maxWidth: "1336px" }}
    >
      <Editor />
    </div>
  );
}
