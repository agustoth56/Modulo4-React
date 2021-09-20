import '../css/PostList.css';
import Post from './Post';

function PostList(){
    return(
        <div className="">
            <div className="row justify-content-center">
                <div className="col-12 col-xs-8 col-sm-8 col-md-6 col-lg-5 col-xl-4 mb-3">
                    <Post/>
                </div>
            </div>
        </div>
        
    )
}

export default PostList;