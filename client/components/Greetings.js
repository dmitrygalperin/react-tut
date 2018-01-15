import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPosts } from '../actions/userActions';
import map from 'lodash/map';

import PostList from './PostList';

class Greetings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    }
  }
  componentWillMount() {
    this.props.getPosts().then((posts) => this.setState({ posts }));
  }

  render() {
    return (
      <div>
        <h1>Posts</h1>
        <PostList posts={this.state.posts} />
      </div>
    );
  }

}

Greetings.propTypes = {
  getPosts: PropTypes.func.isRequired
}

export default connect(null, { getPosts })(Greetings);
