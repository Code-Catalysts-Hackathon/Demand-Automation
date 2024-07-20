import React from 'react'
import withLayout from '../../layouts/withLayout'
import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <div className='my-auto mx-auto max-w-7xl py-3 text-center'>
        <h3 className='text-black text-3xl mb-4'>Something went wrong Please Login</h3>
        <Link to="/" className='px-4 py-2 bg-primary-dark text-white text-base rounded-md'>Login Page</Link>
    </div>
  )
}

export default withLayout(ErrorPage);