import React, { Component } from 'react'; 
import Home from './Home/Home'; 
import Schedule from './Schedule/Schedule'; 
import Blog from './Blog/Blog'; 
import styles from './Container.module.css'; 
import { Route } from 'react-router-dom'; 


class Container extends Component {
    render() {
        return (
            <div className={styles.Container}>

                <Route exact path="/" component={ Home } />
                <Route exact path="/home" component={ Home }/>
                <Route exact path="/schedule" component={ Schedule }/>
                <Route exact path="/blog" component={Blog}/>
            </div>
        )
    }
}
export default Container; 