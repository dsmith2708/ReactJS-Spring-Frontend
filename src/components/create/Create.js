import React from 'react';

export class Create extends React.Component {
    render() {
        return (
            <div>
                <h1>Create works!</h1>
                <form>
                    <div className="form-group">
                        <label htmlFor="nameInput">Name:</label>
                        <input type="text" className="form-control" id="nameInput" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ageInput">Age:</label>
                        <input type="number" className="form-control" id="ageInput" placeholder="Enter Age" />
                    </div>
                    <button className="btn btn-primary">Add User</button>
                </form>
            </div>
        )
    }
}
