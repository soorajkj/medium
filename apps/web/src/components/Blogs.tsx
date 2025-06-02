import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import { rpc } from "../libs/rpc";

export type Blog = {
  id: number;
  slug: string;
  userId: number;
  title: string;
  body: string;
};

export default function Blogs() {
  const { data: stories, isPending } = useQuery({
    queryKey: ["BLOGS"],
    queryFn: async () => {
      const res = await rpc.api.story.$get();
      return await res.json();
    },
    refetchOnWindowFocus: false,
  });

  if (isPending) return "Loading....";

  return (
    <div className="grid grid-cols-1 w-full max-w-3xl gap-px divide-y divide-neutral-100">
      {stories?.map((blog: Blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
}
