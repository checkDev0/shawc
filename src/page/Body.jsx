import FormWrapper from '../component/FormWrapper'
import Header from '../component/Header'
import Top from '../component/Top'

const Body = () => {
  return (
    <div className='w-screen h-screen'>
      <Top />
      <section className='lg:px-[12rem]'>
        <Header />
        <FormWrapper />
      </section>
    </div>
  )
}

export default Body
