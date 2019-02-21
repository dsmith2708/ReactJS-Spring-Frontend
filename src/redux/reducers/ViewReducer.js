

export const viewReducer = (state = { users: [{ name: 'dantest' }] }, action) => {
    switch (action.type) {
        case "Get Users":
        console.log('get user code hit');
            break;
        case "Navigate to Edit":
            break;
        default:
            break;
    }
    return state;
};