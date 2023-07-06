import LineGradient from "./LineGradient";
import { motion } from "framer-motion";
import KeepIT from "../assets/KeepIT.png";
import PG from "../assets/Pg.png";
import WeatherApp from "../assets/weather.png";
import OldPortfolio from "../assets/oldprt.png";
import PokePic from "../assets/PokePic.png"
import { FaExternalLinkAlt } from "react-icons/fa";
import { RiGithubFill } from "react-icons/ri";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: KeepIT,
      title: "KeepIT",
      demo: "https://sh-google-keep-clone.netlify.app",
      code: "https://github.com/Sh4dab/Google-Keep-Clone",
    },
    {
      id: 2,
      src: WeatherApp,
      title: "Weather App",
      demo: "https://sh4dab.github.io/WeatherApp.github.io/",
      code: "https://github.com/Sh4dab/WeatherApp.github.io",
    },
    {
      id: 3,
      src: PG,
      title: "Password Generator",
      demo: "https://sh4dab.github.io/Password-Generator/",
      code: "https://github.com/Sh4dab/Password-Generator",
    },
    {
      id: 4,
      src: OldPortfolio,
      title: "Portfolio 1.0",
      demo: "https://sh4dab.github.io/portfolio/",
      code: "https://github.com/Sh4dab/portfolio",
    },
    {
      id: 5,
      src: PokePic,
      title: "PokePic",
      demo: "https://sh4dab.github.io/PokePic/",
      code: "https://github.com/Sh4dab/PokePic",
    },
  ];
  return (
    <section id="projects" className="pt-20 pb-20">

      <motion.div
        className="md:w-2/5 mx-auto text-center pb-20"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-navy-blue">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
      </motion.div>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map((project) => (
            <motion.div
            className=""
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div key={project.id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={project.src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="flex items-center justify-center text-2xl pt-5 font-playfair font-semibold">{project.title}</p>
              <div className="flex items-center justify-center">
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105" 
                  target="_blank"
                  rel="noreferrer"
                  href={project.demo}>
                  Demo <FaExternalLinkAlt className="inline"/>
                </a>
                <a className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 "
                  target="_blank"
                  rel="noreferrer"
                  href={project.code}>
                  Code <RiGithubFill size={25} className="inline"/>
                </a>
              </div>
            </div>
          </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Projects;