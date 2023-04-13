import React from "react";
import { NextPage } from "next";

import Layout from "./layout";
import PostContent from "./components/postContent";

import { api } from "~/utils/api";

const Post: NextPage = () => {
   
    const { data } = api.posts.getPost.useQuery() 
    return (
        <Layout title="Musecal - Post">
            <PostContent post={data}></PostContent>
        </Layout>

    )

}

export default Post