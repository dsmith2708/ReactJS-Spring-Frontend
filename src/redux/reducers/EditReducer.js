

export const editReducer = (state = { userToEdit: {}, editedUser: {} }, action) => {
    switch (action.type) {
        case "Get User To Edit":
            console.log('GetUserToEdit reducer hit with: ', action.payload);
            var getUserToEditState = {
                ...state,
                userToEdit: action.payload
            }
            return getUserToEditState;
        case "Dispatch Edited User":
            break;
        default:
            break;
    }
    return state;
};