import React from 'react';
import {connect} from 'react-redux';
import { EditActions } from '../../redux/actions/EditActions';

class Edit extends React.Component {

    componentDidMount() {
        console.log('props userID: ', this.props.userIDToEdit);
        this.props.getUserToEdit(this.props.userIDToEdit);
    }

    render() {
        return (
            <div>
                <h1>Edit works!</h1>
                <div className="form-group">
                    <label htmlFor="nameInput">Name:</label>
                    <input type="text" className="form-control" id="nameInput"
                        placeholder="Enter name" value={this.props.userToEdit.name} onChange={(event) => this.setNameValue(event)} />
                </div>
                <div className="form-group">
                    <label htmlFor="ageInput">Age:</label>
                    <input type="number" className="form-control" id="ageInput"
                        placeholder="Enter Age" value={this.props.userToEdit.age} onChange={(event) => this.setAgeValue(event)} />
                </div>
                <button onClick={() => this.onSubmit()} className="btn btn-primary">Update User</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        userIDToEdit: state.viewReducer.userToEditWhenNav,
        userToEdit: state.editReducer.userToEdit
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        getUserToEdit: (id) => {
            dispatch(EditActions.getUserToEdit(id));
        }
    };
}

 export default connect(mapStateToProps, mapDispatchToProps)(Edit);