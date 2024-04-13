import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';

const MainPages = () => {
  const { loading, posts } = useContext(AppContext);
  console.log(posts);

  return (
    <div>
      {
        loading ?

          (<Spinner />) :

          (
            posts.length === 0 ?
              (
                <div>
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

                  <div>
                    {
                      post.tags.map((tag , index) => (
                        <span key={index}>
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