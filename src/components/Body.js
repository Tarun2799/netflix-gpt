import React from 'react'
import SignIn from './SignIn'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Home'

const Body = () => {

    const appRouter = createBrowserRouter([
        {
        path: "/",
        element: <Home/>
        },
        {
            path: "/signin",
            element: <SignIn/>
        },
        {
            path: "/browse",
            element: <Browse/>
        }
    ]);
  return (
    <div>
        <RouterProvider  router={appRouter}/>
    </div>
  )
}

export default Body