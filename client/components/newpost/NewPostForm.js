import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';

import TextFieldGroup from '../common/TextFieldGroup';
import TextareaFieldGroup from '../common/TextareaFieldGroup';

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      body: '',
      isLoading: false,
      errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  isValid() {
    let errors = {}

    if(isEmpty(this.state.title)) {
      errors.title = 'Post requires a title.';
    }

    if(isEmpty(this.state.body)) {
      errors.body = 'Post requires a body';
    }

    if(!!errors) {
      this.setState({ errors });
    }

    return isEmpty(errors);
  }

  onSubmit(e) {
    e.preventDefault();
    this.state.errors = {}

    if(this.isValid()) {
      let post = {
        title: this.state.title,
        body: this.state.body
      }
      this.props.submitNewPost(post)
        .then((res) => {
          this.props.addFlashMessage({
            type: 'success',
            text: 'Your post has been created successfully.'
          });
          this.context.router.history.push('/');
        })
        .catch((err) => console.log(err));
    }
  }

  render() {
    const { title, body, errors, isLoading } = this.state;
    return (
      <form onSubmit={this.onSubmit}>
        <TextFieldGroup
          field="title"
          label="Title"
          value={title}
          error={errors.title}
          onChange={this.onChange}
          type="text"
        />

        <TextareaFieldGroup
          field="body"
          label="Body"
          value={body}
          error={errors.body}
          onChange={this.onChange}
          type="text"
        />

        <div className="form-group"><input type="submit" value="Submit" className="btn btn-primary btn-lg" disabled={isLoading} /></div>
      </form>
    );
  }

}

NewPostForm.propTypes = {
  submitNewPost: PropTypes.func.isRequired,
  addFlashMessage: PropTypes.func.isRequired
}

NewPostForm.contextTypes = {
  router: PropTypes.object.isRequired
}

export default NewPostForm;
