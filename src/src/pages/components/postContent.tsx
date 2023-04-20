import React from 'react'

import PostBanner from './postBanner'
import { Post } from '@prisma/client'

import { PostContent } from '../posts/[...slug]'

type PostContentInterface = {
    content: PostContent
}

export default function PostContent(props: PostContentInterface) {
    return(
        <div className="flex w-full h-fit justify-center">
            <div className="flex md:w-9/12 md:h-fill justify-center">
                <div className="flex md:w-full md:h-90 md:mt-8 bg-background-alt p-4 flex-col">
                    <PostBanner title={props.content.title}></PostBanner>
                    <div className="flex font-normal">{props.content.content}</div>
                </div>
            </div>
        </div>

    )

}