const topics = [
  "Programming",
  "React",
  "Next.js",
  "Self Improvement",
  "Data Science",
  "Writing",
  "Relationships",
  "Technology",
  "Politics",
];

export default function RecommendedTopics() {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="font-normal">Recommended topics</h4>
      <div className="flex flex-wrap gap-2">
        {topics.map((_, i) => (
          <div
            key={i}
            className="text-sm bg-neutral-100 px-4 py-2 rounded-full font-light"
          >
            {_}
          </div>
        ))}
      </div>
    </div>
  );
}
