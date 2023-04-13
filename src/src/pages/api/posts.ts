import { z } from 'zod';

import { createTRPCRouter, publicProcedure } from '~/server/api/trpc';

export const postsRouter = createTRPCRouter({
    getPost: publicProcedure.query(({ ctx }) => {
        return ctx.prisma.post.findFirst()

    })

})