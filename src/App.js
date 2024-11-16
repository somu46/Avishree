import './App.css';
import { motion, useScroll} from 'framer-motion';
import Home from './Pages/Home/Home.js'



function App() {

  const { scrollYProgress } = useScroll();

  return (
    <div className="App mt-[5.1rem]">
       <motion.div
       className='fixed s md:top-[5rem] left-0 right-0  h-[5px] bg-green-500 origin-right rounded-md z-30'
        style={{ scaleX: scrollYProgress }} />
      <Home/>
    </div>
  );
}

export default App;
