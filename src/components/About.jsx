import { motion } from 'framer-motion'; // Import Framer Motion for animations
import React, { useEffect, useRef, useState } from 'react';
import myImage from '../assets/my-image.png'; // Replace with your image path

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Stop observing once the element is visible
        }
      },
      { threshold: 0.4 } // Trigger when 10% of the section is visible
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section
      id="about"
      ref={aboutRef}
      className="p-12 bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300 flex items-center"
    >
      <motion.div
        className="flex flex-col items-center lg:flex-row"
        initial={{ opacity: 0, x: -100 }}
        animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex-shrink-0">
          <img src={myImage} alt="About Me" className="w-fit h-fit object-cover rounded-full"/>
        </div>
        <div className="mt-8 lg:mt-0 lg:ml-12">
          <h2 className="text-5xl font-bold">About Me</h2>
          <p className="mt-4 text-lg">
            I am a passionate software engineer with experience in developing mobile applications for both Android and
            iOS platforms.
            My journey started with an internship, where I learned the fundamentals of software development, and has
            since evolved
            into working on real-world projects that challenge my skills and creativity.
          </p>
          <p className="mt-4 text-lg">
            I enjoy solving complex problems and am always eager to learn new technologies and frameworks. When I’m not
            coding,
            you can find me playing cricket or indulging in my love for video games.
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
