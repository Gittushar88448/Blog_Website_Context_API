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
            <div>
                <button onClick={() => {
                    navigate(-1);
                }}>
                    Back
                </button>


                <h2>
                    <span>Blogs on {category} </span>
                </h2>
            </div>
            <MainPages />
            <Bottom />

        </div>
    )
}

export default Category