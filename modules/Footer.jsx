import Spinner from '@/components/Spinner';
import Toast from '@/components/Toast';
import { Github, Linkedin } from '@icons-pack/react-simple-icons';
import { useState } from 'react';

export default function Footer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const { name, email, message } = formData;

  const [isShow, setIsShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key])
      )
      .join('&');
  };

  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);
    await fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'contact', ...formData }),
    })
      .then(() => {
        setToastMessage('Message sent!');
        setIsShow(true);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setIsError(true);
        setToastMessage('Error sending message!');
        setIsShow(true);
        setIsLoading(false);
      });
  };

  return (
    <footer
      id='contact'
      className='snap-center relative z-[1] px-5 sm:px-16 md:px-28 pt-28 pb-16 text-white w-full min-h-screen flex flex-col md:flex-row gap-10 bg-dark-bg'
    >
      <form
        className='flex-[2] flex flex-col gap-5'
        name='contact'
        onSubmit={handleSubmit}
      >
        <h1 className='text-3xl font-semibold'>
          <span className='font-normal text-dark-secondary'>#</span>Contact Me!
        </h1>
        <Toast
          message={toastMessage}
          isError={isError}
          isShow={isShow}
          onExit={() => {
            setIsShow(false);
            setIsError(false);
          }}
        />
        <input type='hidden' name='form-name' value='name_of_my_form' />
        <input
          value={name}
          onChange={handleChange}
          id='yourname'
          name='name'
          placeholder='Name'
          required
          type='text'
          className='p-2 mx-6 transition-colors duration-300 bg-transparent border-2 border-white rounded appearance-none selection:bg-dark-primarybg selection:text-dark-headline sm:ml-6 focus:text-black focus:border-dark-primary focus:outline-none focus:bg-dark-headline'
        />
        <input
          value={email}
          onChange={handleChange}
          id='youremail'
          name='email'
          placeholder='Email'
          required
          type='email'
          className='p-2 mx-6 transition-colors duration-300 bg-transparent border-2 border-white rounded appearance-none selection:bg-dark-primarybg selection:text-dark-headline sm:ml-6 focus:text-black focus:border-dark-primary focus:outline-none focus:bg-dark-headline'
        />
        <textarea
          value={message}
          onChange={handleChange}
          id='yourmessage'
          name='message'
          placeholder='Message'
          required
          className='p-2 mx-6 transition-colors duration-300 bg-transparent border-2 border-white rounded appearance-none selection:bg-dark-primarybg selection:text-dark-headline sm:ml-6 focus:text-black focus:border-dark-primary focus:outline-none focus:bg-white resize-vertical'
          rows={5}
        ></textarea>
        <button
          type='submit'
          disabled={isLoading}
          className='px-6 py-3 mx-6 text-lg transition-all rounded sm:ml-6 disabled:opacity-50 bg-dark-primary hover:bg-dark-primaryhover'
        >
          {isLoading ? <Spinner /> : 'Send'}
        </button>
      </form>
      <aside className='flex-1 mx-6 md:pt-14 md:mx-0'>
        <h2 className='text-xl'>You can also find me on</h2>
        <ul className='flex flex-col gap-6 mt-3'>
          <li>
            <a
              href='https://www.linkedin.com/in/mraflyhudaa/'
              className='flex items-center gap-2 text-lg transition-all duration-300 hover:text-primary'
              target='_blank'
              rel='noreferrer'
            >
              <Linkedin /> LinkedIn
            </a>
          </li>
          <li>
            <a
              href='https://github.com/mraflyhudaa'
              className='flex items-center gap-2 text-lg transition-all duration-300 hover:text-primary'
              target='_blank'
              rel='noreferrer'
            >
              <Github /> Github
            </a>
          </li>
        </ul>
      </aside>
      <div className='absolute bottom-0 left-0 w-full p-5 text-center text-dark-headline'>
        <span>Made with ❤ by Muhammad Rafly Huda</span>
        <br />
        <span>
          Powered by{' '}
          <a
            href='https://nextjs.org/'
            className='hover:text-dark-primaryhover text-dark-primary'
          >
            Next.js
          </a>{' '}
          &{' '}
          <a
            href='https://tailwindcss.com/'
            className='hover:text-dark-primaryhover text-dark-primary'
          >
            TailwindCSS
          </a>
        </span>
      </div>
      <div className='absolute bottom-0 left-0 w-full p-3 text-center text-dark-headline'></div>
    </footer>
  );
}
