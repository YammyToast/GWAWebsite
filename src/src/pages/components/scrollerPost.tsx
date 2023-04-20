import React from 'react'

import { PostConfig } from '../index'

type ItemConfig = {
    children: React.ReactNode,
    content: PostConfig
}

export default function ScrollerPostItem(props: ItemConfig) {
    return(
        // <div className="md:w-full md:h-fit p-6 border-accent-1 border border-t-0 first:border">Test</div>
        // <div className="md:w-full md:h-fit bg-accent-1 border-background-alt border mb-2 p-6 shadow-md cursor-pointer duration-200 rounded-xl hover:bg-background">
        //     <div className="font-bold">Title</div>
        // </div>
        <div className="grid grid-cols-2 w-full h-fit p-6 bg-background-alt duration-200 border-2 mb-2 rounded shadow cursor-pointer border-background-alt hover:border-coral">
            <div className="font-bold">{props.content.title}</div>
            <div className="font-normal"></div>
        </div>
    )
}