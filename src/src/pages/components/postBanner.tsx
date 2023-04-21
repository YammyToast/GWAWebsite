import React from "react";
import moment from 'moment'


export default function PostBanner(props: { title: string, createdAt: Date }) {
    return(
        <div className="grid grid-cols-postBanner md:w-full h-fit md:p-4 flex-row items-center">
            <div className="md:h-fit aspect-square border-accent-1 border"></div>
            <div className="md:text-lg md:min-h-full md:h-fit font-bold p-8">{props.title || "Post Title"}</div>
            <div className="md:text-md md:min-h-full md:h-fit  p-8">{moment(Date.now()).to(props.createdAt) || "Unknown Date"}</div>
        </div>
    )

}