import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='relative'>
      <Header/>
        <div className='absolute'>
          <img className='' src='https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg' alt='bg-image'/>
        </div>
        <div className='w-2/4 p-16 absolute top-40 mx-auto right-0 left-0 bg-black bg-opacity-75 text-white rounded-xl'>
            <h2 className='text-3xl font-bold mb-4'>Unlimited movies, TV shows and more</h2>
            <p className='text-lg mb-6'>Watch anywhere. Cancel anytime.</p>
            <p className='text-lg'>Ready to watch? Enter your email to create or restart your membership.</p>
            <div className='flex mt-4'>
              <Link to='/login'>
                <button className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-4'>Let's go</button>
              </Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home