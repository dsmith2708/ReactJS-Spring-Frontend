

export const editReducer = (state = { userToEdit: {}, editedUser: {} }, action) => {
    switch (action.type) {
        case "Get User To Edit":
        console.log('GetUserToEdit reducer hit with: ', action.payload);
            break;
        case "Dispatch Edited User":
            break;
        default:
            break;
    }
    return state;
};