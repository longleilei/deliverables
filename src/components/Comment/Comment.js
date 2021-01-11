import React from 'react'; 
import Button from '../UI/Button/Button'; 
import styles from './Comment.module.css'; 

const Comment = ( props ) => {
    return ( 
        <div className={styles.Comment}>
            <textarea  
                rows="10" 
                onChange={props.onChange}></textarea> 
                <Button 
                    btnType="Comment-btn"
                    onClick={props.onClick}
                    >Send Comment</Button>
            </div>
        
    ); 
}

export default Comment; 