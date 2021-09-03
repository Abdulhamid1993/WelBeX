import React, { Component } from "react";
import axios from "axios";
import "./post.css";
import {Redirect, Link} from 'react-router-dom'

class Post extends Component {
  state = {
    post: [],
  };
  componentDidMount() {
    axios
      .get(
        "https://60864e20d14a8700175790d3.mockapi.io/api/v1/posts/" +
          this.props.match.params.id
      )
      .then((res) => {
        this.setState({ post: res.data });
      });
  }
  handleDelete = () => {
    axios.delete(
        "https://60864e20d14a8700175790d3.mockapi.io/api/v1/posts/" +
          this.props.match.params.id
      ).then(res => {
          this.setState({deleted:true})
      })
  };
  render() {
    return (
      this.state.deleted === true ? <Redirect to="/"/> :
      <div className="post">
        <h1>{this.state.post.title}</h1>
        <h4>{this.state.post.category}</h4>
        <p>{this.state.post.body}</p>
        <span className="author">{this.state.post.author}</span>
        <button className="btn_o" onClick={this.handleUpdete}>
          <Link to={"/post/" + this.props.match.params.id + "/edit"}>O'zgartirish</Link>
        </button>
        <button className="btn_o" onClick={this.handleDelete}>
         O'chrish
        </button>
      </div>
    );
  }
}

export default Post;
