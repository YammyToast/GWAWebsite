import { number, z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const postsLinksRouter = createTRPCRouter({
    getAllLinks: publicProcedure.input(
        z.object({
            id: z.string()
        })
    ).query(({ ctx, input }) => {
        return ctx.prisma.postLink.findMany({
            where: {
                originID: input.id
            },
            select: {
                originID: true,
                targetID: true
            }
        })

    })
})