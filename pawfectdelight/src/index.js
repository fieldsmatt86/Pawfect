import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {HashRouter as Router, Route, Switch, Link} from 'react-router-dom';
import whoweare from './whoweare'
import products from './products'
import contactus from './contactus'


ReactDOM.render(

    <Router>
        <div>
            <Switch>
                <Route exact path = "/" component= {App} />
                <Route path = "/whoweare" component= {whoweare} />
                <Route path = "/products" component= {products} />
                <Route path = "/contactus" component= {contactus} />
               

            </Switch>
        </div>
        </Router>
        , document.getElementById('root'));
