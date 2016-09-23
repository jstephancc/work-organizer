import React from 'react';
import moment from 'moment';

import Priorities from '/lib/constants/Priorities';

class Post extends React.Component {

  getPriority(priorityNumber){

    switch(parseInt(priorityNumber)){
      case 1: return Priorities.first; break;
      case 2: return Priorities.second; break;
      case 3: return Priorities.third; break;
      case 4: return Priorities.fourth; break;
      case 5: return Priorities.fifth; break;
      default: return '---'; break;
    }
  }


  render() {
    const { post } = this.props;
    const createdAt = moment(post.createdAt);
    //TODO: can edit a content only
    return (
      <div>
        <h2>Task details:</h2>
        <table className="myTable">
          <tbody>
            <tr>
              <td width="28%" className="right dark">Tag: </td>
              <td><span style={{color: post.tag.color}}>{post.tag.name}</span></td>
            </tr>
            <tr>
              <td className="right dark">Priority: </td>
              <td>{this.getPriority(post.priority)}</td>
            </tr>
            <tr>
              <td className="right dark">Created at: </td>
              <td>{moment(post.createdAt).format('dddd, MMMM Do YYYY, HH:mm:ss')} ({moment(post.createdAt).fromNow()})</td>
            </tr>
            <tr>
              <td className="right dark">Done: </td>
              <td>{(post.done) ? 'Yes' : 'No' }</td>
            </tr>
            <tr>
              <td className="right dark">Done at: </td>
              <td>{(post.done) ? moment(post.doneAt).format('dddd, MMMM Do YYYY, HH:mm:ss') : '---' }</td>
            </tr>
            <tr>
              <td className="right dark">Execution took: </td>
              <td>{(post.done) ? moment.duration(createdAt.diff(post.doneAt)).humanize() : '---' }</td>
            </tr>
            <tr><td></td><td></td></tr>
            <tr>
              <td className="right dark">Content: </td>
              <td>{post.content}</td>
            </tr>
          </tbody>
        </table>
        <h2>Task actions:</h2>
        <table className="myTable">
          <tbody>
            <tr>
              <td width="50%"><button onClick={this.back.bind(this)}>Back</button></td>
              <td><button onClick={this.remove.bind(this)}>Remove</button></td>
            </tr>
            <tr>
              <td colSpan="2">{(!post.done) ? <button onClick={this.markAsDone.bind(this)}>Mark as Done</button> : null}</td>
            </tr>
            </tbody>
          </table>

      </div>
    )
  }

  markAsDone() {
    const { done } = this.props;
    done(this.props.postId);
  }

  remove() {
    const { remove } = this.props;
    remove(this.props.postId);
  }

  back() {
    FlowRouter.go('/');
  }

};

export default Post;
