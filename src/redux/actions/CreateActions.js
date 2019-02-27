
export class CreateActions {
    static getUsersAction(name, age) {
        return {
            type: "Post New User",
            payload: {
                name: name,
                age: age
            }
        }
    }
}