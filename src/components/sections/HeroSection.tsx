import React from "react";
import { motion } from "framer-motion";

interface HeroSectionProps {
  name?: string;
  title?: string;
  introduction?: string;
  photoUrl?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  name = "Kyrah",
  title = "SOFTWARE TESTER",
  introduction = "Passionate Software Tester dedicated to ensuring quality and seamless user experiences. Skilled in manual testing, bug tracking, and usability evaluation using Jira and Confluence. I love finding and fixing issues to make software better.",
  photoUrl = "https://api.dicebear.com/7.x/avataaars/svg?seed=kyrah&gender=female&hair=long&hairColor=black",
}) => {
  return (
    <section
      id="hero"
      className="w-full h-[600px] flex items-center justify-center bg-[#FFF5F7] px-4 md:px-8 lg:px-16"
    >
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#D8A7B1] mb-4">
            Hello I'm{" "}
            <span className="font-cursive text-[#9D8189]">{name}</span>
          </h1>
          <h2 className="text-xl md:text-2xl text-[#9D8189] mb-6">{title}</h2>
          <p className="text-[#6D6875] max-w-lg mx-auto md:mx-0 mb-8">
            {introduction}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="px-6 py-3 bg-[#D8A7B1] text-white rounded-full hover:bg-[#B6808C] transition-colors duration-300">
              View My Work
            </button>
            <button className="px-6 py-3 border-2 border-[#D8A7B1] text-[#D8A7B1] rounded-full hover:bg-[#D8A7B1] hover:text-white transition-colors duration-300">
              Contact Me
            </button>
          </div>
        </motion.div>

        <motion.div
          className="relative flex-1 flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={photoUrl}
              alt={`${name} - ${title}`}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Decorative elements */}
          <div className="absolute -top-6 -left-6 w-12 h-12 rounded-full bg-[#F8E1E7] opacity-70"></div>
          <div className="absolute bottom-12 -right-6 w-16 h-16 rounded-full bg-[#E3D0D8] opacity-70"></div>
          <div className="absolute top-1/2 -left-10 w-8 h-8 rounded-full bg-[#B6808C] opacity-40"></div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
