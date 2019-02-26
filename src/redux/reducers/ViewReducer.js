

export const viewReducer = (state = { users: [{ name: 'dantest' }] }, action) => {
    switch (action.type) {
        case "Get Users":
            var newState = {
                ...state,
                users: action.payload
            }
            return newState;
        case "Navigate to Edit":
            break;
        default:
            break;
    }
    return state;
};