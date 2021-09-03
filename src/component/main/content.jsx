import React, { Component } from 'react';
import News from './news'

import {
    BrowserRouter,
    Link,
    Switch,
    Route
} from 'react-router-dom'


class Content extends Component {
    state = { 

     }
    render() { 
        return ( 
            <React.Fragment>
                <BrowserRouter>
                    <div className="navbar">
                        <Link to="/">Bosh Menyu</Link>
                        <Link to="/news">Yangiliklar</Link>
                        <a href="/news">jjjjjj</a>
                    </div>

                    <div className="content">
                        <Switch>
                            <Route exact path="/">
                                <p>BU asosiy sahifa</p>
                            </Route>

                            <Route path="/news">
                                <p>Bu yangiliklar sahifasi</p>
                            </Route>
                        </Switch>
                    </div>
                </BrowserRouter>
            </React.Fragment>

         );
    }
}
 
export default Content;