import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { basicPhotoURL } from '../utils/constant';

const Header = () => {

  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const handleSignOut = () =>{
    signOut(auth).then(() => {
      // Sign-out successful.
      // automatically with our firebase Api user removed from store, we used dispatch there
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
    
  }

  return (
    <div className='w-full absolute z-10 pl-40 pr-8 py-2 bg-gradient-to-b from-black flex justify-between' >
      <Link to='/'><img className='w-48' src='/Netflix_Logo_PMS.png' alt='logo'/> </Link>
      {user && (<div className='px-5 py-3 flex'>
        <img className='w-12 h-12' src={user?.photoURL || basicPhotoURL } alt='user-icon'/>
        <button onClick={handleSignOut} className='font-bold text-white cursor-pointer'>(Sign Out)</button>
      </div>)}
    </div>
  )
}

export default Header