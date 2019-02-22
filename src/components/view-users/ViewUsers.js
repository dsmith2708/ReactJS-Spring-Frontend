import React from 'react';
import {connect} from 'react-redux';
import { ViewActions } from '../../redux/actions/ViewActions';
import { UserPanel } from './UserPanel';

class ViewUsers extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                <h1>ViewUsers Works {this.props.users[0].name}</h1>

                <div className="row">
                    {this.createUserPanels()}
                </div>
            </div>
        )
    }

    createUserPanels() {
        var userPanels = [];
        this.props.users.map((newUser) => {
            userPanels.push(<UserPanel user={newUser} />)
        })
        return userPanels;
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
            dispatch(ViewActions.getUsersAction());
        }
    };
}

 export default connect(mapStateToProps, mapDispatchToProps)(ViewUsers);