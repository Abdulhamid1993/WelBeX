import React, { Component } from 'react';
import Main1 from './component/15/main1'
import Main2 from './component/15/main2'
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom'

const App1 = () => {
    return (
        <React.Fragment>
            <BrowserRouter>

                <div className="navbar">
                    <Link to='/c1'>yangi postlar </Link>
                    <Link to='/c2'>Yangi post joylash</Link>
                </div>

                <div className="content">

                    <Switch>
                        <Route path='/c1'> <Main1/> </Route>
                        <Route path='/c2'> <Main2/> </Route>
                    </Switch>
                </div>

            </BrowserRouter>
        </React.Fragment>
    )
}
export default App1;