export default function HeroSection() {
  return (
    <section
      id='hero'
      className='snap-start px-5 sm:px-16 md:px-28 transition-opacity duration-700 py-20 relative w-full h-screen overflow-y-auto z-[1] bg-dark-primarybg content-center grid grid-cols-1 gap-4 '
    >
      <div className='flex flex-col items-center justify-center gap-4 text-center '>
        <h1 className='text-xl sm:text-2xl text-dark-primary'>
          Muhammad Rafly Huda
        </h1>
        <div className='flex flex-col gap-4 text-5xl font-semibold lg:flex-row sm:text-7xl'>
          Building
          <ul className='inline-flex flex-col h-12 gap-1 overflow-hidden w-fit sm:h-16 text-dark-primary'>
            <li className='mx-auto animate-transform-text w-max'>Beautiful</li>
            <li className='animate-transform-text w-max'>Functional</li>
          </ul>
          Websites
        </div>
        <h1 className='text-xl sm:text-2xl text-dark-secondary'>
          Front-End Web Developer based in Indonesia
        </h1>
        <div className='flex flex-wrap items-center gap-2 md:gap-4'>
          <a
            href='#skills'
            className='px-6 py-3 text-lg transition-all rounded w-max bg-dark-primary hover:bg-dark-primaryhover'
          >
            Learn More
          </a>
          <a
            target='_blank'
            rel='noreferrer'
            className='px-6 py-3 text-lg rounded w-max navbutton ring ring-inset ring-dark-primary'
            href='https://drive.google.com/file/d/1Prglo9bvuN8UKp9I_3Z4cNOI6PxKRXcZ/view?usp=share_link'
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
