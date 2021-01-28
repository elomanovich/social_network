import profileReducer, {addPostActionCreator, deletePost} from "./profile-reducer";


let state = {
    posts: [
        {id: 1, message: 'Hello', currentLike: 12},
        {id: 2, message: "Yo", currentLike: 11}
    ]
};

it('new post should be added', () => {
    let action = addPostActionCreator('elomanovich.github.io')


    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(3);
});

it('after deleting length of message should be decrement', () => {
    let action = addPostActionCreator('elomanovich.github.io')

    let newState = profileReducer(state,action);

    expect(newState.posts[2].message).toBe('elomanovich.github.io');
});
it('after deleting length of message should not be decrement if id is decrement', () => {
    let action = deletePost(1)

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(1);
});

it('after deleting length of message should not be decrement ', () => {
    let action = deletePost(1000)

    let newState = profileReducer(state,action);

    expect(newState.posts.length).toBe(2);
});
