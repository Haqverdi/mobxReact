import React from 'react';
import store from '../stores/index';
import { observer } from 'mobx-react';

const Post = observer(({ match }) => {
  store.getPost(match.params.postId);
  if (store.post == null) {
    return <div>Loading...</div>;
  }
  return (
    <div>
      <h3>{store.post.title}</h3>
      <p>{store.post.body}</p>
    </div>
  );
});

export default Post;
