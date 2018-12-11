import React from 'react';
import { Switch, Route } from 'react-router-dom';
import List from './List';
import Post from './Post';

const Posts = () => {
  return (
    <Switch>
      <Route exact path="/posts" component={List} />
      <Route path="/posts/:postId" component={Post} />
    </Switch>
  );
};

export default Posts;
