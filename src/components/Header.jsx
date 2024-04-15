import React, { useContext } from 'react'
import { FaSun, FaMoon } from 'react-icons/fa';
import { AppContext } from '../context/AppContext';



const Header = () => {

const {toggleDarkMode , isDarkMode} = useContext(AppContext);

  return (
    <div>
      <header className={`w-full border shadow-md py-4 fixed top-0 flex justify-center  bg-slate-200 ${isDarkMode ? "dark-mode" : "light-mode"}`}>
        <h1 className='text-3xl text-center font-bold uppercase'>
          Bloggerst
        </h1>
        <button onClick={()=> toggleDarkMode()} className='absolute right-[80px] top-[22px] w-8 '>
          {
            isDarkMode ? (<FaMoon className='w-8 h-6'/>) : (<FaSun className='w-8 h-6'/>)
          }
        </button>
        
      </header>
    </div>
  )
}

export default Header
