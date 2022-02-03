import '../css/Profile.css';

function Profile({user}){
    const avatar = user.item[0].item[0].request.body.formdata[0].src;
    const username = user.item[0].item[0].request.body.formdata[1].value;
    const bio = user.item[0].item[0].request.body.formdata[3].value;
    const name = user.item[0].item[0].request.body.formdata[4].value;
    return(
        
        <div className="">
            <div className="row mb-3 justify-content-center text-center text-light">
                <div className="col-12">
                    <img src={avatar} className="rounded-circle avatar" alt={username} />
                    <h2 className="mt-3">{username}</h2>
                    <h2 className="mt-3">{name}</h2>
                    <p className="mt-4">{bio}</p>
                </div>
            </div>
        </div>
        
    )
}

export default Profile;