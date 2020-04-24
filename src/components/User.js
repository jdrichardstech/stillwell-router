import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class User extends Component {
  state = {};
  componentDidMount() {
    axios
      .get(`http://api.tvmaze.com/shows/${this.props.match.params.id}`)
      .then((item) => {
        console.log('componentDidMount id', this.props.match.params.id);
        this.setState({ data: item.data, id: this.props.match.params.id });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.id !== this.state.id) {
      axios
        .get(`http://api.tvmaze.com/shows/${this.props.match.params.id}`)
        .then((item) => {
          console.log('componentDidUpdate id', this.props.match.params.id);
          this.setState({ data: item.data, id: this.props.match.params.id });
        });
    }
  }

  render() {
    return (
      <div>
        {this.state.data && (
          <div>
            <h1>{this.state.data.name}</h1>
            <p>{this.state.data.summary}</p>
            <Link to={'/'}>Home</Link>
          </div>
        )}
      </div>
    );
  }
}

export default User;
