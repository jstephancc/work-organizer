import React from 'react';
import moment from 'moment';
import { FlowRouter } from 'meteor/kadira:flow-router';

import 'rc-swipeout/assets/index.css';
import Swipeout from 'rc-swipeout';

class CategoryList extends React.Component {
  render() {
    const { categories } = this.props;
    return (
      <div className='postlist'>
        <br />
        <h1>Categories list</h1>
        <ol>
         {(categories.length > 0) ? categories.map(cat => {
           return (
             <li key={cat._id}><div className="catItem" style={{backgroundColor: cat.color}}></div>{cat.name}</li>
           );
         }) : 'No categories!'}</ol>
      </div>
    );
  }
}

export default CategoryList;
