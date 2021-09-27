import '../css/Post.css';
import React, {useState} from "react";



function Post({user, date, image, comments, text, likes}){
    const Likes = () => {
        const [like, setLikes] = useState(likes);
        return (            
            <div>
                <button onClick={() => setLikes(like === likes ? like + 1 : like - 1)} type="button" className={`${like === likes ? 'btn-dark' : 'btn-danger'} btn`}><i className="fas fa-heart"></i> {like}</button>
            </div>
        );
    };
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
                        <p className="card-text"><small className="text-muted">{date}</small></p>
                    </div>
                    <div className="col-6 text-end">
                        {Likes()}
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 mt-3 mb-3">
                        <p className="card-text"><strong>{user}</strong> {text.slice(0,100)}...</p>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <p className="card-text"><small className="text-muted"><i className="far fa-comment-alt"></i> Comentarios ({comments})</small></p>
                    </div>
                </div>

            </div>
        </div>

    )
}

export default Post;