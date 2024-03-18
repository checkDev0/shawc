import FormWrapper from '../component/FormWrapper'
import Top from '../component/Top'

const Body = () => {
  return (
    <div className='w-screen md:h-screen'>
      <Top />
      <div className='flex items-center justify-center'>
        <FormWrapper />
      </div>
    </div>
  )
}

export default Body
