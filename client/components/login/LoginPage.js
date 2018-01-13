import React from 'react';
import LoginForm from './LoginForm';

class LoginPage extends React.Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <LoginForm />
        </div>
      </div>
    )
  }
}

export default LoginPage;
