import { Link } from "@tanstack/react-router";
import { Icon } from "@medium/design/components";

type BlogCardProps = {
  blog: {
    id: number;
    slug: string;
    userId: number;
    title: string;
    body: string;
  };
};

export default function BlogCard(props: BlogCardProps) {
  const { blog } = props;

  return (
    <article className="flex flex-row-reverse gap-6 py-6">
      <div className="flex items-center justify-center overflow-hidden max-w-48 ml-14">
        <img
          src="https://miro.medium.com/v2/resize:fit:1400/1*VTCkG4pJFDPmRXXruogs0A.png"
          alt=""
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-2 flex-1">
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
            className="text-xs font-light cursor-pointer hover:underline underline-offset-2"
          >
            Jeremiah Warren
          </Link>
        </div>
        <div className="flex flex-col gap-4 h-full">
          <Link
            to="/$user/$postSlug"
            params={{ user: blog.userId.toString(), postSlug: blog.slug }}
          >
            <div className="flex flex-col gap-1">
              <h3 className="font-display font-semibold text-neutral-950 text-2xl line-clamp-2">
                {blog.title}
              </h3>
              <p className="text-neutral-500 text-base font-light leading-snug line-clamp-3">
                {blog.body}
              </p>
            </div>
          </Link>
          <div className="flex items-center gap-4 mt-auto pb-1">
            <div className="flex items-center w-full gap-4 text-xs font-light leading-none text-neutral-500">
              <div className="flex items-center gap-1">
                <Icon name="Clock" className="size-4"></Icon>
                <span>5 mins read</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="ThumbsUp" className="size-4"></Icon>
                <span>9.3K likes</span>
              </div>
              <div className="flex items-center gap-1">
                <Icon name="MessageCircle" className="size-4"></Icon>
                <span>9.3K comments</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
