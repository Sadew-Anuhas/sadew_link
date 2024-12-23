import Head from "next/head";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import styles from "@/styles/Home.module.css";

// images
import profileImage from "../public/profile.png";
import graphicDesign from "../public/design.png";
import codeImage from "../public/code.png";
import image1 from "../public/web1.png";
import image2 from "../public/web2.png";
import image3 from "../public/web3.png";

//framer
import { motion } from "framer-motion";

// icons
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { FaSun } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


// hooks
import { useState } from "react";
import { s } from "motion/react-client";


export default function Home() {
  //function
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Sadew Anuhas</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;800&display=swap');
        </style>
      </Head>

        <main className="font-poppins bg-yellow-50 min-h-screen px-10 md:px-20 lg-px-40 dark:bg-gray-900">
          {/* nav and hero */}
          <section>
            {/* nav */}
            <nav className="py-10 flex justify-between">
              <h1 className=" text-sm md:text-xl dark:text-white">Developed by Sadew</h1>
              <ul className=" flex items-center">
                {/* icon */}
                <li>
                {darkMode ? (
                  <FaSun
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-xl mx-5 text-white" />
                ) : (
                  <BsFillMoonStarsFill
                    onClick={() => setDarkMode(!darkMode)}
                    className="cursor-pointer text-xl mx-5 text-black" />
                )}
              </li>
                <li>
                  <a
                  href=""
                  className=" bg-black text-white px-4 py-2 border-none rounded-md dark:text-black dark:bg-white"
                  >Subscribe</a>
                </li>
              </ul>
            </nav>

            {/* hero */}
            <div className="text-center p-10">
              <h1 className="text-5xl font-bold text-yellow-400 md:text-6xl lg:text-7xl lg:mb-4">Sadew Anuhas</h1>
              <h3 className=" text-2xl py-4 md:text-3xl dark:text-white">Web Designer & Developer</h3>
              <p className="font-sm text-gray-400 leading-6 max-w-xl mx-auto md:text-md">A versatile creative professional with over 5 years of experience in Graphic Design, Web Design, UI/UX, Video Editing, and Full-Stack Development. I specialize in crafting visually stunning and user-friendly digital experiences that bring ideas to life.</p>
            </div>
            {/* socials */}
            <div className="text-5xl flex justify-center gap-16 text-gray-600">
              <a href="https://whatsapp.com/">
                <MdWhatsapp/>
              </a>
              <a href="https://www.linkedin.com/">
                <FaLinkedin/>
              </a>
              <a href="https://x.com/">
                <FaXTwitter/>
              </a>
            </div>
            {/* profile */}
            <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            >
              <div className=" m-auto relative bg-gradient-to-b from-yellow-200 w-80 h-80 p-5   mt-20 rounded-full">
               <Image src={profileImage}
               alt="profile image"
               layout="fill"
               objectFit="cover" />
              </div>
            </motion.div>
          </section>
          {/* services */}
          <section>
            <div>
              <h2 className=" text-5xl py-2 font-bold opacity-60 dark:text-white">Services I Offer</h2>
              <p className="font-sm text-gray-400 leading-6 dark:text-white">I provide high-quality, tailored solutions to meet your unique needs, combining creativity, technical expertise, and a passion for excellence.</p>
            </div>

            {/* Services Cards */}
            <div className=" md:flex lg:flex gap-10 mx-auto">
              {/* card */}
              <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image src={graphicDesign}
                alt="design image"
                width={100}
                height={100}
                className=" inline"
                />
                <h2 className=" text-2xl font-bold">Graphic Design</h2>
                <p className=" text-sm py-2 text-gray-800 leading-6">Elevate your brand with striking logos, brochures, and social media designs that drive engagement.</p>
              </div>
              </motion.div>

              {/* card */}
              <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image src={codeImage}
                alt="code image"
                width={100}
                height={100}
                className=" inline"
                />
                <h2 className=" text-2xl font-bold">Web Design</h2>
                <p className=" text-sm py-2 text-gray-800 leading-6">Build responsive, custom Websites tailored to your brand and goals.</p>
              </div>
              </motion.div>

              {/* card */}
              <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              >
              <div className=" bg-yellow-300 text-center shadow-sm p-5 rounded-xl my-10">
                <Image src={graphicDesign}
                alt="design image"
                width={100}
                height={100}
                className=" inline"
                />
                <h2 className=" text-2xl font-bold">UI/UX Design</h2>
                <p className=" text-sm py-2 text-gray-800 leading-6">Design intuitive, engaging UI/UX with Figma for web and mobile apps.</p>
              </div>
              </motion.div>
            </div>
          </section>

          {/* my work */}
          <section>
            <div>
              <h2 className=" text-5xl py-2 font-bold opacity-60 dark:text-white">Portfolio</h2>
              <p className="font-sm text-gray-400 leading-6 dark:text-white">Explore a curated collection of my previous projects showcasing my design and development expertise, delivering creative solutions tailored to my clients' goals.</p>
            </div>
            {/* images */}
            <div className=" flex flex-col gap-10 p-10 lg:flex-row lg:flex-wrap">
              <div className=" basis-1/3 flex-1">
              <motion.div
              whileHover={{scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <Image
                src={image1}
                alt="image 1"
                layout="responsive"
                className=" rounded-lg object-cover"
                />
              </motion.div>
              </div>
              <div className=" basis-1/3 flex-1">
              <motion.div
              whileHover={{scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <Image
                src={image2}
                alt="image 1"
                layout="responsive"
                className=" rounded-lg object-cover"
                />
              </motion.div>
              </div>
              <div className=" basis-1/3 flex-1">
              <motion.div
              whileHover={{scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <Image
                src={image1}
                alt="image 1"
                layout="responsive"
                className=" rounded-lg object-cover"
                />
                </motion.div>
              </div>
              <div className=" basis-1/3 flex-1">
              <motion.div
              whileHover={{scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <Image
                src={image2}
                alt="image 1"
                layout="responsive"
                className=" rounded-lg object-cover"
                />
              </motion.div>
              </div>
              <div className=" basis-1/3 flex-1">
              <motion.div
              whileHover={{scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <Image
                src={image3}
                alt="image 1"
                layout="responsive"
                className=" rounded-lg object-cover"
                />
              </motion.div>
              </div>
              <div className=" basis-1/3 flex-1">
              <motion.div
              whileHover={{scale: 1.1, rotate: 3 }}
              whileTap={{ scale: 0.8, rotate: -10, borderRadius: "100%" }}
              >
                <Image
                src={image1}
                alt="image 1"
                layout="responsive"
                className=" rounded-lg object-cover"
                />
              </motion.div>
              </div>
            </div>
          </section>

          {/* footer */}
          <footer className=" border-t-2 border-black text-sm opacity-70 flex flex-col gap-5 items-center justify-center py-10 lg:flex-row lg:items-center dark:border-white">
            <div>
              <h3 className=" text-base mb-2 dark:text-white">contact me for more details</h3>
              <p className=" text-gray-500 dark:text-white">Connect with me on social media for updates, projects, and collaborations. Find me on social media, where I share insights and behind-the-scenes content. Let’s stay in touch and grow our network!</p>
            </div>
            <div>
              {/* socials */}
              <div className="text-5xl flex justify-center gap-16 text-gray-600 dark:text-white">
                <a href="https://whatsapp.com/">
                  <MdWhatsapp/>
                </a>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin/>
                </a>
                <a href="https://x.com/">
                  <FaXTwitter/>
                </a>
              </div>
            </div>
          </footer>

        </main>
    </div>
  );
}
