import gsap from 'gsap';
import { ScrollTrigger, SplitText} from "gsap/all" ;

gsap.registerPlugin( ScrollTrigger, SplitText );

const App = () => {
  return (
    <div className='flex-center h-[100vh] flex-col'>
      <h1 className='text-5xl font-bold'> 1234 </h1>
      <h4 className='flex-center text-cyan-600'>center</h4>
    </div>

  )
}

export default App
