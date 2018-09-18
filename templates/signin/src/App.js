import React, { Component } from 'react';
import {
  BImg,
  BH3,
  BLabel,
  BDiv,
  BP,
  Form,
  Button
} from 'bootstrap-4-react';

import './App.css';

class App extends Component {
  render() {
    return (
      <form className="form-signin">
        <BImg
          mb="4"
          src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
          width="72"
          height="72"
        />
        <BH3 mb="3" fontWeight="normal">Please sign in</BH3>
        <BLabel htmlFor="inputEmail" srOnly>Email address</BLabel>
        <Form.Input type="email" id="inputEmail" placeholder="Email address" required autoFocus />
        <BLabel htmlFor="inputPassword" srOnly>Password</BLabel>
        <Form.Input type="password" id="inputPassword" placeholder="Password" required autoFocus />
        <BDiv className="checkbox" mb="3">
          <label>
            <input type="checkbox" value="remember-me" /> Remember me
          </label>
        </BDiv>
        <Button lg primary block type="submit">Sign in</Button>
        <BP mt="5" mb="3" text="muted">&copy; 2017-2018</BP>
      </form>
    );
  }
}

export default App;
