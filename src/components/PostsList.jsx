import { useContext } from "react";
import GlobalContext from "../context/GlobalContext"
// importo il post card
import PostCard from "./PostCard";

export default function PostList() {

    const { posts } = useContext(GlobalContext);

    return (

        <>

            {posts.map((post) => (
                <PostCard key={post.id} post={post} />

            ))}
        </>
    )

}

