import React from 'react'
import Link from 'next/link'
import moment from 'moment'

import { PostConfig } from '../index'

type ItemConfig = {
    children: React.ReactNode,
    content: PostConfig
}

export default function ScrollerPostItem(props: ItemConfig) {
    console.log(props.content)

    return (
        // <div className="md:w-full md:h-fit p-6 border-accent-1 border border-t-0 first:border">Test</div>
        // <div className="md:w-full md:h-fit bg-accent-1 border-background-alt border mb-2 p-6 shadow-md cursor-pointer duration-200 rounded-xl hover:bg-background">
        //     <div className="font-bold">Title</div>
        // </div>
        <Link href={`/posts/${encodeURIComponent(props.content.id)}`}>
            <div className="grid grid-cols-2 w-full h-fit p-6 bg-background-alt duration-200 border-2 mb-2 rounded shadow cursor-pointer border-background-alt hover:border-coral">
                <div className="font-bold">{props.content.title}</div>
                <div className="font-normal">{moment(Date.now()).to(props.content.createdAt)}</div>
            </div>
        </Link>
    )
}