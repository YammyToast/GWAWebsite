import React from "react";



export default function PostBanner(props: { title: string }) {
    return(
        <div className="md:w-full ">
            <div className="md:text-lg font-bold">{props.title || "Post Title"}</div>
            
        </div>
    )

}