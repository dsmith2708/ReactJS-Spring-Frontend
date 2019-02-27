import { AppConfig } from '../../helpers/config';

export class ViewActions {
    static getUsersAction() {
        return dispatch => {
            fetch(AppConfig.apiUrl)
                .then(response => response.json())
                .then(data => dispatch({
                    type: "Get Users",
                    payload: data
                }));
        }
    };
}
