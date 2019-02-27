

export const createReducer = (state = { newUser: {} }, action) => {
    switch (action.type) {
        case "Post New User":
            console.log('post new user code hit');
            break
        default:
            break;
    }
    return state;
};