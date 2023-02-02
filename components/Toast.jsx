export default function Toast({ message, isError, isShow, onExit }) {
  return (
    <div
      id='toast-success'
      className={`mx-6 sm:ml-6 transition-opacity delay-200 flex items-center  p-4  bg-dark-primarybg text-dark-subhead rounded ${
        isShow ? '' : 'hidden'
      }`}
      role='alert'
    >
      {!isError ? (
        <div className='inline-flex items-center justify-center flex-shrink-0 w-6 h-6 text-green-500 bg-green-100 rounded-lg dark:bg-green-800 dark:text-green-200'>
          <svg
            aria-hidden='true'
            className='w-3 h-3'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Check icon</span>
        </div>
      ) : (
        <div className='inline-flex items-center justify-center flex-shrink-0 w-6 h-6 text-red-500 bg-red-100 rounded-lg dark:bg-red-800 dark:text-red-200'>
          <svg
            aria-hidden='true'
            className='w-3 h-3'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
          <span className='sr-only'>Error icon</span>
        </div>
      )}

      <div className='ml-3 text-sm font-normal '>{message}</div>
      <button
        type='button'
        className='ml-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex h-6 w-6 dark:text-gray-500 dark:hover:text-white dark:bg-gray-800 dark:hover:bg-gray-700'
        data-dismiss-target='#toast-success'
        aria-label='Close'
        onClick={onExit}
      >
        <span className='sr-only'>Close</span>
        <svg
          aria-hidden='true'
          className='w-3 h-3'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
            clipRule='evenodd'
          ></path>
        </svg>
      </button>
    </div>
  );
}
