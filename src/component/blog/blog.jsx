import React, { Component } from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./blog.css";
import NewPost from "../newPost/newPost";
import Posts from '../posts/posts'
import Post from '../post/post'
import PostMusic from "../music/musc"
import PostSport from "../sport/sport"
import EditPost from '../editPost/PostEdit'

class Blog extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="navbar">
          <Link to="/new">New Post</Link>
          <Link exact to="/">
            Home page
          </Link>
        </div>
        <div className="content">
          <div className="sidebar">
            <h1>Categories</h1>
            <Link className="link-cotegory" to="/music">
              Music
            </Link>
            <Link className="link-cotegory" to="/sport">
              Sport
            </Link>
          </div>
          <div className="main">
            <switch>
              <Route exact path="/" component={Posts}/>
              <Route path="/new" component={NewPost} />
              <Route path="/posts/:id" component={Post}/>
              <Route path="/music" component={PostMusic}/>
              <Route path="/sport" component={PostSport}/>
              <Route path="/post/:id/edit" component={EditPost}/>
            </switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
