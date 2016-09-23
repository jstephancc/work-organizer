import Post from '../components/post';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, postId}, onData) => {
  const {Meteor, Collections} = context();

  if (Meteor.subscribe('posts.single', postId).ready()) {
    const post = Collections.Posts.findOne(postId);
    onData(null, {post});
  } else {
    const post = Collections.Posts.findOne(postId);
    if (post) {
      onData(null, {post});
    } else {
      onData();
    }
  }
};


export const depsMapper = (context, actions) => ({
  remove: actions.posts.remove,
  done: actions.posts.done,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(Post);


