import React from 'react';

export class UserPanel extends React.Component {

    render() {
        return (
            <div className="col-xs-4">
                <p>ID: {this.props.user.id}</p>
                <p>Name: {this.props.user.name}</p>
                <p>Age: {this.props.user.age}</p>
            </div>
        )
    }

}