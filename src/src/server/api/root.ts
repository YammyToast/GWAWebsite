import { postsRouter } from "~/pages/api/posts";
import { postsLinksRouter } from "~/pages/api/postLinks";
import { createTRPCRouter } from "~/server/api/trpc";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
    posts: postsRouter,
    postLinks: postsLinksRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
