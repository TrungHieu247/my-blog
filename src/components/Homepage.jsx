import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import BlogContent from "./pages/BlogContent";
import ProjectsContent from "./pages/ProjectsContent";
import AboutContent from "./pages/AboutContent";
import NewsletterContent from "./pages/NewsletterContent";

const Homepage = () => {
  const [activeSection, setActiveSection] = useState("Blog");

  const handleNavItemClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="font-inter">
      <header className="py-[14px] font-medium text-[18px] lg:text-[20px] flex justify-between items-center container">
        <p className="font-semibold">Trung Hieu</p>
        <nav>
          <ul className="flex font-medium items-center gap-[14px]">
            <li
              onClick={() => handleNavItemClick("Blog")}
              className={`relative ${
                activeSection === "Blog"
                  ? "font-bold after:w-full after:h-[2px] after:bg-black dark:after:bg-white after:absolute after:bottom-[-4px] after:left-0"
                  : ""
              }`}
            >
              Blog
            </li>
            <li
              onClick={() => handleNavItemClick("Projects")}
              className={`relative ${
                activeSection === "Projects"
                  ? "font-bold after:w-full after:h-[2px] after:bg-black dark:after:bg-white after:absolute after:bottom-[-4px] after:left-0"
                  : ""
              }`}
            >
              Projects
            </li>
            <li
              onClick={() => handleNavItemClick("About")}
              className={`relative ${
                activeSection === "About"
                  ? "font-bold after:w-full after:h-[2px] after:bg-black dark:after:bg-white after:absolute after:bottom-[-4px] after:left-0"
                  : ""
              }`}
            >
              About
            </li>
            <li
              onClick={() => handleNavItemClick("Newsletter")}
              className={`relative ${
                activeSection === "Newsletter"
                  ? "font-bold after:w-full after:h-[2px]  after:bg-black dark:after:bg-white after:absolute after:bottom-[-4px] after:left-0"
                  : ""
              }`}
            >
              Newsletter
            </li>
            <DarkModeToggle />
          </ul>
        </nav>
      </header>

      <div className="container">
        {activeSection === "Blog" && <BlogContent />}
        {activeSection === "Projects" && <ProjectsContent />}
        {activeSection === "About" && <AboutContent />}
        {activeSection === "Newsletter" && <NewsletterContent />}
      </div>
      <footer className="mt-10 py-[14px] text-[18px] lg:text-[20px] flex items-center container">
        <nav>
          <ul className="flex font-medium items-center gap-[14px]">
            <li>2024</li>
            <li>
              <a href="https://www.facebook.com/profile.php?id=100008320125207">
                Facebook
              </a>
            </li>
            <li>
              <a>Email</a>
            </li>
            <li>
              <a>LinkedIn</a>
            </li>
          </ul>
        </nav>
      </footer>
    </div>
  );
};

export default Homepage;
