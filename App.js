import ReactDOM from "react-dom";
import AddPipeF from "./AddPipeF";
import RemovePipeF from "./RemovePipeF";

import React, { Component } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

function Root() {
    return (
        <Router>
            <div>
                <Route path="/home/addpipe">
                    <AddPipeF />
                </Route>

                <Route exact path="/home/removepipe" component={RemovePipeF} />
            </div>
        </Router>
    );
}

export default Root;

if (document.getElementById("root")) {
    ReactDOM.render(<Root />, document.getElementById("root"));
}
