import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
export default class LoginBox extends Component {

  constructor(){
    super();
    this.state = {
      info: ''
    }
  }


  render() {
    return (
      <div><br />
      <h1>Log in</h1>
      {this.state.info ? <div className="warning">{this.state.info}</div> : null}
      <h3 className="red">{this.state.info}</h3><br />
        <form className="new-post" onSubmit={this.login.bind(this)}>
          <table className="myTable">
          <tbody>
            <tr>
              <td style={{width: '30%'}}>Login:</td>
              <td><input type="text" ref="login" style={{width: '100%'}} /></td>
            </tr>
            <tr>
              <td>Password:</td>
              <td> <input type="password" ref="pass" style={{width: '100%'}} /></td>
            </tr>
            <tr>
              <td></td>
              <td><input type="submit" value="Login" style={{width: '100%'}} /></td>
            </tr>
          </tbody>
          </table>
          </form><br /><br /><br />
      </div>
    );
  }

  login(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    Meteor.loginWithPassword(this.refs.login.value, this.refs.pass.value, (err) => {
      if (err){
        this.setState({info: err.message});
      } else {
        this.setState({info: 'Logged as: ' + Meteor.userId()});
        FlowRouter.go('/list');
      }
    });
  }
}
