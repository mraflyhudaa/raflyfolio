import { useScrollPosition } from '@/hooks/useScrollPosition';
import { useState } from 'react';

export default function Navbar() {
  const [show, setShow] = useState(false);

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  const scrollPosition = useScrollPosition();

  return (
    <nav
      className={classNames(
        scrollPosition > 600
          ? 'backdrop-blur-md bg-dark-primarybg/60 border-dark-secondary py-3'
          : 'backdrop-blur-none bg-dark-primarybg border-dark-primarybg py-12',
        'z-10 fixed top-0 left-0 w-full px-5 sm:px-16 md:px-28 min-h-[80px] flex items-center justify-between transition-all duration-700 delay-100  border-b'
      )}
    >
      <h1 className='text-xl sm:text-2xl'>
        <span onClick={topFunction} className='cursor-pointer'>
          Muhammad Rafly Huda
        </span>
      </h1>
      <ul
        onClick={() => setShow(false)}
        className={`fixed top-0 ${
          show ? 'left-0' : '-left-full'
        } transition-all duration-500 text-2xl md:text-base bg-dark-primarybg w-full h-screen md:w-auto md:h-auto md:bg-transparent md:static flex flex-col md:flex-row items-center justify-center gap-8`}
      >
        <li>
          <a
            href='#skills'
            className='rounded hover:bg-dark-headline hover:text-dark-primarybg px-2 transition-colors'
          >
            Skills
          </a>
        </li>
        <li>
          <a
            href='#projects'
            className='rounded hover:bg-dark-headline  hover:text-dark-primarybg px-2 transition-colors'
          >
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
