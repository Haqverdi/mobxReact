import { observable, decorate, action } from 'mobx';
import axios from 'axios';
const fakeUrl = 'https://jsonplaceholder.typicode.com/posts';

class Store {
  posts = [];
  post = null;

  getPosts = async () => {
    try {
      const { data } = await axios.get(fakeUrl);
      this.posts = [this.posts, ...data];
    } catch (error) {
      console.log(error);
      return (this.posts = []);
    }
  };

  getPost = async postId => {
    try {
      const { data } = await axios.get(`${fakeUrl}/${postId}`);
      this.post = { ...data };
    } catch (error) {
      this.post = null;
      console.log(error);
    }
  };

  clearPosts = () => (this.posts = []);
}

decorate(Store, {
  posts: observable,
  post: observable,
  getPosts: action,
  clearPosts: action,
});

export default new Store();
