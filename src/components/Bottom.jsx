import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Bottom = () => {

  const { page, totalPages, handlePageChange,isDarkMode } = useContext(AppContext);

  return (
     
    <div className={`footer w-full flex justify-around items-center border-2 fixed bottom-0 bg-slate-200 ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <div className='flex gap-x-2'>
        {page > 1 &&
          <button onClick={() => {
            handlePageChange(page - 1);
          }}
          className='rounded-md border-2 px-4 py-1 bg-blue-500 text-white transition-all duration-300'
          >
            Previous
          </button>
        }
        {
          page < 6 &&
          <button onClick={() => {
            handlePageChange(page + 1);
          }}
          className='rounded-md border-2 px-4 py-1 bg-blue-500 text-white'
          >
            Next
          </button>
        }
      </div>
      <div>
        {
          <span className='font-bold text-sm'>
            {`pages ${page} of ${totalPages}`}
          </span>
        }
      </div>
    </div>

  )
}

export default Bottom