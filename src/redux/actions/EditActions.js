import { AppConfig } from '../../helpers/config';

export class EditActions {
    static getUserToEdit(userID) {
        return dispatch => {
            fetch(AppConfig.apiUrl + '/' + toString(userID))
                .then(response => response.json())
                .then(data => dispatch({
                    type: "Get User To Edit",
                    payload: data
                }));
        }
    }

    static dispatchEditedUser() {

    }
}