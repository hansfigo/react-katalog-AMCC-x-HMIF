import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
    return (
        <section className="bg-gray-100 py-16 px-8 md:py-40 md:px-52 flex flex-col gap-8 items-center">
            <div className="flex flex-col gap-4 text-center justify-center items-center">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 w-full text-slate-800">
                    Hi, I am Jarjit Singh.
                </h1>
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-slate-800">
                    A Fullstack Web Developer
                </p>
                <p className="text-md md:text-lg lg:text-xl text-slate-500 px-0 md:px-20">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorem, quia. Eius
                    mollitia aperiam nemo officia facilis dolor? Corporis tempore obcaecati pariatur
                    asperiores culpa, consequatur quia earum dicta cumque atque id.
                </p>
                <button className="border-[3px] border-slate-800 text-slate-800 font-medium py-2 px-8 rounded-lg w-fit flex gap-2 items-center justify-center hover:scale-110 transition-all">
                    Let's Talk
                    {/* <IoIosArrowDropright size={25} color="black" /> */}
                </button>
            </div>
            <div className="flex gap-3">
                <a href="https://github.com" target="_blank">
                    <FaGithub size={35} className="hover:scale-110 transition-all" />
                </a>
                <a href="https://www.linkedin.com" target="_blank">
                    <FaLinkedin size={35} className="hover:scale-110 transition-all" />
                </a>
            </div>
        </section>
    );
};

export default Hero;
