import React, { useEffect } from 'react';
import SignIn from './SignIn';
import Browse from './Browse';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Error from './Error';
import {onAuthStateChanged} from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';

const Body = () => {
    const dispatch = useDispatch();
    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Home/>
        },
        {
            path: "/login",
            element: <SignIn/>
        },
        {
            path: "/browse",
            element: <Browse/>
        },
        {
          path: "/error",
          element: <Error/>,
        }
    ]);

    // It's like an eventListener, and i have to do this once
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
            //   const uid = user.uid;
                const {uid, email, displayName, photoURL} = user;
                dispatch(addUser({uid: uid, email: email, displayName: displayName, photoURL: photoURL }));
                // we are not using navigate here, because we can use that in only child componenets
            } else {
              // User is signed out
              dispatch(removeUser());
            }
          });
    }, []);

  return (
    <div>
        <RouterProvider  router={appRouter}/>
    </div>
  )
}

export default Body