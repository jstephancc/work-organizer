import {Posts, Categories} from '/lib/collections';
import {Meteor} from 'meteor/meteor';

export default function () {
  Meteor.publish('posts.list', function () {
    const selector = { user: this.userId };
    const options = {
      sort: {createdAt: -1}
    };
    return Posts.find(selector, options);
  });

  Meteor.publish('posts.single', function (postId) {
    const selector = {_id: postId};
    return Posts.find(selector);
  });

  Meteor.publish('categories.list', function () {
    const selector = { user: this.userId };
    const options = { };
    return Categories.find(selector, options);
  });

  Meteor.publish('userData', function() {
    //console.log( Meteor.users.find({_id : this.userId}));
    return Meteor.users.find({_id : this.userId});
  }, {is_auto:true});
}
