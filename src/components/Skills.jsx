import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services, technologies } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, name, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[50px] flex justify-evenly items-center '
      >
        <img
          src={icon}
          alt='web-development'
          className='w-12 h-12 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {name}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        {/* <p className={styles.sectionSubText}>Introduction</p> */}
        <h2 className={styles.sectionHeadText}>Skills</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
       
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {technologies.map((technology, index) => (
          <ServiceCard key={technology.title} index={index} {...technology} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
