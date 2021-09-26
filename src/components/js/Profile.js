import '../css/Profile.css';

function Profile({user}){
    const user1 = user[0].user;
    return(
        <div className="">
            <div className="row mb-3 justify-content-center text-center text-light">
                <div className="col-12">
                    <img src={user1.avatar} className="rounded-circle avatar" alt={user1.username} />
                    <h2 className="mt-3">{user1.username}</h2>
                    <p className="mt-4">{user1.bio}</p>
                </div>
            </div>
        </div>
    )
}

export default Profile;