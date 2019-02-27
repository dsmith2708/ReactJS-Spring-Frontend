import { AppConfig } from '../../helpers/config';

export const createReducer = (state = { newUser: {} }, action) => {
    switch (action.type) {
        case "Post New User":
            console.log('post new user code hit');
            fetch(AppConfig.apiUrl, {
                method: 'POST',
                body: JSON.stringify({
                    name: action.payload.name,
                    age: action.payload.age
                }),
                headers: {
                    "Content-Type": "application/json"
                },
            })
            break
        default:
            break;
    }
    return state;
};