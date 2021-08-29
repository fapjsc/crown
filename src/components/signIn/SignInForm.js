import { useState } from 'react';
import Input from '../../utils/Input';
import Button from '../../utils/Button';

import { auth, provider } from '../../firebase/utils';

import classes from './SingInForm.module.scss';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signInWithGoogle = () => {
    auth.signInWithPopup(provider).catch(alert);
  };

  const onChangeHandler = e => {
    if (e.target.name === 'email') setEmail(e.target.value);
    if (e.target.name === 'password') setPassword(e.target.value);
  };

  const onSubmitHandler = e => {
    e.preventDefault();
    console.log(email, password);
  };

  return (
    <div className={classes.signIn}>
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={onSubmitHandler}>
        <Input
          label="Email"
          name="email"
          type="email"
          value={email}
          required
          onChange={onChangeHandler}
        />

        <Input
          label="Password"
          name="password"
          type="password"
          value={password}
          required
          onChange={onChangeHandler}
        />

        <Button type="submit">Sign In</Button>
        <Button type="button" onClick={signInWithGoogle}>
          Sign with Google
        </Button>
      </form>
    </div>
  );
};

export default SignIn;
