import '../css/Post.css';
import React from "react";

class Post extends React.Component {
    constructor(props) {
        super(props);
        const {user, date, image, comments, text, likes} = props;
        this.state = {user, date, image, comments, text, likes};
    }
    onClickHandler(like){
        this.setState({
            likes : this.state.likes+1
        });
    }
    render(){
    var like = 0
    return(
        <div className="card card-post text-white bg-dark">
            <div className="m-3">
                <h5 className="card-title m-0">{this.state.user}</h5>
            </div>                
            <div className="mx-auto">
                <img src={this.state.image} className="card-img-top" alt="..."/>
            </div>
            <div className="card-body">
                <div className="row">
                    <div className="col-6">
                        <p className="card-text"><small className="text-muted">{this.state.date}</small></p>
                    </div>
                    <div className="col-6 text-end">
                        <button onClick={()=>this.onClickHandler(like)} type="button" className='btn btn-danger'><i className="fas fa-heart"></i> {this.state.likes}</button>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12 mt-3 mb-3">
                        <p className="card-text"><strong>{this.state.user}</strong> {this.state.text.slice(0,100)}...</p>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col-12">
                        <p className="card-text"><small className="text-muted"><i className="far fa-comment-alt"></i> Comentarios ({this.state.comments})</small></p>
                    </div>
                </div>

            </div>
        </div>

    )}
}

export default Post;