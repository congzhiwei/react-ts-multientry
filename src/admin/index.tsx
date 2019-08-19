import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import 'antd/dist/antd.css';
import "./index.css"


class App extends Component<any, any> {

    render() {
        return (
           <div>
               hello world admin1
           </div>
        );
    }
}

ReactDOM.render(
    <Router>
        <Route path="/" component={App}/>
    </Router>, document.getElementById('root'));
