import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function SignUp() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  })
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  
  const handleChange = (e) => {
    setFormData({...formData, [e.target.id]: e.target.value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault() //it prevent refresh the page
    try {
      // const res = await fetch('/api/auth/signup', formData)
      setLoading(true)
      const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    const data = await res.json()
    if (data.success === false) {
      setLoading(false)
      setError(data.message)
      return;
    }
    setLoading(false)
    setError(null)
    navigate('/sign-in')
  } catch (error) {
    setLoading(false)
    setError(error.message)
  }
}

  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl text-center font-semibold my-10'>SignUp</h1>
      <form className='flex flex-col gap-4 max-w-md mx-auto'>
        <input type='text' placeholder='Username' className='border p-3 rounded-lg' id="username" onChange={handleChange} />
        <input type='email' placeholder='Email' className='border p-3 rounded-lg' id="email" onChange={handleChange} />
        <input type='password' placeholder='Password' className='border p-3 rounded-lg' id="password" onChange={handleChange} />
        <button type='submit' className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80' disabled={loading} onClick={handleSubmit}>SignUp</button>
      </form>
      <div className='flex gap-2 mt-5'>
        <p>Already have an account?</p>
        <Link to="/signIn">
          <span className='text-blue-700'>SignIn</span>
        </Link>
      </div>
      {error && <p className='text-red-500 mt-5'>{error}</p>}
    </div>
  )
}
