import React, { useState } from 'react';
import FormInput from '../../components/form-input/form-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import './sign-in.styles.scss';

const SignIn = () =>  {
  const [userCredentials, setCredentials] = useState({email: '', password: ''});
  const { email, password } = userCredentials;

  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      await auth.signInWithEmailAndPassword(email, password);
      setCredentials({email: '', password: ''});
    }catch(e){
      console.error(e);
    }
  }

  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({...userCredentials, [name]: value });
  }

    return(
      <div className="sign-in">
          <h2>I already have a account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={handleSubmit}>
            <FormInput 
              name="email" 
              type="email" 
              label="email"
              value={email} 
              handleChange={handleChange}
              required/>
            <FormInput 
              name="password" 
              type="password" 
              label="Password"
              value={password} 
              handleChange={handleChange}
              required/>

           <div className="buttons">
              <CustomButton type="submit">
                Sing in
              </CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                Sing in with google
              </CustomButton> 
           </div>
          </form>
      </div>
    );

}

export default SignIn;
