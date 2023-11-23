import { number, z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const postsRouter = createTRPCRouter({
    getAllPosts: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.post.findMany()
    }),
    getPostByID: publicProcedure.input(
        z.object({
            id: z.string()
        })

    ).query(({ ctx, input }) => {
        return ctx.prisma.post.findUnique({
            where: {
                id: input.id
            },
            select: {
                id: true,
                createdAt: true,
                title: true,
                content: true

            }

        })

    })
})