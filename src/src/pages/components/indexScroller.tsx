import React from 'react'

import ScrollerPostItem from './scrollerPost'
import { PostConfig, ScrollerData } from '../index'


export default function IndexScroller(props: ScrollerData) {

    const posts: any = props.content.map((data) => 
        <ScrollerPostItem key={data.id} content={data}>

        </ScrollerPostItem>

    )

    return(
        <div className="flex w-full h-fit p-8 justify-center flex-col">
            {posts}
        </div>

    ) 

}