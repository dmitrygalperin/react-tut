import React, { Component } from 'react';
import { connect } from 'react-redux';
import { submitNewPost } from '../../actions/userActions';
import { addFlashMessage } from '../../actions/flashMessages.js';
import PropTypes from 'prop-types';

import NewPostForm from './NewPostForm';

class NewPostPage extends Component {

  render() {
    return (
      <div>
        <h1>New Post</h1>
        <NewPostForm submitNewPost={this.props.submitNewPost} addFlashMessage={this.props.addFlashMessage} />
      </div>
    );
  }

}

NewPostPage.propTypes = {
  submitNewPost: PropTypes.func.isRequired
}

export default connect(null, { submitNewPost, addFlashMessage })(NewPostPage);
