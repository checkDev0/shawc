import Form from './Form'

const FormWrapper = () => {
  return (
    <div className='mt-7 bg-white mx-3 px-3 py-5 w-full md:w-[50%] shadow-microsoftLogin'>
      <main className='flex'>
        <Form />
        <div className='hidden md:block'></div>
      </main>
    </div>
  )
}

export default FormWrapper
