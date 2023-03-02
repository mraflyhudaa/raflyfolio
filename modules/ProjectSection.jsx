import { projects } from '@/data/projects';
import { Github } from '@icons-pack/react-simple-icons';
import { BiLinkExternal } from 'react-icons/bi';
import Image from 'next/image';

export default function ProjectSection() {
  return (
    <section
      id='projects'
      className='snap-start  px-5 sm:px-16 md:px-28 w-full min-h-screen p-20 relative z-[1] content-center grid grid-cols-1'
    >
      <div className='pointer-events-none transition-all duration-1000 ease-[cubic-bezier(1,-0.01,0,1)] z-[2]  origin-center w-full h-full  absolute top-0 left-0'></div>
      <div className='mt-8 z-[1]'>
        <h1 className='text-3xl font-semibold'>
          <span className='font-normal text-dark-secondary'>#</span>Projects
        </h1>
        <ul className='grid grid-cols-1 gap-6 p-6 lg:grid-cols-2 '>
          {projects.map(({ image, title, description, repo, link, techs }) => (
            <li key={title} className='overflow-hidden rounded bg-dark-bg '>
              <div className='relative flex flex-col w-full gap-4 p-6'>
                <Image
                  src={image}
                  alt={title}
                  width={800}
                  height={300}
                  className='object-cover rounded'
                />
                <div className='flex justify-between'>
                  <h1 className='text-lg'>{title}</h1>
                  <div className='flex gap-2'>
                    <a
                      href={repo}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 transition-colors rounded bg-dark-secondary hover:bg-opacity-75 max-h-8 sm:max-h-fit'
                    >
                      <Github className='w-4 h-4' />
                    </a>
                    <a
                      href={link}
                      target='_blank'
                      rel='noopener noreferrer'
                      className='p-2 transition-colors rounded bg-dark-secondary hover:bg-opacity-75 max-h-8 sm:max-h-fit'
                    >
                      <BiLinkExternal />
                    </a>
                  </div>
                </div>
                <p className='text-dark-subhead'>{description}</p>
                <ul className='flex flex-wrap gap-4'>
                  {techs.map((tech) => (
                    <li
                      key={tech}
                      className='p-2 text-sm rounded bg-dark-primary'
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
