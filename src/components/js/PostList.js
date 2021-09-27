import '../css/PostList.css';
import Post from './Post';

function PostList({posts,search}){
    return(
        <div className="PostList">
            <div className="row justify-content-center">
                    {
                    posts.filter(post => 
                        post.text.includes(search) || 
                        post.user.username.includes(search))
                        .map((post) => {
                            return (
                                <div className="col-12 col-xs-8 col-sm-8 col-md-6 col-lg-5 col-xl-4 mb-3">
                                    <Post
                                        search = {search}
                                        key={post.id}
                                        user={post.user.username}
                                        date={post.created_at}
                                        image={post.image}
                                        comments={post.comments}
                                        text={post.text}
                                        likes={post.likes} />
                                </div>
                            );
                        })
                    }
                </div>
        </div>
        
    )
}

export default PostList;