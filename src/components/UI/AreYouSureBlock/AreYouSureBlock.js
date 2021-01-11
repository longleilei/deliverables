import React from 'react'; 
import Button from '../Button/Button'; 
import styles from './AreYouSureBlock.module.css'; 
import Aux from '../../../hoc/Aux/Aux'; 
import Backdrop from '../Backdrop/Backdrop'; 

const AreYouSureBlock = (props) => (
    <Aux>
        <Backdrop clicked={props.clicked}/>
        <div 
            className={styles.AreYouSureBlock}>
            <p style={{ textAlign: 'center' }}>Are you sure you want to delete the post?</p>
            <div style={{paddingLeft: '30%'}}>
                <Button onClick={props.confirmed}>Sure!</Button>
                <Button onClick={props.dismissed}>Nope</Button>
            </div>
        </div>
    </Aux>
); 

export default AreYouSureBlock; 