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
                <Route path="/deliverables/" exact component={Home} />
                <Route path="/deliverables/home" exact component={Home} />
                <Route path="/deliverables/schedule" exact component={Schedule}/>
                <Route path="/deliverables/blog" exact component={Blog}/>   
            </div>
        )
    }
}
export default Container; 