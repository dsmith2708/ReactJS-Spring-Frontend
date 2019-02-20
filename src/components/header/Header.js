import React from 'react';
import { NavLink } from 'react-router-dom';

export class Header extends React.Component {
    render() {
        return (
            <div className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <NavLink className="navbar-brand" exact to="/">User Management</NavLink>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><NavLink activeStyle={{fontWeight: "bold"}} activeClassName="active" exact to="/">Home</NavLink></li>
                        <li><NavLink activeStyle={{fontWeight: "bold"}} activeClassName="active" to="/view">View</NavLink></li>
                        <li><NavLink activeStyle={{fontWeight: "bold"}} activeClassName="active" to="/create">Create</NavLink></li>
                        <li><NavLink activeStyle={{fontWeight: "bold"}} activeClassName="active" to="/edit">Edit</NavLink></li>
                        <li><NavLink activeStyle={{fontWeight: "bold"}} activeClassName="active" to="/delete">Delete Multiple</NavLink></li>
                    </ul>
                </div>
            </div>
        )
    }
}
