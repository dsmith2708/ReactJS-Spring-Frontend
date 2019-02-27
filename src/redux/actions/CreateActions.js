
export class CreateActions {
    static postUserAction(name, age) {
        return {
            type: "Post New User",
            payload: {
                name: name,
                age: age
            }
        }
    }
}