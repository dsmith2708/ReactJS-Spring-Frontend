import React from 'react';
import {connect} from 'react-redux';

class ViewUsers extends React.Component {
    render() {
        console.log(this.props.users);
        return (
            <div>
                <h1>ViewUsers Works {this.props.users[0].name}</h1>
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
        getUsers: () => {
            dispatch({
                type: "Get Users",
                payload: {}
            });
        }
    };
}

 export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers);