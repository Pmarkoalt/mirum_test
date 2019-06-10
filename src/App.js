import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

//Components
import { Home, Band } from './pages';
import { NotFoundPage, Footer, Header } from './shared';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }


  componentDidMount(){

  }

  render(){
    return (
      <main>
        <Header />
        <Switch>
          <Route
            exact path="/"
            render={props => (
              <Home {...props} />
            )}
          />
          <Route
            path="/band/:id"
            render={props => (
              <Band {...props}  />
            )}
          />
          <Route path="*" render={props => (
            <NotFoundPage {...props} />
            )}
          />
        </Switch>
        <Footer />

      </main>
    );
  }
}

export default App;
