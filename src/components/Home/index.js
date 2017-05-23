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
                <img src="./images/2.jpg" alt="1.jpeg"/>
                <img src="./images/1.jpeg" alt="1.jpeg"/>
                <img src="./images/2.jpg" alt="1.jpeg"/>
            </div>
        )
    }
}
export default Home;