
// import { Link } from 'react-router-dom';


export default function PostCard(props) {




    return (

        <>

            {posts.map((post) => (

                <div className='container' key={post.id} >
                    <div className='postsitem'>
                        <h2>{post.title}</h2>
                        <img src={post.image} alt={post.title} />
                        <p>{post.content}</p>
                        <br />
                        <span>{post.tags.join(",")}</span>
                    </div>

                </div >
            ))}
        </>
    )

}

