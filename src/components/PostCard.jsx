// import { Link } from 'react-router-dom';
export default function PostCard(props) {


    const { post } = props;

    return (

        <>



            <div className='container' >
                <div className='postsitem' key={post.id} >
                    <h2>{post.title}</h2>
                    <img src={post.image} alt={post.title} />
                    <p>{post.content}</p>
                    <br />
                    <span>{post.tags.join(",")}</span>
                </div>

            </div >

        </>
    )

}




