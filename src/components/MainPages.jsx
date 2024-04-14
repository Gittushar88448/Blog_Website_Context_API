import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const MainPages = () => {
  const { loading, posts, isDarkMode } = useContext(AppContext);
  console.log(posts);

  return (  
    <div className={`w-11/12 max-w-[670px] py-8 flex flex-col gap-y-7 mt-[66px] mb-[50px] mx-auto bg-white
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
                <div key={post.id}>

                  <p className="font-bold text-lg ">{post.title}</p>
                  <p className='text-sm mt-[4px]'>
                    By <span className='italic'>{post.author}</span> on <span className='underline font-bold'>{post.category} </span>
                  </p>
                  <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
                  <p className='text-md mt-[14px]'>{post.content}</p>

                  <div className='flex gap-x-3'>
                    {
                      post.tags.map((tag , index) => (
                        <span key={index} className='text-blue-700 underline font-bold text-xs mt-[5px]'>
                          {` #${tag}`}
                        </span>
                      ))
                    }
                  </div>

                </div>
              )))
          )
      }
    </div>

  )
}

export default MainPages