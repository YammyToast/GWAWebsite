import React from 'react'

import PostBanner from './postBanner'
import { Post } from '@prisma/client'

type PostContent = {
    post: Post | null | undefined

}

export default function PostContent(props: PostContent) {
    return(
        <div className="flex w-full h-fit justify-center">
            <div className="flex md:w-9/12 md:h-fill justify-center">
                <div className="flex md:w-full md:h-90 md:mt-8 bg-background-alt p-4">
                    <PostBanner></PostBanner>
                </div>
            </div>
        </div>

    )

}