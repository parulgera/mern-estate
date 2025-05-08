import React from 'react'
import { Link } from 'react-router-dom'


export default function SignUp() {
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-10'>SignUp</h1>
      <form className='flex flex-col gap-4 max-w-md mx-auto'>
        <input type='text' placeholder='Username' className='border p-3 rounded-lg' id="userName" />
        <input type='email' placeholder='Email' className='border p-3 rounded-lg' id="email" />
        <input type='password' placeholder='Password' className='border p-3 rounded-lg' id="password" />
        <button type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>SignUp</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already have an account?</p>
        <Link to="/signIn">
          <span className='text-blue-700'>SignIn</span>
        </Link>
      </div>
    </div>
  )
}
