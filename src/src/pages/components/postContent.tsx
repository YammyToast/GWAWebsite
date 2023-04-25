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
            <div className="flex flex-col md:w-9/12 md:h-fill justify-center">
                <div className="flex md:w-full md:mt-8 bg-background-alt flex-col">
                    <PostBanner title={props.content.title} createdAt={props.content.createdAt}></PostBanner>
                </div>
                <div className="flex mt-4 flex-col font-bold w-full h-fit items-center bg-background-alt">
                    <div className="grid grid-cols-2 text-lg w-full h-fit items-center justify-center bg-accent-1 gap-x-px border-accent-1 border-b">
                        <div className="flex items-center justify-center p-8 bg-background-alt border-background-alt border-b-2 cursor-pointer hover:border-coral duration-200">Script</div>
                        <div className="flex items-center justify-center p-8 bg-background-alt border-background-alt border-b-2 cursor-pointer hover:border-coral duration-200 ">Content</div>

                    </div>
                    {/* <div className="p-8 flex font-normal md:w-full md:h-fit ">{props.content.content}</div> */}
                    <div className="p-8 flex flow-row font-normal md:w-fit md:h-fit ">
                        <div className="flex h-fit w-[75vw] bg-coral">{props.content.content}</div>
                        <div className="flex h-fit w-[75vw] bg-coral">{props.content.content}</div>

                    </div>

                </div>
            </div>
        </div>

    )

}