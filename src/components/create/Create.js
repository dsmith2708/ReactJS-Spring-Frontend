import React from 'react';
import {connect} from 'react-redux';
import { CreateActions } from '../../redux/actions/CreateActions';

class Create extends React.Component {

    onSubmit() {
        this.props.postUser();
    }

    render() {
        return (
            <div>
                <h1>Create works!</h1>
                    <div className="form-group">
                        <label htmlFor="nameInput">Name:</label>
                        <input type="text" className="form-control" id="nameInput" placeholder="Enter name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="ageInput">Age:</label>
                        <input type="number" className="form-control" id="ageInput" placeholder="Enter Age" />
                    </div>
                    <button onClick={() => this.onSubmit()} className="btn btn-primary">Add User</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.viewReducer.users
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        postUser: () => {
            dispatch(CreateActions.postUserAction());
        }
    };
}

 export default connect((mapStateToProps), mapDispatchToProps)(Create);
