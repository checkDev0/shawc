import Logo from '../assets/front-logo.png'

const Header = () => {
  return (
    <div className='mt-5 w-[50%] md:flex justify-between items-center hidden'>
      <img src={Logo} className='w-20' />
      <select className='border rounded-md h-10 outline-none'>
        <option>Go To...</option>
        <option>My Account</option>
        <option>Pay your bills</option>
        <option>Check your mail</option>
      </select>
    </div>
  )
}

export default Header
