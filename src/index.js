import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import App from './App';
import store from './redux/store';
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker';

function RootHtml(){
    return (
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    )
}



ReactDOM.render( <RootHtml />, document.getElementById( "root" ) );

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
