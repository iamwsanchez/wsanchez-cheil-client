import React, { Component } from 'react'
import Login from './Login';

class Logout extends Component {
    constructor(props){
        super(props)
        this.logout = this.logout.bind(this);
    }
    logout() {
        sessionStorage.removeItem('token');
    }
    render(){
        this.logout();
        window.location.href="/Logout";
        return <Login />
    }
}

export default Logout;