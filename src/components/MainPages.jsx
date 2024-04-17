import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';

const MainPages = () => {
  const { loading, posts, isDarkMode } = useContext(AppContext);
  console.log(posts);

  return (  
    <div className={`w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[40px] mb-[50px] mx-auto bg-white
      justify-center items-center ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      {
      
        loading ?

          (<Spinner />) :

          (
            posts.length === 0 ?
              (
                <div className='flex justify-center items-center text-3xl font-bold '>
                  <p>Page not found</p>
                </div>
              ) :

              (posts.map((post) => (
                <BlogDetails key={post.id} post={post}/>
              )))
          )
      }
    </div>

  )
}

export default MainPages