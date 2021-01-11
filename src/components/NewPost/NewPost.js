import React, { Component } from 'react'; 
import styles from './NewPost.module.css';
import Button from '../UI/Button/Button'; 
import DatePicker from 'react-datepicker'; 
import "react-datepicker/dist/react-datepicker.css";
import axios from '../../hoc/axios-comments'; 


class NewPost extends Component  {

    state = {
        post_id: 0,
        title: '', 
        content: '', 
        author: '', 
        startDate: new Date(),
        setDate: new Date(),
        requestSent: false
    }

    postDataHandler = () => {
        const data = {
            post_id: Date.now(), 
            title: this.state.title, 
            content: this.state.content, 
            author: this.state.author, 
            date: (this.state.setDate).toDateString()
        }; 


        //axios.post('/posts/' + data.post_id + '.json', data)

        axios.post('/posts.json', data)
            .then( response => {
                console.log(response); 
                this.setState({
                    ...this.state, requestSent: true}); 
                window.location.reload(); 
            });

        //window.location.reload(); 
        
    }

    

    render() {
        return (
            <div onClick={this.onPostCreate}
                className={styles.NewPost}>
                <h2>What's new?</h2>
                <label>Title</label>
                <input 
                    type="text"
                    value={this.state.title}
                    onChange={(event) => this.setState({title: event.target.value})}
                    ></input>
                <label>Content</label>
                <textarea 
                    rows="10"
                    value={this.state.content}
                    onChange={(event) => this.setState({content:event.target.value})} /> 
                <label>Author</label>
                <select 
                    value={this.state.author}
                    onChange={(event)=>this.setState({author:event.target.value})} >
                    <option value="choose_author">Choose an Author </option>  
                    <option value="Ricky">Ricky</option>
                    <option value="Siyao">Siyao</option>
                    <option value="Anna">Anna</option>
                </select>
                <label>Date</label>
                <DatePicker 
                    selected={this.state.setDate} 
                    onChange={date =>{
                    this.setState({setDate: date})}} />
                <Button 
                    btnType="NewPost-btn"
                    onClick={this.postDataHandler}>Add a Post</Button>
            </div>
        ); 

    }

    
}; 

export default NewPost; 