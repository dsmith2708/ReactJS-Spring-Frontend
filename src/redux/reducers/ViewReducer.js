

export const viewReducer = (
    state = {
        users: [
            { name: 'dantest' }
        ],
        userToEditWhenNav: 0
    },
    action) => {
    switch (action.type) {
        case "Get Users":
            var newGetUsersState = {
                ...state,
                users: action.payload
            }
            return newGetUsersState;
        case "Navigate to Edit":
            console.log('nav to edit action called with id: ', action.payload);
            var newNavState = {
                ...state,
                userToEditWhenNav: action.payload
            };
            return newNavState;
        default:
            break;
    }
    return state;
};