
// importo il post card
import PostCard from "../pages/PostCard";


export default function PostList() {



    return (

        <>

            {posts.map((post) => (
                <PostCard key={post.id} />

            ))}
        </>
    )

}

