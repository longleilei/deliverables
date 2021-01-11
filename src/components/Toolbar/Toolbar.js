import React from 'react';
import styles from './Toolbar.module.css'; 
import { Link } from 'react-router-dom'; 


const Toolbar = ( props ) => {
        return (
            <div className={styles.Toolbar}>
                <header>
                    <nav>
                        <ul>
                            <li><Link to={{pathname: "/home"}}>Home</Link></li>
                            <li><Link to="/schedule">Schedule</Link></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );   
}

export default Toolbar; 