import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import logo from "../public/mylogo.png"
import Image from "next/image";

const navItems = [
  { name: 'Home', link: '#home' },
  { name: 'About', link: '#about' },
  { name: 'Skills', link: '#skills' },
  { name: 'Experience', link: '#exp' },
  { name: 'Projects', link: '#projects' },
  { name: 'Contact', link: '#contact' },
];

const Navbar = () => {
  const router = useRouter();
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (window.pageYOffset >= sectionTop - sectionHeight / 2) {
          setActiveSection(`#${section.id}`);
        }
      });
    };

    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className="py-10 ease-in-out 0.3s  mb-12 flex justify-between dark:text-gray-900 lg:py-4 lg:px-12">
      <a href='#'><div className="hover:animate-spin lg:flex-growh-20 w-20 block mt-4 lg:inline-block lg:mt-0  py-2 rounded  mr-2 text-left fixed"><button><Image src={logo} className="scale-100" /></button></div></a>
      <div className='text-md text-center font-bold text-teal-600 lg:flex-grow sm:flex-shrink'>
        <ul className="flex ml-10 justify-center items-center h-16">
          {navItems.map((item) => (
            <li key={item.link} className="block mt-4 lg:inline-block lg:mt-0 hover:text-white px-4 py-2 rounded hover:bg-blue-900 mr-2 mx-4">
              <Link href={`/${item.link}`}>
                <a
                  className={`${activeSection === item.link ? 'text-yellow-500' : ''
                    }`}
                >
                  {item.name}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <ul className="flex items-center">

        <li>
          <a
            className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white  px-4 py-2 border-none rounded-md ml-8"
            href="AnubhavMendhiratta_Resume.pdf" download="AM_Resume.pdf"
          >
            Resume
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
