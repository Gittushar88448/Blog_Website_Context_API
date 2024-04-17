import React from 'react'
import Header from '../Header'
import Bottom from '../Bottom'
import MainPages from '../MainPages'
import { useLocation, useNavigate } from 'react-router-dom'

const Category = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const category = location.pathname.split("/").at(-1);

    return (
        <div>
            <Header />
            <div className='mt-[75px] w-11/12 max-w-[670px] items-center mx-auto flex gap-x-3 '>
                <button onClick={() => {
                    navigate(-1);
                }}
                className='border font-bold px-4 py-2 bg-blue-500 rounded-md text-white'
                >
                    Back
                </button>


                <h2>
                    <span className='font-bold '>Blogs on {category} </span>
                </h2>
            </div>
            <MainPages />
            <Bottom />

        </div>
    )
}

export default Category