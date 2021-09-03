import React from "react";
import Blog from "./component/blog/blog";

import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Blog />
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
