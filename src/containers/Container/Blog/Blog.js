import React, { Component } from 'react'; 
import styles from './Blog.module.css'; 
import Post from '../../../components/Post/Post'; 
import NewPost from '../../../components/NewPost/NewPost'; 
import Button from '../../../components/UI/Button/Button'; 
import axios from '../../../hoc/axios-comments'; 


class Blog extends Component{

    state = {
        posts: {}, 
        viewForm: false, 
        requestSent: false,
        viewModal: false,
        deletePost: false,
        error: false
    }


    onPostCreate = () => {
        this.setState({
            ...this.state,
            viewForm: true
        })
    }

    componentDidMount(){
        axios.get('/posts.json')
            .then(response => {
                //console.log(response); 
                this.setState({posts: response.data}); 
            })
            .catch(error => {
                //console.log(error)
                this.setState({error: true})
            }); 
        }

        postDataHandler = () => {
            const data = {
                post_id: Date.now(), 
                title: this.state.title, 
                content: this.state.content, 
                author: this.state.author, 
                date: this.state.date
            }; 
    
            //axios.post('/posts/' + data.post_id + '.json', data)
    
            axios.post('/posts.json', data)
                .then( response => {
                    console.log(response); 
                    this.setState({requestSent: true}); 

                });
    
            
        }
    



    render(){


        let transformedPosts = <p style={{ textAlign: 'center' }}>Something Went Wrong!</p>

        if(!this.state.error && this.state.posts != null){

            transformedPosts = Object.keys(this.state.posts)
            .map(elem => {
                // [...Array(this.state.posts[elem])].map(e=>{
                //     //console.log(e.title); 
                //     arr.push(e); 
                //     })
                return <Post 
                    key={elem} 
                    title={this.state.posts[elem].title}
                    author={this.state.posts[elem].author}
                    content={this.state.posts[elem].content}
                    setDate={this.state.posts[elem].date}
                    id={this.state.posts[elem].post_id}
                    clicked={this.onViewModal}
                    deletePost={this.state.deletePost}
                    />; 
                }); 

   
        } else {
            transformedPosts = <p style={{ textAlign: 'center' }}>There are no posts yet!</p>}
    
            console.log(this.getClickedId); 
            
        return (
            <div className={styles.Blog}>
                <Button onClick={this.state.viewForm ? this.onPostHide : this.onPostCreate}>{this.state.viewForm ? "Hide Post" : "Create Post"}</Button>
                {(this.state.viewForm) ? <NewPost onClick={this.props.viewForm}/> : ''}
                <h1>What we've done so far</h1>
                {transformedPosts}
            </div>
        );
    }
}

export default Blog; 