import React from 'react';
import {mount} from 'react-mounter';

import MainLayout from './components/main_layout';
import PostList from './containers/postlist';
import Post from './containers/post';
import NewPost from './containers/newpost';
import CategoryList from './containers/categorylist';
import NewCategory from './containers/newcategory';
import LoginBox from './components/loginBox';
import RegisterBox from './components/registerBox';


export default function (injectDeps, {FlowRouter}) {
  const MainLayoutCtx = injectDeps(MainLayout);

  FlowRouter.route('/login', {
    name: 'Login page',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<div>
          <LoginBox />
          <RegisterBox />
        </div>)
      });//TODO: dodac rejestracje
    }
  });

  FlowRouter.route('/list', {
    name: 'Task list',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<div>
          <NewPost/>
          <PostList />
        </div>)
      });
    }
  });

  FlowRouter.route('/categories', {
    name: 'Categories manager',
    action() {
      mount(MainLayoutCtx, {
        content: () => (<div>
          <NewCategory />
          <CategoryList />
        </div>)
      });
    }
  });


  FlowRouter.route('/post/:postId', {
    name: 'Selected task',
    action({postId}) {
      mount(MainLayoutCtx, {
        content: () => (<Post postId={postId}/>)
      });
    }
  });


  FlowRouter.route('/', {
    name: 'Main Page',
    triggersEnter: [() => {
      if (!Meteor.userId()){
        FlowRouter.go('/login');
      } else {
        FlowRouter.go('/list');
      }
    }]
  });

  FlowRouter.triggers.enter(() => {

  });
}
