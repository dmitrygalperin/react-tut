import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import * as glamor from 'glamor';
import glamorous from 'glamorous';
import { lightSpeedOut } from 'react-animations';

const FadeInDiv = glamorous.div({
  animation: `1s ${glamor.css.keyframes(lightSpeedOut)}`
});

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
    setTimeout(this.onClick, 3000);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    return (
      <FadeInDiv>
        <div className={classnames('alert', {
          'alert-success': type === 'success',
          'alert-danger': type === 'error'
        })}>
          {text}
          <button onClick={this.onClick} className="close"><span>&times;</span></button>
        </div>
      </FadeInDiv>
    )
  }
}

FlashMessage.propTypes = {
  message: PropTypes.object.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;
