import { createFileRoute } from "@tanstack/react-router";
import RecommendedWriters from "../../components/RecommededWriters";
import RecommendedTopics from "../../components/RecommendedTopic";
import Blogs from "../../components/Blogs";

export const Route = createFileRoute("/_app/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex max-w-screen-xl gap-6 mx-auto h-full w-full py-12 px-4">
      <div className="w-full flex-1">
        <Blogs />
      </div>
      <div className="max-w-80 w-full">
        <div className="flex flex-col gap-12 w-full py-8 sticky top-16">
          <RecommendedTopics />
          <RecommendedWriters />
        </div>
      </div>
    </div>
  );
}
