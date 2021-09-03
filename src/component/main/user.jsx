import React, { Component } from 'react';
import axios from 'axios';
import { Button, Checkbox } from '@material-ui/core';
class User extends Component {
    state = {
        users: [
        ]
    }
    componentDidMount(){
        axios.get("https://606e7b970c054f0017657030.mockapi.io/api/v1/posts").then((respons) => {
            this.setState({
                users:respons.data.slice(0, 4)    //5 tasini users ga tenglaydi (0 dan 4 gacha)
            })
        })
    }
    handlePpost = () => {
        const data = {
            sarlavha: "yangi post",
            asosiy: "birnarsalar birnas adsfkujgbd",
            muallif: "menmas"
        }
        axios.post("https://606e7b970c054f0017657030.mockapi.io/api/v1/posts", data).then((respons) => {
            console.log(respons)
        })
    }

    handleOchir = () => {
        axios.delete("https://606e7b970c054f0017657030.mockapi.io/api/v1/posts/1").then((res) => {
            console.log(res)
        })
    }

    handleYangilash = () => {
        const data = {
            sarlavha: "Sarlavha o'zgardi hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh"
        }
        axios.put("https://606e7b970c054f0017657030.mockapi.io/api/v1/posts//10", data).then((resp) => {
            console.log(resp)
        })
    }

    render() {
        return (
            <React.Fragment>

                <button onClick={this.handlePpost}>Yangi post qo'shish</button>
                <button onClick={this.handleOchir} >O'chirish</button>
                <button onClick={this.handleYangilash} >Postni yangilash</button>
                <Button variant="contained" color="primary">
                    Primary
                </Button>
                <Checkbox
                    inputProps={{ 'aria-label': 'primary checkbox' }}
                />

                {this.state.users.map((jonon)=>{  //{this.state.users.slice(0, 5).map((jonon) 5 tasini ekranga chiqaradi
                    return(
                        <div>
                            <p>{jonon.sana}</p>
                        </div>
                    )
                })}
            </React.Fragment>
        );
    }
}

export default User;