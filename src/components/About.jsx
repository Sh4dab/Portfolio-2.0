import { motion } from "framer-motion";
import ProfileImg from "../assets/profile.png"
const About = () => {
    return (
        <section id="about" className="md:flex md:justify-between md:items-center md:h-full gap-16">
            <div className="basis-2/5 z-10 mt-16 md:mt-32 flex justify-center ">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: -50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                <div className="">
                    <img className="rounded-full" src={ProfileImg} alt="profile" />
                </div>
                </motion.div>
            </div>
            <div className="z-30 basis-3/5 mt-12 md:mt-32">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                        hidden: { opacity: 0, x: 50 },
                        visible: { opacity: 1, x: 0 },
                    }}
                >
                    <h1 className="text-6xl text-navy-blue font-playfair z-10 text-center">About Me</h1>

                    <p className="mt-10 mb-7 text-lg md:text-start text-justify tracking-tighter">
                        Hello! I'm <span className="text-blue-300">Shadab</span>, a final year B.Tech student at NSUT and a self-taught front-end developer with proficiency in HTML, CSS, JavaScript, ReactJs, Bootstrap, Tailwind CSS, and NodeJs. I love the process of learning and experimenting with new technologies, and I am always eager to expand my skill set.
                        <br />
                        In addition to my technical skills, I have a strong interest in open source projects. I enjoy contributing to the community and collaborating with other developers.
                        <br />
                        Feel free to explore my portfolio and get in touch with me for any potential collaborations or projects. I am excited about the possibilities that lie ahead in the world of web development <span className="text-blue-300">!"</span>
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
export default About;