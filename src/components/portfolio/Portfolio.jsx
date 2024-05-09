import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { redirect } from "react-router-dom";

const items = [
  {
    id: 1,
    title: "Mochie Shoes",
    img: "./MochiShoes.jpg",
    url:"https://www.mochishoes.com/",
    desc: "Contributed to the development of the Mochi brand website, a footwear and accessories platform targeting youth and families. Enhanced user experience with responsive design and intuitive navigation. Collaborated on visuals and content to resonate with diverse audiences.    ",
  },
  {
    id: 2,
    title: "W",
    img: "wForWomen.png",
    url:"https://wforwoman.com/",
    desc: "Contributed to the development of the W for Woman brand website, a premium, ready-to-wear clothing platform for Indian women. Implemented user-friendly features and design elements to showcase traditional, contemporary, and fusion styles. Collaborated on visuals and content to reflect the brand's elegance and versatility.",
  },
  {
    id: 3,
    title: "Metro Shoes",
    img: "metroShoes.png",
    url:"https://www.metroshoes.com/",
    desc: "Contributed to the development of the Metro Shoes brand website, a leading footwear and accessories platform established in 1947 in Mumbai, India. Collaborated on showcasing a diverse range of products for men, women, children, and unisex, including casual, work, and embellished footwear for weddings, festivals, and parties. Implemented user-friendly features and design elements to enhance the online shopping experience.",
  },
  {
    id: 4,
    title: "WNDW",
    img: "./wndw.png",
    desc: "Contributed to the development of wndw, a website that facilitates local store discovery and enables product purchases from nearby stores. Collaborated on implementing location-based features to help users find stores in their vicinity. Enhanced user experience by integrating seamless purchasing options from local retailers through the platform.",
    url:"https://wndw.in/"
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });


  const handleRedirect = (url) => {

    // window.location.replace(url)
    window.location = url
  }

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button onClick={() => handleRedirect(item.url)}> <motion.a  src={item.url}>See Demo </motion.a></button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
