import React from "react";
import moment from 'moment'


export default function PostBanner(props: { title: string, createdAt: Date }) {
    return(
        <div className="grid grid-cols-postBanner md:w-full h-fit flex-row items-center ">
            <div className="md:h-full aspect-square "></div>
            <div className="md:text-lg md:min-h-full md:h-full font-bold p-8 border-accent-1 border-x">{props.title || "Post Title"}</div>
            <div className="flex flex-col md:h-fit md:w-full ">
                <div className="flex md:text-md md:min-h-full md:h-fit items-center ">
                    <div className="relative h-24 aspect-square bg-coral m-2"></div>
                    <div className="relative flex font-normal w-full h-fit items-center justify-start p-4">Long Account Name But Like Extra Long</div>
                </div>
                <div className="flex text-lg w-full md:min-h-full md:h-fit items-center justify-end p-4 border-accent-1 border-t">Posted {moment(Date.now()).to(props.createdAt) || "Unknown Date"}</div>
            </div>
        </div>
    )

}