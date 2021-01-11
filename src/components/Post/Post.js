import React, { Component } from 'react'; 
import styles from './Post.module.css'; 
import axios from '../../hoc/axios-comments'; 
import Comment from '../Comment/Comment'; 
import CommentDisplayed from '../../containers/CommentDisplayed/CommentDisplayed'; 
import { BiCommentAdd } from 'react-icons/bi'; 
import { RiDeleteBin6Line } from 'react-icons/ri'; 
import AreYouSureBlock from '../UI/AreYouSureBlock/AreYouSureBlock'; 
import { faLessThanEqual } from '@fortawesome/free-solid-svg-icons';


class Post extends Component { 

    state = {
        viewForm: false, 
        comment: '', 
        post_id: 0, 
        ident: 0,
        posts : {}, 
        sentComment: false,
        requestSent: false,
        viewModal: false, 
        show: false
    }


    
    onConfirm = () => {
        this.onPostDelete(this.props.id); 
    }

    onDeny = () => {
        this.setState({
            viewModal: false
        }) 
    }

    onViewModal = () => {
        
        this.setState({viewModal: true, show: true}); 
    }
    
    onCommentCreate = () => {
        if(this.state.viewForm === false){
            this.setState({
                ...this.state, 
                viewForm: true});
            } else {
                this.setState({
                    ...this.state, 
                    viewForm: false
                });   
            }     
        }

    componentDidMount(){
        axios.get('./posts.json')
        .then(response => {
            this.setState({posts: response.data}); 
        });  
    }


    postDataHandler = () => {

        const data = {
            comment: this.state.comment, 
            post_id: this.props.id

        }

        axios.post('/comments.json', data)
            .then(response => {
                console.log(response); 
            }); 

            this.setState({
                ...this.state, 
                viewForm: false, 
                sentComment: true}); 
                setTimeout(() => {window.location.reload()}, 1000); 
                
    }

    onPostDelete = (id) => {
        //WE ONLY NEED 1 PROPS ID, NOT ALL 
        Object.keys(this.state.posts).map(e => {
            console.log(this.state.posts[e].post_id); 
                if(id == this.state.posts[e].post_id){
                axios.delete('/posts/'+ e + '.json')
                .then(response => {
                    this.setState({requestSent: true}); 
                    window.location.reload(); 
                });
            }
        }); 
    }

    

    
    render(){
        return (
            <article className={styles.Post}>
                {(this.state.viewModal) ? 
                    (<AreYouSureBlock 
                        clicked={this.onViewModal}
                        confirmed={this.onConfirm}
                        dismissed={this.onDeny}/>) : ''}
                <header>
                    <div>{this.props.author}</div>
                    <div>{this.props.setDate}</div>
                    <div>
                        {/*React icons*/}
                        <BiCommentAdd 
                            size="3em" 
                            color="#00e6e6" 
                            onClick={this.onCommentCreate}/>
                        <RiDeleteBin6Line 
                            size="3em" 
                            color="#00e6e6" 
                            onClick={this.onViewModal}/>
                        {/* <RiDeleteBin6Line size="3em" color="#00e6e6" onClick={this.onPostDelete}/>  */}
                    </div>
                    
                </header>
                <div>
                    <h2>{this.props.title}</h2>
                    <div>{this.props.content}</div>
                    {(this.state.viewForm) ? 
                        (<Comment 
                            onChange={(event) => this.setState({comment: event.target.value})}
                            onClick={this.postDataHandler}/>) : ''}
                </div>
                <footer>
                    <h2>Comments</h2>
                    <CommentDisplayed passedId={this.props.id}/>
                </footer>
            </article>
        ); 
    }

};

export default Post; 


