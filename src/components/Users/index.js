import React, {Component} from 'react';
import NavTabs from '../common/Nav';

class Users extends Component {
    render () {
        return (
            <div>
                <NavTabs />
                <h2>hello users</h2>
                <img src="./images/1.jpeg" alt="1.jpeg"/>
                <p>these are the add words</p>
            </div>
        )
    }
}
export default Users;