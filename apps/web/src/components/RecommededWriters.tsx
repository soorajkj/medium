import { Avatar, Button } from "@medium/design/components";

export default function RecommendedWriters() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-normal">Who to follow</h3>
      <div className="flex flex-col gap-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-2">
            <Avatar.AvatarRoot size="sm">
              <Avatar.AvatarImage
                src="https://miro.medium.com/v2/resize:fill:96:96/1*N-9MfC5BB-lPPU197Yye8g.jpeg"
                alt=""
              />
            </Avatar.AvatarRoot>
            <div className="flex-1 flex flex-col gap-1">
              <h4 className="font-medium text-base">Pablo Stanley</h4>
              <p className="font-light text-xs text-neutral-500 line-clamp-2">
                I write about Art, Culture, and Race in The Jazprose Diaries on
                Substack.
              </p>
            </div>
            <div className="min-w-24 flex items-center justify-end">
              <Button variant="transparent" size="sm">
                Follow
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
