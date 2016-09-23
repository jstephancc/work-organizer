import React from 'react';
import ReactDOM from 'react-dom';

import Priorities from '/lib/constants/Priorities';

class NewPost extends React.Component {
  render() {
    const {error, categories} = this.props;
    //TODO: owrapowac w tabele i jakos ladniej
    return (
      <div>
        <h1>Add new task</h1>
        <form className="new-post" onSubmit={this.createPost.bind(this)}>
       {error ? <p style={{color: 'red'}}>{error}</p> : null}
        <select style={{width: '49%', boxSizing: 'border-box'}} ref="tag"><option value="">(none)</option>
          {(categories.length > 0) ? categories.map(cat => {
            return (
              <option key={cat._id} value={`${cat.name}|${cat.color}`}>{cat.name}</option>
            )
          }) : <option>none</option>}
        </select>&nbsp;
        <select style={{width: '49%', float: 'right', boxSizing: 'border-box'}} ref="priority">
          <option value={1}>{Priorities.first}</option>
          <option value={2}>{Priorities.second}</option>
          <option value={3}>{Priorities.third}</option>
          <option value={4}>{Priorities.fourth}</option>
          <option value={5}>{Priorities.fifth}</option>
        </select><br/>
        <textarea ref="content" type="Text" placeholder="Text some here..."></textarea><br/>
        <button type="submit" style={{width: '100%'}}>Add task</button>
      </form>
      </div>
    );
  }
  createPost(event) {
    if (event && event.preventDefault) {
      event.preventDefault();
    }
    const {create} = this.props;
    const {tag, content, priority} = this.refs;
    create(tag.value, content.value, priority.value);
    ReactDOM.findDOMNode(tag).value = '';
    ReactDOM.findDOMNode(priority).value = 1;
    ReactDOM.findDOMNode(content).value = '';
  }
}

export default NewPost;
