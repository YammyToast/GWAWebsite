import React, { useState } from 'react'

import PostBanner from './postBanner'
import { Post } from '@prisma/client'

import { PostContent } from '../posts/[...slug]'

import { api } from "~/utils/api";


type PostContentInterface = {
    content: PostContent
}

enum activeContent {
    script,
    content

}

function useForceUpdate(){
    const [value, setValue] = useState(0); // integer state
    return () => setValue(value => value + 1); // update state to force render
    // A function that increment 👆🏻 the previous state like here 
    // is better than directly setting `setValue(value + 1)`
}

let active: activeContent = 0

export default function PostContent(props: PostContentInterface) {

    const forceUpdate = useForceUpdate()

    function setActive(_val: number): void { active = _val; forceUpdate() }

    const { data } = api.postLinks.getAllLinks.useQuery({ id: props.content.id })
    console.log(data)

    return(
        <div className="flex w-full h-fit justify-center">
            <div className="flex flex-col md:w-9/12 md:h-fill justify-center">
                <div className="flex md:w-full md:mt-8 bg-background-alt flex-col">
                    <PostBanner title={props.content.title} createdAt={props.content.createdAt}></PostBanner>
                </div>
                <div className="flex mt-4 flex-col font-bold w-full h-fit items-center bg-background-alt">
                    <div className="grid grid-cols-2 text-lg w-full h-fit items-center justify-center bg-accent-1 gap-x-px border-accent-1 border-b">
                        <div className={`flex items-center justify-center p-8 bg-background-alt border-background-alt border-b-2 cursor-pointer hover:border-coral duration-200 ${((active == 0) ? "border-coral":"")}`}
                        onClick={() => setActive(0)}>Script</div>
                        <div className={`flex items-center justify-center p-8 bg-background-alt border-background-alt border-b-2 cursor-pointer hover:border-coral duration-200 ${((active == 1) ? "border-coral":"")}`}
                         onClick={() => setActive(1)}>Content</div>

                    </div>
                    {/* <div className="p-8 flex font-normal md:w-full md:h-fit ">{props.content.content}</div> */}
                    <div className="relative block font-normal md:w-full md:h-[90vh] overflow-x-hidden overflow-y-scroll scrollbar scrollbar-thumb-accent-2 scrollbar-track-transparent">
                        <div className="w-fit flex">
                            <div className="absolute inline-flex h-fit md:w-[75vw] duration-200 p-8" style={{translate: (100 * (active))  + '%'}} >
                                {props.content.content}
                            </div>
                            <div className="absolute inline-flex h-fit md:w-[75vw] duration-200 p-8" style={{translate: (100 * (active - 1)) + '%'}}>
                                "lol"
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    )

}