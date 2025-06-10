import { useQuery } from "@tanstack/react-query";
import BlogCard from "./BlogCard";
import { rpc } from "../libs/rpc";

export default function Blogs() {
  const {
    data: stories,
    isPending,
    error,
  } = useQuery({
    queryKey: ["BLOGS"],
    queryFn: async () => {
      const res = await rpc.api.story.$get();
      if (!res.ok) throw new Error("Something went wrong");
      return await res.json();
    },
    refetchOnWindowFocus: false,
  });

  if (isPending) return "Loading....";

  if (error) return error.message;

  return (
    <div className="grid grid-cols-1 w-full max-w-3xl gap-px divide-y divide-neutral-100">
      {stories?.map((blog) => <BlogCard key={blog.id} blog={blog} />)}
    </div>
  );
}
