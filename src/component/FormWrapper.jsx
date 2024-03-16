import Aside from './Aside'
import Footer from './Footer'
import Form from './Form'

const FormWrapper = () => {
  return (
    <div className='lg:w-full border-2 rounded md:px-32 px-2 py-10 mt-5'>
      <h2 className='text-[#333333] text-[1.7rem] md:text-[2.4rem] tracking-wide mb-10'>
        Frontier Mail Login
      </h2>
      <section className='flex flex-col md:flex-row justify-between w-full'>
        <Form />
        <Aside />
      </section>
      <Footer />
    </div>
  )
}

export default FormWrapper
