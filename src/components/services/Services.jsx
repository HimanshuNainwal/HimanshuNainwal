import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";
import Card from "../Card/Card";



const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      {/* <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow
          <br /> and move forward
        </p>
        <hr />
      </motion.div> */}
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          {/* <img src="/people.webp" alt="" /> */}
          <h1>
            <motion.b whileHover={{color:"orange"}}>Bringing</motion.b> Your Ideas to Life  with 
          </h1> 
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{color:"orange"}}> Javascript </motion.b> 
          </h1>
          {/* <button>WHAT I  DO?</button> */}
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants} >

      <Card url="./javascript.png" name="Javascript"    />
      <Card url="./react.png"   name="React.js"  />
      <Card url="./nextjs.png"  name="Next.js" imgStyle={{filter:"invert(1)"}}/>
      <Card url="./nodejs.png"  name="Node.js"/>
      <Card url="./aws.png" name="Amazon Web Service" />
      <Card url="./Vue.png" name="Vue.js" />
      <Card url="./git.png" name="Git" />

        
      </motion.div>
    </motion.div>
  );
};

export default Services;
