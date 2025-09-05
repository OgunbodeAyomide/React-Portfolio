import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn, textVariant } from "../utils/motion"
import BallCanvas from "./canvas/Ball"

const projectCard = ({ index, name, description, tags, image, source_code_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{
        max: 45,
        scale: 1,
        speed: 450
      }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <a
  href={source_code_link}
  target="_blank"
  rel="noopener noreferrer"
  className="block relative w-full h-[230px] cursor-pointer"
>
  <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
  <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
    <div className="black-gradient w-10 h-10 rounded-full flex justify-center items-center">
      <img src={github} alt="github" className="w-1/2 h-1/2 object-contain" />
    </div>
  </div>
</a>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

      </Tilt>
    </motion.div>
  );
};

const ProjectCard = projectCard;

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>

      <div className="w-full flex flex-col">
        <motion.p variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
          These projects represent my journey as a student and developer, 
          where I’ve applied what I’m learning to real-world problems. 
          Each one includes a short description with links to the code and live demos.
        </motion.p>
        <div className="mt-10 flex flex-wrap gap-7">
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Works, "");