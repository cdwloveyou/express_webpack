import React, {Component} from 'react';
import NavTabs from '../common/Nav';

class User extends Component {
    render () {
        return (
            <div>
                <NavTabs />
                <h2>hello user</h2>
                <h1>this is user</h1>
                <p>these are the add words</p>
            </div>
        )
    }
}
export default User;