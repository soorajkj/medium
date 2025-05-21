import { useQuery } from "@tanstack/react-query";
import { useParams } from "@tanstack/react-router";
import { rpc } from "../libs/rpc";

export default function BlogRead() {
  const { user, postSlug } = useParams({ from: "/_app/$user/$postSlug" });
  const { data: blog, isPending } = useQuery({
    queryKey: ["BLOGS"],
    queryFn: async () => {
      const res = await rpc.api.story[":userid"][":slug"].$get({
        param: { userid: user, slug: postSlug },
      });
      return await res.json();
    },
    refetchOnWindowFocus: false,
  });

  if (isPending) return "Loading....";

  return <div>{JSON.stringify(blog)}</div>;
}
