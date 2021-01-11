import React from 'react'; 
import Aux from '../../hoc/Aux/Aux'; 
import Toolbar from '../Toolbar/Toolbar'; 

const Layout = ( props ) => (
    <Aux>
        <Toolbar /> 
        <main>{props.children}</main>
    </Aux>

); 


export default Layout; 