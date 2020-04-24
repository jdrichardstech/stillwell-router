import React, { Component } from 'react';
import { About, User, Home } from '../components';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

class App extends Component {
  state = {};
  componentDidMount() {
    axios.get('http://api.tvmaze.com/search/shows?q=girls').then((results) => {
      this.setState({
        results: results.data,
      });
    });
  }
  render() {
    return (
      <Router>
        <div style={{ display: 'flex', flexDirection: 'row' }}>
          <div style={{ width: '30%', marginRight: '50px' }}>
            {this.state.results ? (
              this.state.results.map((item) => (
                <div key={item.show.id}>
                  <Link to={`/user/${item.show.id}`}>{item.show.name}</Link>
                  <br />
                </div>
              ))
            ) : (
              <div>
                <h2>Loading Data...</h2>
              </div>
            )}
          </div>

          <div>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/user/:id" component={User} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
