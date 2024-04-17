import React from 'react'
import Header from '../Header'
import { useLocation, useNavigate } from 'react-router-dom'
import MainPages from '../MainPages';
import Bottom from '../Bottom';

const Tags = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const tag = location.pathname.split("/").at(-1);

  return (
    <div>
        <Header/>
        <div className='mt-[75px] w-11/12 max-w-[670px] items-center mx-auto flex gap-x-3 '>
            <button onClick={()=>{
                navigate(-1);
            }}
            className='border font-bold px-4 py-2 bg-blue-500 rounded-md text-white'
            >
                Back
            </button>
            <h2 className='font-semibold flex gap-x-3'>
                Blogs Tagged <span>#{tag}</span>
            </h2>
        </div>
        <MainPages/>
        <Bottom/>
    </div>
  )
}

export default Tags