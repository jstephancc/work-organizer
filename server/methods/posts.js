import { Posts, Categories } from '/lib/collections';
import { Meteor } from 'meteor/meteor';

export default function () {
  Meteor.methods({
    'posts.create'(_id, tag, content, priority){
    const cat = tag.split('|');
    const post = {
      tag: {
        name: cat[0],
        color: cat[1]
      },
      content: content,
      priority: priority,
      createdAt: new Date(),
      saving: true,
      done: false,
      removed: false,
      user: this.userId
    };
    Posts.insert(post);
  },
  'posts.remove'(id, postId) {
    //Post.remove({_id: postId});
    Posts.update({_id: postId}, { $set: { removed: true }});
  },
  'posts.done'(id, postId) {
    Posts.update({_id: postId}, { $set: { done: true, doneAt: new Date() }});
  },
  'posts.createCat'(_id, name, color){
    const cat = {
      name,
      color,
      createdAt: new Date(),
      user: this.userId
    };
    Categories.insert(cat);
  }
});
}
