import React from "react";
import {Link} from "react-router"

export default class Layout extends React.Component{
    navigate(){
        this.props.history.replaceState(null, "/");
    }
    render(){
        return (
            <div>
                <h1>KillerNews.net</h1>
                {this.props.children}
                <Link to="archive" class="btn " activeClassName="btn-success">Archives</Link>
                <Link to="settings" class="btn btn-success">Settings</Link>
                <button class="btn btn-danger" onClick={this.navigate.bind(this)}>Featured</button>
            </div>
        );
    }
}