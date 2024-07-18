import React, { useState, useEffect } from 'react';
import { Link, Events } from 'react-scroll';

function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    Events.scrollEvent.register('begin', function(to) {
      setActiveSection(to);
    });

    return () => {
      Events.scrollEvent.remove('begin');
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 fixed p-4 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-blue-500 text-3xl md:text-4xl font-bold">
          BePrasanna
          <span className="ml-2">😊</span>
        </div>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
        <div className={`hidden md:flex md:items-center md:space-x-4`}>
          <Link
            activeClass="text-white"
            to="home"
            spy={true}
            smooth={true}
            duration={500}
            className={`text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'home' ? 'text-white' : ''}`}
          >
            Home
          </Link>
          <Link
            activeClass="text-white"
            to="work-experience"
            spy={true}
            smooth={true}
            duration={500}
            className={`text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'work-experience' ? 'text-white' : ''}`}
          >
            Work Experience
          </Link>
          <Link
            activeClass="text-white"
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            className={`text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'projects' ? 'text-white' : ''}`}
          >
            Projects
          </Link>
          <Link
            activeClass="text-white"
            to="skills"
            spy={true}
            smooth={true}
            duration={500}
            className={`text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'skills' ? 'text-white' : ''}`}
          >
            Skills
          </Link>
          <Link
            activeClass="text-white"
            to="education"
            spy={true}
            smooth={true}
            duration={500}
            className={`text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'education' ? 'text-white' : ''}`}
          >
            Education
          </Link>
          <Link
            activeClass="text-white"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            className={`text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'contact' ? 'text-white' : ''}`}
          >
            Contact
          </Link>
        </div>
      </div>
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`}>
        <Link
          activeClass="text-white"
          to="home"
          spy={true}
          smooth={true}
          duration={500}
          className={`block text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'home' ? 'text-white' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          activeClass="text-white"
          to="work-experience"
          spy={true}
          smooth={true}
          duration={500}
          className={`block text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'work-experience' ? 'text-white' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          Work Experience
        </Link>
        <Link
          activeClass="text-white"
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          className={`block text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'projects' ? 'text-white' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          Projects
        </Link>
        <Link
          activeClass="text-white"
          to="skills"
          spy={true}
          smooth={true}
          duration={500}
          className={`block text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'skills' ? 'text-white' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          Skills
        </Link>
        <Link
          activeClass="text-white"
          to="education"
          spy={true}
          smooth={true}
          duration={500}
          className={`block text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'education' ? 'text-white' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          Education
        </Link>
        <Link
          activeClass="text-white"
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
          className={`block text-gray-300 hover:text-white px-3 py-2 cursor-pointer ${activeSection === 'contact' ? 'text-white' : ''}`}
          onClick={() => setIsOpen(false)}
        >
          Contact
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
