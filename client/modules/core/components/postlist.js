import React from 'react';
import moment from 'moment';
import { FlowRouter } from 'meteor/kadira:flow-router';

import 'rc-swipeout/assets/index.css';
import Swipeout from 'rc-swipeout';

class PostList extends React.Component {
  render() {
    const {posts} = this.props;
    return (
      <div className='postlist'>
        <br />
        <h1>Tasks list:</h1>
         {(posts.length > 0) ? posts.map(post => {

           let classa= '';
           if (post.done){
             classa = 'done';
           } else {
             classa = '';
           }
           return (
             <div key={post._id}>
             <Swipeout
             left={[
               {
                 text: 'None',
                 onPress:() => alert('Do you have any suggestion what should be here ?'),
                 style: { backgroundColor: 'orange', color: 'white' }
               }
             ]}
             right={[
               {
                 text: 'Open task',
                 onPress:() => FlowRouter.go(`/post/${post._id}`),
                 style: { backgroundColor: 'gold', color: '#000' }
               }
             ]}
           ><div className={`singlePost ${classa}`}>
               <div className={`cell1 ${classa}`}>Added: {moment(post.createdAt).fromNow()}</div>
               <div className="cell2 right"><span className="ala_button" style={{backgroundColor: post.tag.color}}>{post.tag.name}</span></div>
               <span className={`p${post.priority}`}>{post.content}</span><br />
             </div>
           </Swipeout>
             <div className="underPost"></div>
             </div>
           );
         }) : 'No tasks!'}
      </div>
    );
  }
}

export default PostList;
