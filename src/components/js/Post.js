import '../css/Post.css';


function Post({key, user, date, image, comments, text, likes}){
    return(
        <div className="card card-post text-white bg-dark">
            <div className="m-3">
                <h5 className="card-title m-0">{user}</h5>
            </div>                
            <div className="mx-auto">
                <img src={image} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <p class="card-text"><small class="text-muted">{date}</small></p>
                    </div>
                    <div className="col-6 text-end">
                        <button type="button" class="btn btn-danger"><i class="fas fa-heart"></i> Like</button>
                    </div>              
                    <div className="col-6">
                        <p class="card-text"><small class="text-white"><strong>{likes} likes</strong></small></p>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 mt-3 mb-3">
                        <p className="card-text"><strong>{user}</strong> {text.slice(0,100)}...</p>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <p class="card-text"><small class="text-muted"><i class="far fa-comment-alt"></i> Comentarios ({comments})</small></p>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Post;