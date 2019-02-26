

export class ViewActions {
    static getUsersAction() {
        return dispatch => {
            fetch('http://localhost:3301/users')
                .then(response => response.json())
                .then(data => dispatch({
                    type: "Get Users",
                    payload: data
                }));
        }
    };
}
