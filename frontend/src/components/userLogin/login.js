import React, { Component } from 'react';
import axios from 'axios';


class UserLogin extends Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.state = {
      username: '',
      password: ''
    }
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    let attendee = {
      username: this.state.username,
      password: this.state.password
    }
    
    axios.get('http://localhost:7000/attendee/create', attendee)
    .then((data) => {
      this.props.history.push('/dashboard')
      alert('Data successfully inserted')
    })
    .catch((error) => {
      alert(error.message)
    })
    
  }

  render() {
    return (
      <div className="container">
        <h2>Login</h2>
        <form onSubmit={this.onFormSubmit}>
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input type="text" className="form-control" name="username" onChange={this.onChange} value={this.state.username} />
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="password" className="form-control" name="password" onChange={this.onChange} value={this.state.password} />
          </div>
          <button type="submit" className="btn btn-primary">Login</button>
          <br/><br/><br/><br/>
        </form>
      </div>
    )
  }
}

export default UserLogin;