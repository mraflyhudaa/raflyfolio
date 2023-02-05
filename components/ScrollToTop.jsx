import { useScrollPosition } from '@/hooks/useScrollPosition';
import { BiUpArrow } from 'react-icons/bi';

export default function ScrollToTop() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }
  const scrollPosition = useScrollPosition();

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }

  return (
    <button
      onClick={topFunction}
      className={classNames(
        scrollPosition > 600
          ? 'bottom-5 right-7 block'
          : 'block -bottom-20 right-7',
        'fixed  z-[99] bg-dark-primary p-4 rounded-full hover:bg-dark-primaryhover transition-all duration-500 delay-100'
      )}
    >
      <BiUpArrow />
    </button>
  );
}
