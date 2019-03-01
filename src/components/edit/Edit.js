import React from 'react';
import {connect} from 'react-redux';

class Edit extends React.Component {
    render() {
        return (
            <div>
                <h1>Edit works!</h1>
                <div className="form-group">
                    <label htmlFor="nameInput">Name:</label>
                    <input type="text" className="form-control" id="nameInput"
                        placeholder="Enter name" onChange={(event) => this.setNameValue(event)} />
                </div>
                <div className="form-group">
                    <label htmlFor="ageInput">Age:</label>
                    <input type="number" className="form-control" id="ageInput"
                        placeholder="Enter Age" onChange={(event) => this.setAgeValue(event)} />
                </div>
                <button onClick={() => this.onSubmit()} className="btn btn-primary">Update User</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
}

 export default connect(mapStateToProps, mapDispatchToProps)(Edit);