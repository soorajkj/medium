import { factory } from "../lib/factory";
import { authMiddleware } from "../middlewares/auth";

const blogs = [
  {
    id: 1,
    slug: "introduction-to-react",
    title: "Introduction to React",
    body: "React is a JavaScript library for building user interfaces, developed by Facebook.",
    userId: 1,
  },
  {
    id: 2,
    slug: "getting-started-with-nodejs",
    title: "Getting Started with Node.js",
    body: "Node.js allows JavaScript to run outside the browser, commonly used for server-side development.",
    userId: 2,
  },
  {
    id: 3,
    slug: "understanding-async-await",
    title: "Understanding Async/Await in JavaScript",
    body: "Async/await simplifies asynchronous programming, making code easier to read and maintain.",
    userId: 1,
  },
  {
    id: 4,
    slug: "mastering-git-commands",
    title: "Mastering Git Commands",
    body: "Git is a version control system that helps developers collaborate and manage code efficiently.",
    userId: 3,
  },
  {
    id: 5,
    slug: "introduction-to-typescript",
    title: "Introduction to TypeScript",
    body: "TypeScript is a superset of JavaScript that adds static typing for better tooling and error checking.",
    userId: 4,
  },
  {
    id: 6,
    slug: "deploying-apps-with-vercel",
    title: "Deploying Apps with Vercel",
    body: "Vercel offers a seamless deployment experience for frontend frameworks like Next.js.",
    userId: 2,
  },
  {
    id: 7,
    slug: "rest-vs-graphql",
    title: "REST vs GraphQL",
    body: "Both REST and GraphQL are API design approaches. GraphQL offers flexible queries, while REST uses fixed endpoints.",
    userId: 1,
  },
  {
    id: 8,
    slug: "javascript-closures-explained",
    title: "JavaScript Closures Explained",
    body: "Closures allow functions to access variables from an outer function scope even after the outer function has returned.",
    userId: 3,
  },
  {
    id: 9,
    slug: "getting-started-with-docker",
    title: "Getting Started with Docker",
    body: "Docker is a containerization platform that packages applications and dependencies into a portable container.",
    userId: 4,
  },
  {
    id: 10,
    slug: "clean-code-principles",
    title: "Clean Code Principles",
    body: "Writing clean code improves readability, maintainability, and reduces technical debt.",
    userId: 2,
  },
  {
    id: 11,
    slug: "what-is-cicd",
    title: "What is CI/CD?",
    body: "CI/CD automates testing and deployment of code changes, helping teams release faster and safer.",
    userId: 1,
  },
  {
    id: 12,
    slug: "using-postgresql-with-prisma",
    title: "Using PostgreSQL with Prisma",
    body: "Prisma is a modern ORM for Node.js and TypeScript, supporting PostgreSQL and other databases.",
    userId: 4,
  },
  {
    id: 13,
    slug: "redux-toolkit-overview",
    title: "Redux Toolkit Overview",
    body: "Redux Toolkit simplifies Redux usage with less boilerplate and better practices.",
    userId: 3,
  },
  {
    id: 14,
    slug: "authentication-vs-authorization",
    title: "Authentication vs Authorization",
    body: "Authentication verifies who you are; authorization verifies what you have access to.",
    userId: 2,
  },
  {
    id: 15,
    slug: "eslint-and-prettier-setup",
    title: "ESLint and Prettier Setup",
    body: "Combining ESLint and Prettier ensures consistent code style and catches syntax issues early.",
    userId: 4,
  },
  {
    id: 16,
    slug: "building-a-rest-api-with-express",
    title: "Building a REST API with Express",
    body: "Express is a minimal and flexible Node.js framework used for building APIs quickly.",
    userId: 1,
  },
  {
    id: 17,
    slug: "state-management-in-react",
    title: "State Management in React",
    body: "Learn about managing state with useState, useReducer, and external libraries like Zustand or Redux.",
    userId: 3,
  },
  {
    id: 18,
    slug: "testing-with-jest",
    title: "Testing with Jest",
    body: "Jest is a JavaScript testing framework maintained by Meta, popular for testing React apps.",
    userId: 2,
  },
  {
    id: 19,
    slug: "websockets-vs-http",
    title: "WebSockets vs HTTP",
    body: "WebSockets provide two-way communication channels over a single TCP connection, ideal for real-time apps.",
    userId: 1,
  },
  {
    id: 20,
    slug: "nextjs-app-router-guide",
    title: "Next.js App Router Guide",
    body: "Next.js App Router introduces new patterns for routing, layouts, and server components.",
    userId: 4,
  },
];

export const story = factory
  .createApp()
  .get("/", authMiddleware, async (c) => {
    return c.json(blogs, 200);
  })
  .get("/:userid/:slug", async (c) => {
    const userId = c.req.param("userid");
    const blog = blogs.filter((blog) => blog.userId === Number(userId));

    return c.json(blog, 200);
  });
