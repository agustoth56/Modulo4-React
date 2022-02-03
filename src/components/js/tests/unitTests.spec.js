const Posts = require ('../../data/posts.json');
const postsUsers = require ('./postsUsers.js');
const postsHasLikes = require ('./postsHasLikes.js');

const users = ['@agustoth56', '@jess4852', '@mendesjr9823', '@mariah98', '@osas']

test('Deberian haber los siguientes usuarios', () => {
    expect(postsUsers(Posts)).toStrictEqual(users);
});

test('Deberian haber 5 usuarios', () => {
    expect(postsUsers(Posts).length).toBe(5);
});

test('Deberian haber 5 posts', () => {
    expect(Posts.length).toBe(5);
});

test('Al menos 1 post tiene likes', () => {
    expect(postsHasLikes(Posts)).not.toBe(0);
});

test('Todos los posts tienen algun like', () => {
    expect(postsHasLikes(Posts)).toBe(5);
});