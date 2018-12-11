import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Posts from './Posts';

const Main = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" render={() => <h3>Please select a posts.</h3>} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </main>
  );
};

export default Main;
