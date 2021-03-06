import React, { Component } from 'react';

import classes from './Auth.css';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

class AuthPage extends Component {
  state = { email: '', password: '' };

  inputChangeHandler = (event, input) => {
    this.setState({ [input]: event.target.value });
  };

  render() {
    let modeButtonText = 'Switch to Signup';
    let submitButtonText = 'Login';
    if (this.props.mode === 'signup') {
      modeButtonText = 'Switch to Login';
      submitButtonText = 'Signup';
    }
    return (
      <main>
        <section className={classes.AuthModeControl}>
          <Button type="button" onClick={this.props.onAuthModeChange} className={classes.SwitchBtn}>
            {modeButtonText}
          </Button>
        </section>
        <form
          className= {classes.AuthForm}
          onSubmit={event =>
            this.props.onAuth(event, {
              email: this.state.email,
              password: this.state.password
            })
          }
        >
          <Input
            label="E-Mail"
            config={{ type: 'email' }}
            onChange={event => this.inputChangeHandler(event, 'email')}
          />
          <Input
            label="Password"
            config={{ type: 'password' }}
            onChange={event => this.inputChangeHandler(event, 'password')}
          />
          <Button type="submit" className={classes.SubmitBtn}>{submitButtonText}</Button>
        </form>
      </main>
    );
  }
}
export default AuthPage;
