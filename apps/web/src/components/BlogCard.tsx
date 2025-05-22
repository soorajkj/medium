import { Link } from "@tanstack/react-router";
import { type Blog } from "./Blogs";
import { Icon } from "@medium/design/components";

type BlogCardProps = {
  blog: Blog;
};

export default function BlogCard(props: BlogCardProps) {
  const { blog } = props;

  return (
    <div className="grid grid-cols-12 py-6">
      <div className="col-span-9 flex flex-col gap-2 pr-8">
        <div className="flex items-center gap-1">
          <div className="block size-5 rounded-full overflow-hidden">
            <img
              src="https://miro.medium.com/v2/resize:fill:40:40/1*9XTgvkLuz6YGT1vXk2DbPg@2x.jpeg"
              alt=""
            />
          </div>
          <Link
            to="/$user"
            params={{ user: blog.userId.toString() }}
            className="text-xs font-normal hover:underline cursor-pointer"
          >
            Jeremiah Warren
          </Link>
        </div>
        <div className="flex flex-col gap-4">
          <Link
            to="/$user/$postSlug"
            params={{ user: blog.userId.toString(), postSlug: blog.slug }}
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-xl leading-tight">
                {blog.title}
              </h3>
              <p className="text-neutral-500 text-base">{blog.body}</p>
            </div>
          </Link>
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4 text-xs font-light leading-none">
              <div className="flex items-center gap-1 text-neutral-500">
                <Icon name="Calendar" className="size-4"></Icon>
                <span>Mar 11</span>
              </div>
              <div className="flex items-center gap-1 text-neutral-500">
                <Icon name="Heart" className="size-4"></Icon>
                <span>9.3K</span>
              </div>
              <div className="flex items-center gap-1 text-neutral-500">
                <Icon name="MessageSquareText" className="size-4"></Icon>
                <span>9.3K</span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="bg-neutral-100 size-8 flex items-center justify-center rounded-full">
                <Icon name="Bookmark" className="size-4"></Icon>
              </button>
              <button className="bg-neutral-100 size-8 flex items-center justify-center rounded-full">
                <Icon name="Ellipsis" className="size-4"></Icon>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        <img
          src="https://miro.medium.com/v2/resize:fill:320:214/1*5bEcogL476RNW032ke4mrw.png"
          alt=""
        />
      </div>
    </div>
  );
}
