import Aside from './Aside'
import Footer from './Footer'
import Form from './Form'

const FormWrapper = () => {
  return (
    <div className='w-full border-2 rounded px-32 py-10 mt-5'>
      <h2 className='text-[#333333] text-[2.4rem] tracking-wide mb-10'>
        Frontier Mail Login
      </h2>
      <section className='flex justify-between w-full'>
        <Form />
        <Aside />
      </section>
      <Footer />
    </div>
  )
}

export default FormWrapper
