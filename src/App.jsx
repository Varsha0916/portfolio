import React from "react";
import { Link } from 'react-scroll';

const Portfolio = () => {
  
  return (
    <div className="bg-[#b9b5a3] text-[#504b38]">
      {/* Navbar */}
      <header className="bg-[#fdf6db] text-[#504b38] py-7 shadow-md">
  <nav className="container mx-auto flex justify-center">
    
    <ul className="flex space-x-4 md:space-x-8  text-l md:text-xl font-semibold">
      <li>
        <Link 
          to="about" 
          smooth={true} 
          duration={800} 
          className="cursor-pointer hover:text-[#b9b28a] transition duration-300"
        >
          About Me
        </Link>
      </li>
      <li>
        <Link 
          to="skills" 
          smooth={true} 
          duration={800} 
          className="cursor-pointer hover:text-[#b9b28a] transition duration-300"
        >
          Skills
        </Link>
      </li>
      <li>
        <Link 
          to="contact" 
          smooth={true} 
          duration={800} 
          className="cursor-pointer hover:text-[#b9b28a] transition duration-300"
        >
          Contact Me
        </Link>
      </li>
    </ul>
  </nav>
</header>
    

      {/* Home Section */}
      <section 
id="about" 
        className="flex flex-col-reverse md:flex-row items-center justify-center min-h-screen p-6 bg-[#504b38] text-[#fdf6db] px-10 md:px-20 gap-7 md:gap-56 pt-20"
      >
        {/* Left Content */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold">VARSHA</h1>
          <h2 className="text-xl md:text-2xl font-semibold mt-4">Frontend Developer</h2>

          <p className="max-w-xl  mt-6">
            Driven and innovative Computer Science and Engineering student with a
            strong passion for full-stack development. Eager to apply technical expertise,
            problem-solving abilities, and creativity to build dynamic, scalable, and user-centric applications.
            Seeking opportunities to enhance my skill set through hands-on experience, collaboration, 
            and impactful projects in a professional environment.
          </p>

          {/* Resume Button */}
          <a 
  href="https://amber-marlee-79.tiiny.site" 
  target="_blank" 
  rel="noopener noreferrer"
  className="mt-6 inline-block px-6 py-3 text-lg font-semibold text-[#fdf6db] border border-[#fdf6db] rounded-lg shadow-md transition-all duration-300 hover:bg-[#e5dfc4] hover:text-[#5a5646] active:bg-[#b9b28a] active:text-[#fdf6db]"
>
  RESUME
</a>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2  flex justify-center mt-30 ">
          <img
            src="/images/varsha.png" 
            alt="Varsha"
            className="w-[300px] h-[250px] md:h-[450px]  object-cover rounded-[10px]  shadow-[0_0_30px_#f8f3d9]"
          />
        </div>
      </section>
      
   {/* Skills Section */}
   <section id="skills" className="pt-9 pb-20 bg-[#f8f3d9] text-[#504b38] text-center">
  <h2 className="text-4xl font-bold">My Skills</h2>
  <div className="w-20 h-[5px] bg-[#504b38] mx-auto my-4"></div>

  {/* Responsive Grid Layout */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 px-4 md:px-20 max-w-6xl mx-auto">
    
    {/* Skill Card */}
    {[
      { img: "/images/html.png", title: "HTML", text: "I am eager to deepen my understanding of advanced HTML features, including semantic tags, forms, and accessibility enhancements." },
      { img: "/images/css.png", title: "CSS", text: "I worked on a project where I utilized CSS to design and style a visually appealing and responsive webpage." },
      { img: "/images/java.png", title: "Java", text: "I have a strong foundation in Java and am proficient in solving programming problems using its core concepts." },
      { img: "/images/react.png", title: "React.js", text: "I recently started learning React.js to enhance my skills for a project. During this process, I have been focusing on understanding key concepts." },
      { img: "/images/c.png", title: "C", text: "C was the first programming language that I learned as a part of my academic syllabus, providing me with a strong foundation in programming." }
    ].map((skill, index) => (
      <div key={index} className="flex justify-center">
        <div className="bg-[#504b38] text-[#fdf6db] p-6 rounded-lg shadow-lg flex flex-col hover:-translate-y-1 hover:shadow-2xl items-center w-80 h-80">
          <img src={skill.img} alt={skill.title} className="w-16 h-16 mb-4" />
          <h3 className="text-2xl font-semibold">{skill.title}</h3>
          <p className="mt-4 text-center text-base">{skill.text}</p>
        </div>
      </div>
    ))}

  </div>
</section>




      {/* Contact Section */}
      <section id="contact" className="pt-20 py-10 bg-[#504b38]  text-[#fdf6db] text-center">
        <div className="flex justify-center space-x-6">
          <a href="mailto:varshakrishnakumar16@gmail.com" target="_blank" rel="noopener noreferrer">
            <img src="/images/fmail.png" alt="Email" className="w-10 h-10 hover:scale-110 transition-transform" />
          </a>
          <a href="tel:+9965933531">
            <img src="/images/fphone.png" alt="Phone" className="w-10 h-10 hover:scale-110 transition-transform" />
          </a>
          <a href="https://www.linkedin.com/in/varsha1603" target="_blank" rel="noopener noreferrer">
            <img src="/images/flinkedin.png" alt="LinkedIn" className="w-10 h-10 hover:scale-110 transition-transform" />
          </a>
          <a href="https://github.com/Varsha0916" target="_blank" rel="noopener noreferrer">
            <img src="/images/fgithub.png" alt="GitHub" className="w-10 h-10 hover:scale-110 transition-transform" />
          </a>
        </div>
        <p className="mt-4">© 2025 Varsha | All Rights Reserved</p>
      </section>
    </div>
  );
};

export default Portfolio;
