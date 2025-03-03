import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';


const SignIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);



  // if somebody toggles the signin form changes it to false
  const toggleLoginForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // here, 1. validate form data. here we will use utility from utlis folder , if validation fails gives us the error message
    const message = checkValidData(email.current.value, password.current.value);
    setErrorMessage(message);

    if(message) return; // if there is an error return
    // Now we do signin/sinup
    if(!isSignInForm) {
      // signUp
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        // Updating the user
          updateProfile( user, {
            displayName: name.current.value, photoURL: "https://avatars.githubusercontent.com/u/131796732?v=4"
          }).then(() => {
            // Profile updated!, because we updated the user that we will get from auth from firebase, updated value.
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
            navigate("/browse");
          }).catch((error) => {
            // An error occurred
            const errorCode = error.code;
            const errorMessage = error.message;
            setErrorMessage( errorCode+"-"+errorMessage);
            navigate("/error")
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage( errorCode+"-"+errorMessage);
        navigate("/error");
      });

    }
    else{
      // signIn
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // console.log(user);
        navigate("/browse");

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage( errorCode+"-"+errorMessage);
      });
    }

  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
  }

  return (
    <div className='relative'>
      <Header/>
      <div className='absolute'>
        <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg' alt='bg-image'/>
      </div>
      <form onSubmit={handleFormSubmission} className='w-3/12 absolute top-40 mx-auto right-0 left-0 bg-black bg-opacity-80 p-10 flex flex-col text-white rounded-lg'>
        <h1 className='text-3xl text-white font-bold py-6'>{ isSignInForm ? "Sign In" : "Sign Up" }</h1>
        { !isSignInForm && (<input type='text' ref={name} placeholder='Full Name' className='w-full px-5 py-3 my-2 rounded-lg bg-gray-800'/>)}
        <input type='email' placeholder='Email Address' ref={email} className='w-full px-5 py-3 my-2 rounded-lg bg-gray-800'/>
        <input type='password' placeholder='Password' ref={password} className='w-full px-5 py-3 my-2 rounded-lg bg-gray-800'/>
        <p className='text-red-500 text-lg font-bold py-2'>{errorMessage}</p>
        <button className='w-full px-5 py-3 my-2 rounded-lg text-white bg-red-500' onClick={handleButtonClick}>{ isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p className='mt-12 mb-2  text-xs text-gray-400'>{ isSignInForm ? "New to Netflix?" : "Already have an account?"} &nbsp;<span className='text-red-500 cursor-pointer' onClick={toggleLoginForm}>{ isSignInForm ? "Sign up now." : "Sign In now."}</span></p>
        <p className='text-xs mb-10 text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
    </div>
  )
}

export default SignIn