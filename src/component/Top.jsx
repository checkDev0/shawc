import { LuMenu } from 'react-icons/lu'
import Logo from '../assets/logo-mob.png'

const Top = () => {
  return (
    <nav className='w-screen bg-[rgb(20,25,40)] text-white h-[55px] flex items-center'>
      <div className='flex items-center justify-between w-[60%] md:hidden'>
        <span className='text-3xl block p-1 border-[0.2px] rounded-md ml-2 border-white'>
          <LuMenu />
        </span>
        <img src={Logo} className='w-16' />
      </div>
      <ul className='lg:flex gap-7 ml-[13rem] flex-wrap hidden'>
        <li>Residential</li>
        <li>Small Business</li>
        <li>Enterprise</li>
        <li>Wholesale</li>
      </ul>
    </nav>
  )
}

export default Top
