import React from 'react';
import './user-panel.css';

export class UserPanel extends React.Component {

    render() {
        return (
            <div className="col-xs-4 user-panel">
                <div onClick={this.props.whenClicked} className="user-panel-internal">
                    <p className="user-panel-text">ID: {this.props.user.id}</p>
                    <p className="user-panel-text">Name: {this.props.user.name}</p>
                    <p className="user-panel-text">Age: {this.props.user.age}</p>
                </div>
            </div>
        )
    }

}