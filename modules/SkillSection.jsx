import { skillsData } from '@/data/skills';

export default function SkillSection() {
  return (
    <section
      id='skills'
      className=' snap-start px-5 sm:px-16 md:px-28 transition-opacity duration-700 py-20 relative w-full lg:h-screen  z-[1] bg-dark-bg content-center grid grid-cols-1'
    >
      <div className='flex flex-col gap-4 '>
        <h1 className='text-3xl font-semibold text-dark-headline'>
          <span className='font-normal text-dark-secondary'>#</span>About Me
        </h1>
        <p className='px-6 pb-2 mb-8 leading-relaxed  md:text-justify'>
          Recent informatics engineer graduate with a foundation in front-end
          development. Proficient in responsive design and web accessibility
          standards. Familiar with popular front-end frameworks such as React. I
          am a curious and open-minded individual with a passion for learning
          and exploring new things. I enjoy meeting new people and learning
          about their experiences and perspectives.
        </p>
        <h1 className='text-3xl font-semibold text-dark-headline'>
          <span className='font-normal text-dark-secondary'>#</span>Tech Stack
        </h1>
        <ul className='flex flex-wrap flex-col sm:items-center gap-4 px-8 pb-2  sm:grid sm:grid-cols-2 lg:grid-cols-4'>
          {skillsData.map((skill, index) => (
            <li
              key={index}
              className='flex items-center gap-2 text-2xl text-dark-secondary'
            >
              {skill.icon}
              {skill.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
