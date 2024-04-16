import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Header from '../Header';
import Bottom from '../Bottom';
import BlogDetails from '../BlogDetails';

const Blogs = () => {
    const [blog , setBlog] = useState(null);
    const [relatedBlogs , setRelatedBlogs] = useState([]);
    const location = useLocation();
    const {loading , setLoading} = useContext(AppContext);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const navigate = useNavigate();

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs(){
        setLoading(true);
        try{
            const response = await fetch(`${newBaseUrl}get-blog?blogId=${blogId}`);
            const data = await response.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }catch(e){
            console.log("fetching data error");
            setRelatedBlogs([]);
            setBlog(null);
        }
        setLoading(false);
    }

    useEffect(()=>{
        fetchRelatedBlogs();
    },[location.pathname]);

  return (
   <div>
    Blog page
   </div>
  )
}

export default Blogs