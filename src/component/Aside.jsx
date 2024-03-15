import Logo from '../assets/logo2.gif'

const Aside = () => {
  return (
    <aside>
      <p className='mb-5'>Make Frontier Yahoo! your homepage</p>
      <section className='flex gap-2'>
        <input type='text' className='input self-end' />
        <span className='flex-col flex items-center'>
          <img src={Logo} />
          <button className='bg-[#3399CC] text-white font-semibold px-3 py-1 rounded-2xl'>
            Web Search
          </button>
        </span>
      </section>
    </aside>
  )
}

export default Aside
