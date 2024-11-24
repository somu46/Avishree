import './App.css';
import { motion, useScroll} from 'framer-motion';
import Home from './Pages/Home/Home.js'



function App() {

  const { scrollYProgress } = useScroll();

  return (
    <div className="App mt-[5.1rem]">
       <motion.div
       className='fixed top-[4.7rem] md:top-[4.8rem] left-0 right-0  h-[7px] bg-red-500 origin-left rounded-md z-30'
        style={{ scaleX: scrollYProgress }} />
      <Home/>
    </div>
  );
}

export default App;
