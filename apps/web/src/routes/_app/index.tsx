import { createFileRoute } from "@tanstack/react-router";
import Blogs from "../../components/Blogs";
import RecommendedTopics from "../../components/RecommendedTopic";
import SaveHint from "../../components/SaveHint";
import RecommendedWriters from "../../components/RecommededWriters";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div
      className="flex w-full mx-auto divide-x divide-neutral-100"
      style={{ maxWidth: "1336px" }}
    >
      <div className="flex-1 flex items-center justify-center py-16">
        <Blogs />
      </div>
      <div className="w-sm">
        <div className="flex flex-col gap-12 max-w-80 justify-center mx-auto py-16 sticky top-0">
          <RecommendedTopics />
          <RecommendedWriters />
          <SaveHint />
        </div>
      </div>
    </div>
  );
}
