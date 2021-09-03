import React, { Component } from 'react';
import axios from 'axios'
import './posts.css'
import {Link} from 'react-router-dom'

class Posts extends Component {
    state = {  
        posts:[]
     }
     componentDidMount(){
         axios.get('https://60864e20d14a8700175790d3.mockapi.io/api/v1/posts').then((res) =>{
             this.setState({posts:res.data})
         })
     }
    render() { 
        return ( 
            <div className="posts">
                {this.state.posts.map((post) =>{
                    return(
                        <div className="post">
                            <h1><Link to={"/posts/" + post.id}>{post.title} </Link><span className="cat">{post.category}</span></h1>
                            <div className="author">
                            <p>{post.author}</p>
                            </div>
                          
                        </div>
                    )
                })}
            </div>
         );
    }
}
 
export default Posts;