import React, { Component } from 'react';
import axios from 'axios';

class Todo extends Component {
    state = { 
        titles:[

        ]
     }

     componentDidMount(){
         axios.get("https://6071202850aaea00172843cc.mockapi.io/api/v1/todo").then( (res) =>{
             this.setState({
                titles:res.data
             })
         } )
     }
     ish_nomi = null

     handleChange = (event) => {
        this.ish_nomi = event.target.value
     }

     handlePlus = () =>{
        const title = {
            ish: this.ish_nomi,
            bajarildi:false
        }
        axios.post("https://6071202850aaea00172843cc.mockapi.io/api/v1/todo", title).then((respons) => {
            console.log(respons)
            axios.get("https://6071202850aaea00172843cc.mockapi.io/api/v1/todo").then( (res) =>{
             this.setState({
                titles:res.data
             })
         } )
        })
     }

     handleFinish = (id) => {
        this.setState({
            titles: [
                ...this.state.titles,
                this.state.titles[id].bajarildi = !this.state.titles[id].bajarildi
            ]
        })
     }
    render() { 
        return ( 
            <React.Fragment>
                <div className="card">
                    <div className="top">
                        <input onChange={this.handleChange} type="text"/>  <button onClick={this.handlePlus}>qoshish</button>
                    </div>
                    <div className="bottom">
                        {this.state.titles.map( (voydod, id) =>{
                            return(
                                <div className="block">
                                    
                                    {this.state.titles[id].bajarildi === true ? 
                                    <h3 className="nimadir">{voydod.ish}</h3> : 
                                    <h3 className="gul">{voydod.ish}</h3>    
                                }
                                    <button onClick={this.handleFinish.bind(this, id)}>bajarildi</button>
                                </div>
                            )
                        } )
                        }
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Todo;