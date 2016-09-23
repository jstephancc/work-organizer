import React from 'react';

class FooterBar extends React.Component {

  logout(){
    Meteor.logout(() => {
      FlowRouter.go('/');
    });
  }

  render() {
    return (
      <div className="footerBar">
      Application created by Jakub Stephan - 2016<br />
      {(Meteor.userId()) ? <p><a onClick={this.logout}>logout</a> - <a href="/categories">categories</a></p> : ''}

      </div>
    )
  }
};

export default FooterBar;
