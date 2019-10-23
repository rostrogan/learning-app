let initialState = {
    users: [
        {id: 1, fullName: 'Roman', status: 'User statussss....', location: {city: 'Kyiv', country: 'Ukraine'}},
        {id: 2, fullName: 'Valeriia', status: 'Hello!', location: {city: 'Mykolayiv', country: 'Ukraine'}},
        {id: 3, fullName: 'Sergey', status: 'Currently search a job', location: {city: 'Odessa', country: 'Ukraine'}},
        {id: 4, fullName: 'Olha', status: 'User statussss....', location: {city: 'Kharkov', country: 'Ukraine'}},
        {id: 5, fullName: 'Elena', status: 'ahahahahahhahah', location: {city: 'Balobanovka', country: 'Ukraine'}}
    ]
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
};