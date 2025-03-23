import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { ImArrowDown } from "react-icons/im";
import { motion } from "framer-motion";
function Home() {
  return (
    <section
      className="w-full h-screen flex justify-center items-center  mb-5 min-h-[700px] relative"
      id="Home"
      style={{

        backgroundImage: "url('./asset/stars.gif')"
      }}
    >

      <motion.div
        className="w-2/3 flex min-w-[700px]"

      >
        <motion.div
          className="avatar m-3"
          initial={{ opacity: 0, x: -500, y: -250, rotate: -30 }}
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ duration: 1.2 }}
        >
          <div className="w-64 rounded-full max-h-96">
            <img src="./asset/project/profilePic.png" alt="" />
          </div>
        </motion.div>
        <div>
          <h1 className="text-2xl text-white m-3">
            <motion.p className="text-4xl"
              initial={{ opacity: 0, y: -750 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1 }}

            >Hi!</motion.p>
            <motion.p className="text-6xl"
              initial={{ opacity: 0, x: 1000 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5 }}>I'm Hongkun Guan</motion.p>
            <motion.p
              initial={{ opacity: 0, y: 750 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 1.5 }}
            >a passionate and motivated Computer Science graduate from the University of California, San Diego.
              With a solid foundation in IT,I have hands-on experience with various technologies, including web development,
              system administration, and networking.
            </motion.p>

          </h1>
          <div className="flex justify-center items-center mt-10">
            <motion.a
              className="btn bg-base-100 m-3"
              href="https://github.com/Hongkun882?tab=repositories"
              initial={{ opacity: 0, y: 750 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.1 }}
            >
              <FaGithub /> Github
            </motion.a>
            <motion.a
              className="btn border border-gray-500 bg-black text-gray-300 m-3"
              href="https://portfolio2391.s3.us-east-2.amazonaws.com/Resume.pdf"
              initial={{ opacity: 0, y: 750 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 2 }}
              whileHover={{ scale: 1.1 }}
            >
              <IoDocumentTextOutline /> Resume
            </motion.a>
          </div>

        </div>


      </motion.div>
      <motion.div className="flex absolute right-3 bottom-0"
      animate={{ y: [0, -20, 0] }} 
      transition={{ repeat: Infinity, repeatType: "reverse", duration: 1 }}>
        <ImArrowDown fill="white" className="h-[40px] w-[25px] mr-3" />
        <h1 className="text-white text-3xl">Scroll Down for More</h1>
      </motion.div>

    </section>
  );
}

export default Home;
