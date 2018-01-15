import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Post extends Component {

  render() {
    const { title, body } = this.props.post;
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <div className="card-text">{body}</div>
        </div>
      </div>
    );
  }

}

Post.propTypes = {
  post: PropTypes.object.isRequired
}

export default Post;
