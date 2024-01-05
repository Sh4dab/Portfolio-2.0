
import { motion } from "framer-motion";
import KeepIT from "../assets/KeepIT.png";
import PG from "../assets/Pg.png";
import WeatherApp from "../assets/weather.png";
import OldPortfolio from "../assets/oldprt.png";
import PokePic from "../assets/PokePic.png";
import ContactsBackend from "../assets/ContactsBackend.png";
import ProjectCard from "./ProjectCard";

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
    {
      id: 6,
      src: ContactsBackend,
      title: "Contacts Backend",
      demo: "",
      code: "https://github.com/Sh4dab/mycontacts-backend",
      techStack: ["ExpressJS","MongoDB"],
    },
  ];
  return (
    <section id="projects" className="pt-20 pb-20">

      <motion.div
        className="md:w-2/5 pb-20"
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
          <p className="font-playfair font-semibold text-6xl">
            <span className="text-navy-blue">PRO</span>JECTS
          </p>
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
            <ProjectCard id={project.id} imgSrc={project.src} title={project.title} 
            demoLink={project.demo} codeLink={project.code} techStack={project.techStack}
            />
          </motion.div>
          ))}
        </div>
    </section>
  );
};

export default Projects;