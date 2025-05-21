import { factory } from "../lib/factory";

const blogs = [
  {
    id: 1,
    slug: "lorem-ipsum-dolor-sit-amet",
    title: "Lorem ipsum dolor sit amet",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    userId: 1,
  },
  {
    id: 2,
    slug: "ut-enim-ad-minim-veniam",
    title: "Ut enim ad minim veniam",
    body: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    userId: 4,
  },
  {
    id: 3,
    slug: "duis-aute-irure-dolor-in-reprehenderit",
    title: "Duis aute irure dolor in reprehenderit",
    body: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    userId: 3,
  },
  {
    id: 4,
    slug: "new-blog-written-by-sooraj",
    title: "New Blog written by Sooraj",
    body: "lorem",
    userId: 4,
  },
];

export const story = factory
  .createApp()
  .get("/", async c => {
    return c.json(blogs, 200);
  })
  .get("/:userid/:slug", async c => {
    const userId = c.req.param("userid");
    const blog = blogs.filter(blog => blog.userId === Number(userId));

    return c.json(blog, 200);
  });
