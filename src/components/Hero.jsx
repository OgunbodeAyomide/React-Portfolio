import { motion } from 'framer-motion';

import { styles } from '../styles';
import { ComputersCanvas } from './canvas';



const Hero = () => {
  return (
    <section className= "relative w-full h-screen mx-auto mt-10">
      <div className= {`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-10`}>
        <div className = "flex flex-col justify-center items-center mt-5">
          
          {/*The circle and the long line design */}
          <div className ="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient"/>

        </div>

        {/*Introductry Text*/}
        <div>
          <h1 className= {`${styles.heroHeadText} text-white `}>Hi, I'm <span className="text-[#B28EFF]"> Ayomide </span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I'm a Fullstack Developer<br clasName= "sm:block hidden"/>I create immersive 3D websites and applications.<br clasName= "sm:block hidden"/>
            Let's build something amazing together.
            
          </p>

        </div> 

      </div>

      {/*ComputerCanvas*/}
      <ComputersCanvas/>



      {/*Scroll icon*/}
      <div className = "absolute bottom-10 bottom-32 w-full flex justify-center">
        <a href = "#about">
          <div className = "w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div>
              
            </motion.div>

          </div>

        </a>
      </div>


    </section>
  )
}

export default Hero