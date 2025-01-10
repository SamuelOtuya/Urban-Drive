import aboutus from '../assets/aboutus.png'
import QuestionBoxWithFAQ from '../components/FAQ/questions'

const FAQs = () => {
  return (
    <div className="relative h-96 bg-gray-800">
    <img
      src={aboutus}
      alt="Cars showcase"
      className="w-full h-full object-cover opacity-70"
    />
    <div className="absolute inset-0 flex items-center justify-center">
     <div> <h1 className="text-5xl font-bold text-white">FAQs</h1></div>
    <nav className=" text-white">
      <span>Home / About Us</span>
    </nav>
    </div>
    <div className='flex-grow pt-10'>
    <QuestionBoxWithFAQ/>
    </div>
   
  </div> 
  
  )
}

export default FAQs