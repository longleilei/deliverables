import React, { Component } from 'react';
import axios from '../../hoc/axios-comments'; 
import SmallText from '../../components/SmallText/SmallText'; 


class CommentDisplayed extends Component {

    state = {
        comments: {}, 
        error: false
    }

    componentDidMount(){
        axios.get('/comments.json')
            .then(response => {
                this.setState({comments: response.data}); 
            })
            .catch(error => {
                //console.log(error)
                this.setState({error: true})
            }); 
        }



    render(){

        const passedId = this.props.passedId; 
        
        let transformedComments = <p style={{ textAlign: 'center' }}>Something Went Wrong!</p>

        if(!this.state.error && this.state.comments != null){
            transformedComments = Object.keys(this.state.comments)
            .map(elem => {
                if(passedId == this.state.comments[elem].post_id){
                    return <SmallText
                        key={elem} 
                        comment={this.state.comments[elem].comment}
                        post_id={this.state.comments[elem].post_id}/>; 
                }
            })
        } else {
            transformedComments = <p style={{ textAlign: 'center', fontSize: '25px' }}>No Comments Yet</p>
        }

        return (
            <div>{transformedComments}</div>
        )

        
    }
}


export default CommentDisplayed; 