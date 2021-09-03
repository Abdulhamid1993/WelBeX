
import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
    state = { 
        users:[]
     }

     handlePpost = () =>{
         const data = {
            sarlavha:"yangi post",
            asosiy:"birnarsalar birnas adsfkujgbd",
            muallif:"menmas"
         }
         axios.post("https://606e7b970c054f0017657030.mockapi.io/api/v1/posts", data).then( (respons) => {
             console.log(respons)
         } )
     }

    render() { 
        return (
            <React.Fragment>
                <button onClick={this.handlePpost}>Yangi post qo'shish</button>
            </React.Fragment>
          );
    }
}
 
export default User;