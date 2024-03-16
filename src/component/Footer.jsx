import { BsFillChatFill } from 'react-icons/bs'
import { MdHelp } from 'react-icons/md'

const Footer = () => {
  return (
    <footer className='text-[#333333] flex flex-col gap-3 mt-5 text-sm md:text-base'>
      <section className='flex items-center font-medium gap-2 '>
        <p>Still need help?</p>
        <span className='flex items-center gap-1'>
          <BsFillChatFill /> Live Chat
        </span>
        <span className='flex items-center gap-1'>
          <MdHelp /> Help Center
        </span>
      </section>
      <p>
        <span className='font-medium'>Note: </span>For your security, please be
        sure to log out when you are done.
      </p>
      <p>
        Frontier does not track how you use e-mail or what sites you visit. If
        your Frontier e-mail is hosted by Yahoo!, Yahoo! does not share this
        information with Frontier. See Frontier's Privacy Policy.
      </p>
    </footer>
  )
}

export default Footer
