import React, {Component} from 'react';
import NavTabs from '../common/Nav';
import styles from '../../base.css';
class Home extends Component {
    render () {
        return (
            <div>
                <NavTabs />
                <h1 className="homeTitle">welcome to home</h1>
                <p>these are the add words</p>
            </div>
        )
    }
}
export default Home;