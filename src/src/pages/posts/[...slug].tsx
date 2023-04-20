import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";

import Layout from "../layout";
import PostContent from "../components/postContent";

import { api } from "~/utils/api";

export type PostContent = {
    id: string,
    createdAt: Date,
    title: string,
    content: string

}

const Post: NextPage = () => {
    
    const router = useRouter()
    const params = (router.query.slug as string[]) || []

    if (params.length < 1 || !params[0]) { return <h1>ERROR</h1>}
    const { data } = api.posts.getPostByID.useQuery({ id: params[0] }) 
    if (!data) { return <h1>Couldn't Find Post</h1>}

    let content: PostContent = {
        id: data?.id || "-1",
        createdAt: data?.createdAt || new Date(),
        title: data?.title || "Untitled",
        content: data?.content || "No Content"
    }
    return (
        <Layout title="Musecal - Post">
            <PostContent content={content}></PostContent>
        </Layout>

    )

}

export default Post