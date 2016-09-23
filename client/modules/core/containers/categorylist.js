import CategoryList from '../components/categorylist';
import {useDeps, composeWithTracker, composeAll} from 'mantra-core';

export const composer = ({context}, onData) => {
  const {Meteor, Collections} = context();
  if (Meteor.subscribe('categories.list').ready()) {
    const categories = Collections.Categories.find().fetch();
    onData(null, { categories });
  }
};

export default composeAll(
  composeWithTracker(composer),
  useDeps()
)(CategoryList);
