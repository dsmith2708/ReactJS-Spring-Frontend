import React from 'react';
import { connect } from 'react-redux';
import { CreateActions } from '../../redux/actions/CreateActions';

class Create extends React.Component {

    userName = "";
    userAge = 0;

    onSubmit() {
        this.props.postUser(this.userName, this.userAge);
    }

    setNameValue(event) {
        console.log(event.target.value);
        this.userName = event.target.value;
    }

    setAgeValue(event) {
        console.log(event.target.value);
        this.userAge = event.target.value;
    }

    render() {
        return (
            <div>
                <h1>Create works!</h1>
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
                <button onClick={() => this.onSubmit()} className="btn btn-primary">Add User</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}
};

const mapDispatchToProps = (dispatch) => {
    return {
        postUser: (name, age) => {
            dispatch(CreateActions.postUserAction(name, age));
        }
    };
}

export default connect((mapStateToProps), mapDispatchToProps)(Create);
