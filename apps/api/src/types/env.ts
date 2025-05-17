export interface Env {
  Bindings: {
    DATABASE_URL: string;
  };
  Variables: {
    prisma: typeof prisma;
  };
}
