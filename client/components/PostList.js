import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

class PostList extends Component {

  render() {
    const posts = this.props.posts.map(post =>
      <Post key={post.title} post={post}/>
    );
    return (
      <div>
        {posts}
      </div>
    );
  }

}

PostList.propTypes = {
  posts: PropTypes.array.isRequired
}

export default PostList;
