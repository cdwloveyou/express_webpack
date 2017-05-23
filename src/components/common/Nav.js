import React, { Component } from 'react';
import { Link } from 'react-router';

class NavTabs extends Component {
    render(){
        return (
            <ul>
                <li><Link to='/' activeStyle={{color:'red'}}>home</Link></li>
                <li><Link to='/users' activeStyle={{color:'red'}}>users</Link></li>
                <li><Link to='/user' activeStyle={{color:'red'}}>user</Link></li>
            </ul>
        )
    }
}

export default NavTabs;