import { useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(false);
  return (
    <nav className='z-10 fixed top-0 left-0 w-full py-3 px-5 sm:px-16 md:px-28 min-h-[80px] flex items-center justify-between transition-all duration-500 delay-500 bg-dark-primarybg '>
      <h1 className='text-xl sm:text-2xl'>
        <a href='#hero'>Muhammad Rafly Huda</a>
      </h1>
      <ul
        onClick={() => setShow(false)}
        className={`fixed top-0 ${
          show ? 'left-0' : '-left-full'
        } transition-all duration-500 text-2xl md:text-base bg-dark-primarybg w-full h-screen md:w-auto md:h-auto md:bg-transparent md:static flex flex-col md:flex-row items-center justify-center gap-8`}
      >
        <li>
          <a href='#skills' className='rounded navlink'>
            Skills
          </a>
        </li>
        <li>
          <a href='#projects' className='rounded navlink'>
            Projects
          </a>
        </li>
        <li>
          <a
            href='#contact'
            className='px-4 py-2 transition-colors duration-150 rounded bg-dark-primary hover:bg-dark-primaryhover '
          >
            Contact
          </a>
        </li>
      </ul>
      <div className='md:hidden z-[1]' onClick={() => setShow(!show)}>
        <div
          className={`w-6 h-0.5 rounded bg-white mb-1.5 transition-all ${
            show ? 'rotate-45 translate-y-2' : ''
          }`}
        ></div>
        <div
          className={`w-6 h-0.5 rounded bg-white mb-1.5 ${
            show ? '-translate-x-5 opacity-0' : ''
          } transition-all`}
        ></div>
        <div
          className={`w-6 h-0.5 rounded bg-white transition-all ${
            show ? '-rotate-45 -translate-y-2' : ''
          }`}
        ></div>
      </div>
    </nav>
  );
}
