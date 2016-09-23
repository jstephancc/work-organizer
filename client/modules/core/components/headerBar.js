import React from 'react';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Accounts } from 'meteor/accounts-base';

class HeaderBar extends React.Component {

  render() {
    let el;
    if (Meteor.status().status === "connected") {
      el = '';
    } else if (Meteor.status().status === "connecting") {
      el = 'Connecting...';
    } else {
      el = 'Error: No server connection!';
    }
    let pathh = '';
    if (FlowRouter.current().route.name) {
      pathh = ' > ' + FlowRouter.current().route.name;
    }

    // TODOL naprawić to zey miana statusu byla na zywo!
    // <h3 className="red">{el}</h3>
    return (
      <div className="headerBar">
        {Meteor.user() ? <div className="welcomeBox"><span className="dark">Welcome, </span>{Meteor.user().username}</div> : null}
        <span className="dark">Application flow: </span>
        <a href="/">Main page</a> {pathh}
      </div>
    )
  }
};

export default HeaderBar;
