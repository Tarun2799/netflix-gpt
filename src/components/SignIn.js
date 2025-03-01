import React, { useState } from 'react'
import Header from './Header'

const SignIn = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  // if somebody toggles the signin form changes it to false
  const toggleLoginForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div className='relative'>
      <Header/>
      <div className='absolute'>
        <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg' alt='bg-image'/>
      </div>
      <form className='w-3/12 absolute top-40 mx-auto right-0 left-0 bg-black bg-opacity-80 p-10 flex flex-col text-white rounded-lg'>
        <h1 className='text-3xl text-white font-bold py-4'>{ isSignInForm ? "Sign In" : "Sign Up" }</h1>
        { !isSignInForm && (<input type='text' placeholder='Full Name' className='w-full px-5 py-3 my-2 rounded-lg bg-gray-800'/>)}
        <input type='email' placeholder='Email Address' className='w-full px-5 py-3 my-2 rounded-lg bg-gray-800'/>
        <input type='password' placeholder='Password' className='w-full px-5 py-3 my-2 rounded-lg bg-gray-800'/>
        <button className='w-full px-5 py-3 my-2 rounded-lg text-white bg-red-500'>{ isSignInForm ? "Sign In" : "Sign Up" }</button>
        <p className='mt-12 mb-2  text-xs text-gray-400'>{ isSignInForm ? "New to Netflix?" : "Already have an account?"} &nbsp;<span className='text-red-500 cursor-pointer' onClick={toggleLoginForm}>{ isSignInForm ? "Sign up now." : "Sign In now."}</span></p>
        <p className='text-xs mb-10 text-gray-400'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
      </form>
    </div>
  )
}

export default SignIn