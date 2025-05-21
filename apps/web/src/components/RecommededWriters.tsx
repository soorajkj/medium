export default function RecommendedWriters() {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="font-medium">Who to follow</h3>
      <div className="flex flex-col gap-6">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="flex gap-3">
            <div className="size-10 overflow-hidden rounded-full">
              <img
                src="https://miro.medium.com/v2/resize:fill:96:96/1*N-9MfC5BB-lPPU197Yye8g.jpeg"
                alt=""
              />
            </div>
            <div className="flex-1">
              <h4 className="font-semibold text-sm">Pablo Stanley</h4>
              <p className="font-light text-xs text-neutral-500">
                I write about Art, Culture, and Race in The Jazprose Diaries on
                Substack.
              </p>
            </div>
            <div className="">
              <button className="text-xs bg-neutral-900 text-white px-3 py-1.5 rounded-full">
                Follow
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
