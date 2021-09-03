import React, { Component } from "react";
import "./newPost.css";
import axios from "axios";
import {Redirect} from 'react-router-dom'

class NewPost extends Component {
  state = {
    title: "",
    body: "",
    author: "",
    category: "",
    published: false
  };

  handlePulish = () => {
      const data = {
        title: this.state.title,
        body: this.state.body,
        author: this.state.author,
        category: this.state.category
      }
    axios.post("https://60864e20d14a8700175790d3.mockapi.io/api/v1/posts",data).then((res) => {
      this.setState({published:true})
    })
  };
  render() {
    return (
      <React.Fragment>
        {this.state.published === true ? <Redirect to="/"/>:
        <div className="form">
          <input
            onChange={(event) => {
              this.setState({ title: event.target.value });
            }}
            type="text"
            placeholder="Title"
          />
          <textarea
            onChange={(event) => {
              this.setState({ body: event.target.value });
            }}
            cols="30"
            rows="10"
            placeholder="body port"
          />
          <input
            onChange={(event) => {
              this.setState({ author: event.target.value });
            }}
            type="text"
            placeholder="Mualif"
          />
          <select onChange={(event) => {this.setState({category:event.target.value})}}>
              <option value=""></option>
            <option>Music</option>
            <option>Sport</option>
          </select>
          <button onClick={this.handlePulish}>nashr pilmoq</button>
        </div>
         }
      </React.Fragment>
    );
  }
}

export default NewPost;
