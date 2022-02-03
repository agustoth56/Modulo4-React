function postsHasLikes(posts) {
    let count = 0;
    for (let i = 0; i < posts.length; i++) {
        if (posts[i].likes > 0){
            count++
        }
    }
    return count;
}

module.exports = postsHasLikes;