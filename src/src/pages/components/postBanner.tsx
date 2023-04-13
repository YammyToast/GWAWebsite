import React from "react";

type BannerContent = {
    title: string
}

export default function PostBanner(props: BannerContent) {
    return(
        <div className="md:w-full ">
            <div className="md:text-lg font-bold">{props.title || "Post Title"}</div>
            
        </div>
    )

}