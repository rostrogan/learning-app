let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'Hi, how are you?', likesCount: 10},
            {id: 2, message: 'Its my first post', likesCount: 15}
        ]
    },

    dialogsPage: {
        dialogs: [
            {id: 1, name: 'Roman'},
            {id: 2, name: 'Valeriia'},
            {id: 3, name: 'Dima'},
            {id: 4, name: 'Alex'},
            {id: 5, name: 'Vasil'},
            {id: 6, name: 'Jack'},
        ],
        messages: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'How are you?'},
            {id: 3, message: 'Yo!'}
        ]
    }
};

export const addPost = postMessage => {
    const newPost = {
        id: 5,
        message: postMessage,
        likesCount: 10
    };

    state.profilePage.posts.push(newPost);
};

export default state;