import React from 'react'
import { Link } from 'react-router-dom'
import { FaSearch } from 'react-icons/fa'

export default function Header() {
  return (
<header className='bg-slate-200 shadow-md'>
    <div className='flex justify-between items-center max-w-100xl mx-auto p-3'>
<Link to="/">
<h1 className='font-bold text-sm  sm:text-xl flex flex-wrap'>
   <span className='text-slate-500'>Sahand</span>
   <span className='text-slate-700'>Estate</span>
</h1>
</Link>
<form className='bg-slate-100 p-3 rounded-lg flex items-center'>
    <input type="text" placeholder='Search...' className='bg-transparent focus:outline-none w-24 sm:w-64' />
    <FaSearch className='text-slate-600' />
</form>
<ul className='flex gap-4'>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
            <Link to="/" className='hidden sm:flex'>Home</Link>
        </li>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
            <Link to="/about" className='hidden sm:flex'>About</Link>
        </li>
        <li className='hidden sm:inline text-slate-700 hover:underline'>
            <Link to="/sign-in" className='hidden sm:flex'>Sign In</Link>
        </li>
  </ul>
    </div>
</header>
  )
}
