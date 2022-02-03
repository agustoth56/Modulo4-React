function postsUsers(posts) {
    let users = [];
    for (let i = 0; i < posts.length; i++) {
        users.push(posts[i].user.username);
    }
    return users;
}

module.exports = postsUsers;