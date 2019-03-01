import React from 'react';
import {connect} from 'react-redux';
import { ViewActions } from '../../redux/actions/ViewActions';
import { UserPanel } from './UserPanel';

import './view-users.css';

class ViewUsers extends React.Component {

    componentDidMount() {
        this.props.getUsers();
    }

    render() {
        return (
            <div>
                <h1>ViewUsers Works</h1>

                <div className="row" key="rowContainer">
                    {this.createUserPanels()}
                </div>
            </div>
        )
    }

    createUserPanels() {
        var userPanels = [];
        this.props.users.map((newUser) => {
            userPanels.push(<UserPanel whenClicked={() => this.navToEdit(newUser.id)} key={newUser.id} user={newUser} />);
            return true;
        })
        return userPanels;
    }

    navToEdit(id) {
        console.log('nav to edit id: ', id);
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