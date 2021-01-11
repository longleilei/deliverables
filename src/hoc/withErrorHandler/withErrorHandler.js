import React, { Component } from 'react'; 
import Aux from '../Aux/Aux'; 


const withErrorHandler = ( WrappedComponent, axios ) => {
    return class extends Component {

        state = {
            error: null
        }

        componentDidMount(){
            axios.interceptors.request.use(req => {
                this.setState({error: null}); 
            })
            axios.interceptors.response.use(null, error => {
                console.log(error); 
                this.setState({error: error}); 
            });
        }

        render() {
            return (
            <Aux>
                {this.state.error ? <div>{this.state.error.message}</div> : " "}
                
                <WrappedComponent {...this.props}/>
            </Aux>
            )
        }
    }
}


export default withErrorHandler; 