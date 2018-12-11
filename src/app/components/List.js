import React from 'react';
import { observer } from 'mobx-react';
import store from '../stores/index';
import { Link } from 'react-router-dom';

const List = observer(({ match }) => (
  <div>
    {store.posts.map(item => {
      return (
        <Link to={`${match.path}/${item.id}`} key={item.id + 'ids'}>
          <div>{item.title}</div>
        </Link>
      );
    })}
  </div>
));

export default List;
