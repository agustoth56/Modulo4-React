import '../css/Post.css';
import img1 from '../img/img1.png';


function Post(){
    return(
        <div className="card card-post text-white bg-dark ">
            <div className="m-3">
                <h5 className="card-title m-0">@agustoth56</h5>
            </div>                
            <div className="mx-auto">
                <img src={img1} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <p class="card-text"><small class="text-muted">3 mins ago</small></p>
                    </div>
                    <div className="col-6 text-end">
                        <button type="button" class="btn btn-danger"><i class="fas fa-heart"></i> Like</button>
                    </div>              
                </div>
                
                <div className="row">
                    <div className="col-12 mt-3 mb-3">
                        <p className="card-text"><strong>@agustoth56</strong> Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <p class="card-text"><small class="text-muted"><i class="far fa-comment-alt"></i> Comentarios (15)</small></p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post;