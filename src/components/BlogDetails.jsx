import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom'



const BlogDetails = ({ post }) => {
    return (
        <div key={post.id} >

            <NavLink to={`/Blogs/${post.id}`} className="font-bold text-lg ">
                <span>{post.title}</span>
            </NavLink>
            <p className='text-sm mt-[4px]'>
                By <span className='italic'>{post.author}</span> on 
                <NavLink
                 to={`/categories/${post.category.replaceAll(" ", "-")}`} 
                 className='underline font-bold'>  <span>{post.category}</span> 
                 </NavLink>
            </p>
            <p className='text-sm mt-[4px]'>Posted on {post.date}</p>
            <p className='text-md mt-[14px]'>{post.content}</p>

            <div className='flex gap-x-3'>
                {
                    post.tags.map((tag, index) => (
                        <NavLink 
                        key={index}
                        to={`/Tags/${tag.replaceAll(" ", "-")}`} 
                        className='text-blue-700 underline font-bold text-xs mt-[5px]'>
                           <span> {` #${tag}`}</span>
                        </NavLink>
                    ))
                }
            </div>

        </div>
    )
}

export default BlogDetails