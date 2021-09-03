import React, { Component } from 'react';
import axios from 'axios'
import {Link} from 'react-router-dom'
class PostMusic extends Component {
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
            this.state.posts.map((post) => {
                if (post.category === "Music") {
                    return (
                        <div className="post">
                            <h1><Link to={"/posts/" + post.id}>{post.title} </Link><span className="cat">{post.category}</span></h1>
                            <div className="author">
                            <p>{post.author}</p>
                            </div>
                        </div>
                    )
                }
            })
         );
    }
}
 
export default PostMusic ;