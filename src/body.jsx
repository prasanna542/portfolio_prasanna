import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Body() {
  const titles = [
    "software engineer",
    "web developer",
    "desktop application developer",
    "freelancer",
    "passionate anchor"
  ];

  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typeSpeed = isDeleting ? 50 : 60;
    const nextCharIndex = isDeleting ? charIndex - 1 : charIndex + 1;
    const timeout = setTimeout(() => {
      setCurrentTitle(titles[titleIndex].substring(0, nextCharIndex));
      setCharIndex(nextCharIndex);

      if (!isDeleting && nextCharIndex === titles[titleIndex].length) {
        setTimeout(() => setIsDeleting(true), 200); // Wait before starting to delete
      } else if (isDeleting && nextCharIndex === 0) {
        setIsDeleting(false);
        setTitleIndex((titleIndex + 1) % titles.length);
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, titleIndex, titles]);

  const experiences = [
    {
      domain: "Senior Executive",
      organization: "Godrej Infotech Ltd",
      imageUrl: "/images/godrejInfotechLogo2.png",
      moreInfo: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam faucibus felis et sem tincidunt, quis vehicula nisi pretium. Donec auctor lorem sed orci consequat, at posuere metus aliquet."
    },
    {
      domain: "Software Intern",
      organization: "Acuradyne, IIT Bombay",
      imageUrl: "/images/iitBombayLogo.png",
      moreInfo: "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla facilisi. Ut lobortis dui eget eros auctor, nec tincidunt ligula fermentum."
    },
    {
      domain: "Cybersecurity Intern",
      organization: "Cyber Secured India",
      imageUrl: "/images/csiLogoFinal.png",
      moreInfo: "Integer et volutpat eros. Morbi non arcu leo. Duis quis eros ex. In vehicula luctus dui, eget consequat nisl laoreet in."
    },
    // Add more experiences as needed
  ];

  const [expandedExperience, setExpandedExperience] = useState(null);

  const handleMoreInfoClick = (index) => {
    setExpandedExperience(index === expandedExperience ? null : index);
  };

  return (
    <div>
      <div>
        <section
          id="home"
          className="min-h-screen p-24 bg-gray-800 flex flex-col md:flex-row items-center justify-between"
        >
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-white text-5xl md:text-6xl font-bold">
              Hi, I'm Prasanna Pawar
            </h2>
            <p className="text-white mt-4 text-2xl md:text-3xl">
              I am a <span className="text-blue-500">{currentTitle}</span>
            </p>
            <button className="bg-transparent hover:bg-blue-500 text-blue-400 font-semibold hover:text-white py-2 px-4 my-10 border border-blue-500 hover:border-transparent rounded">
              Connect with Me
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <img
              src="/images/profile_no_background.png"
              alt="Profile"
              className="rounded-full w-100 h-100 md:w-80 md:h-80"
            />
          </div>
        </section>
      </div>

      <section id="work-experience" className="p-8 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center text-gray-800">
          Work Experience
        </h2>

        {experiences.map((experience, index) => (
          <div key={index} className="relative flex flex-col md:flex-row items-center md:items-center my-4 p-4 bg-gray-200 rounded-lg shadow-lg">
            <div className="md:w-1/4 flex items-center justify-center md:justify-start">
              <img src={experience.imageUrl} alt={`${experience.organization} logo`} className="h-32 w-32 object-contain" />
            </div>
            <div className="md:w-1/4 flex items-center justify-start">
              <p className="text-2xl md:text-3xl font-bold ml-2">{experience.organization}</p>
            </div>
            <div className="md:w-1/4 text-center md:text-left text-gray-800 flex items-center justify-center md:justify-start">
              <p className="font-semibold">{experience.domain}</p>
            </div>
            <button
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white font-semibold py-2 px-4 md:py-10 md:px-10 md:mx-10 rounded-full hover:bg-blue-700"
              onClick={() => handleMoreInfoClick(index)}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
            {expandedExperience === index && (
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-300 rounded-lg shadow-lg mt-4">
                <p>{experience.moreInfo}</p>
              </div>
            )}
          </div>
        ))}
      </section>

      <section id="projects" className="p-20 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-center">Projects</h2>
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/3 flex justify-center md:justify-start mb-6 md:mb-0">
            <img src="/images/healthyHeartImage.jpeg" alt="Projects" className="object-contain w-full h-auto max-w-sm rounded-lg shadow-lg" />
          </div>
          <div className="md:w-2/3 flex flex-col justify-center">
            <ul className="list-disc list-inside text-xl md:text-2xl">
              <li><b>Heart Disease Detection System</b> | (Android-Studio, Java, ML, GitHub, Ubidots-cloud)</li>
              <li><b>Personal Cloud</b> | (Python, Harddrive, SQLite, GitHub)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* <section id="skills" className="p-8 bg-gray-200">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Skills Section</h2>
        <p className="text-xl md:text-2xl">Here are my skills.</p>
      </section>

      <section id="education" className="p-8 bg-gray-200">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Education Section</h2>
        <p className="text-xl md:text-2xl">Here is my education.</p>
      </section>

      <section id="contact" className="p-8 bg-gray-100">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Section</h2>
        <p className="text-xl md:text-2xl">Here is my contact information.</p>
      </section> */}
    </div>
  );
}

export default Body;
