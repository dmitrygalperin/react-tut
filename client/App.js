import React from 'react';
import { Route } from 'react-router-dom';

import NavigationBar from './components/NavigationBar';
import FlashMessagesList from './components/flash/FlashMessagesList';

import Greetings from './components/Greetings';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import Protected from './components/Protected';
import NewPostPage from './components/newpost/NewPostPage';

import requireAuth from './utils/requireAuth';

const App = () =>
  <div className="container">
    <NavigationBar />
    <FlashMessagesList />
    <Route exact path="/" component={Greetings} />
    <Route exact path="/signup" component={SignupPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/protected" component={requireAuth(Protected)} />
    <Route exact path="/new" component={requireAuth(NewPostPage)} />
  </div>;

export default App;
