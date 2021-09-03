import React, { Component } from 'react';
import axios from "axios";
import {Redirect} from 'react-router-dom'

class EditPost extends Component {
  state = {
    title: "",
    body: "",
    author: "",
    category: "",
    edited: false
  };
componentDidMount(){
    axios.get("https://60864e20d14a8700175790d3.mockapi.io/api/v1/posts/" + this.props.match.params.id).then((res)=>{
        this.setState({
            title:res.data.title,
            body:res.data.body,
            author:res.data.author,
            category:res.data.category,
        })
    })
}
  handleUpdate = () =>{
      const data = {
          title:this.state.title,
          body:this.state.body,
          author:this.state.author,
          category:this.state.category
      }
    axios.put("https://60864e20d14a8700175790d3.mockapi.io/api/v1/posts/" + this.props.match.params.id, data) .then((res) => {
      this.setState({edited:true})
    }) 
  }
  render() {
    return (
      <React.Fragment>
        {this.state.edited === true ? <Redirect to="/"/>:
        <div className="form">
          <input
          value={this.state.title}
            onChange={(event) => {
              this.setState({ title: event.target.value });
            }}
            type="text"
            placeholder="Title"
          />
          <textarea
           value={this.state.body}
            onChange={(event) => {
              this.setState({ body: event.target.value });
            }}
            cols="30"
            rows="10"
            placeholder="body port"
          />
          <input
           value={this.state.author}
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
          <button onClick={this.handleUpdate}>O'zgartirmoq</button>
        </div>
         }
      </React.Fragment>
    );
  }
}

export default EditPost;
