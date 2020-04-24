//Hooks version in index.js replace App import with AppHooks

import React, { useState, useEffect } from 'react';
import { About, Home, UserHooks } from '../components';

import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios';

const App = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get('http://api.tvmaze.com/search/shows?q=girls').then((results) => {
      setData(results.data);
    });
  }, []);

  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ width: '30%', marginRight: '50px' }}>
          {data ? (
            data.map((item) => (
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
            <Route exact path="/user/:id" component={UserHooks} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
