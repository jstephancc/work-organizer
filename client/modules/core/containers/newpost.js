import NewPost from '../components/newpost';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context, clearErrors}, onData) => {
  const {LocalState, Meteor, Collections} = context();
  let categories;
  if (Meteor.subscribe('categories.list').ready()) {
    categories = Collections.Categories.find().fetch();
    const error = LocalState.get('SAVING_ERROR');
    onData(null, { error, categories });
  }
   // clearErrors when unmounting the component
  return clearErrors;
};

export const depsMapper = (context, actions) => ({
  create: actions.posts.create,
  clearErrors: actions.posts.clearErrors,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(NewPost);
