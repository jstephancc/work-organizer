import React, { Component } from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';

export default class RegisterBox extends Component {

  constructor(){
    super();
    this.state = {
      info: ''
    }
  }

  render() {
    return (
      <div>
        <h1>Sing in</h1>
        {this.state.info ? <div className="warning">{this.state.info}</div> : null}
        <form className="new-post" onSubmit={this.register.bind(this)}>
          <table className="myTable">
          <tbody>
            <tr>
              <td><input type="text" ref="login" placeholder="Login" /></td>
            </tr>
            <tr>
              <td><input type="text" ref="email" placeholder="E-mail" /></td>
            </tr>
            <tr>
              <td><input type="password" ref="pass"  placeholder="Password" /></td>
            </tr>
            <tr>
              <td><input type="password" ref="pass2" placeholder="Repeat password" /></td>
            </tr>
            <tr>
              <td><input type="text" ref="name" placeholder="Full name" /></td>
            </tr>
            <tr>
              <td><input type="submit" value="Login" style={{width: '100%'}} /></td>
            </tr>
          </tbody>
          </table>
          </form><br /><br />
      </div>
    );
  }

  register(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const userId = Accounts.createUser({
      username: this.refs.login.value,
      email: this.refs.email.value,
      password: this.refs.pass.value,
      name: this.refs.name.value
    }, (err, result) => {
      if (err){
        this.setState({info: err.message});
      } else {
        console.log(result);
        this.setState({info: 'Register success, now You can log in!'});
      }
    });

    console.log('Created user = ', userId);

    // TODO: przeniesc to do plikow servera
    //TODO: czyscic formularz!
  }
}
