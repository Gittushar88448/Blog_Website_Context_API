import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../../context/AppContext';
import Header from '../Header';
import BlogDetails from '../BlogDetails';
import Spinner from '../Spinner';

const Blogs = () => {
    const [blog, setBlog] = useState(null);
    const [relatedBlogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const { loading, setLoading } = useContext(AppContext);
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const navigate = useNavigate();

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        try {
            const response = await fetch(`${newBaseUrl}get-blog?blogId=${blogId}`);
            const data = await response.json();
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        } catch (e) {
            console.log("fetching data error");
            setRelatedBlogs([]);
            setBlog(null);
        }
        setLoading(false);
    }

    useEffect(() => {
        fetchRelatedBlogs();
    }, [location.pathname]);

    return (
        <div >
            <Header />
            <div className='mt-[75px] w-11/12 max-w-[670px] items-start mx-auto'>
                <button onClick={() => {
                    navigate(-1);
                }}
                className='border font-bold px-4 py-2 bg-blue-500 rounded-md text-white'
                >
                    Back
                </button>
            </div>

            {
                loading ?
                    (
                        <div className='w-screen flex justify-center items-center '>
                            <Spinner/>
                        </div>
                    ) :

                    blog ?
                        (
                            <div className='w-11/12 max-w-[670px] py-7 flex flex-col gap-y-7 mt-[20px]  mx-auto '>

                                <div>
                                    <BlogDetails post={blog} />
                                </div>

                                <h2 className='font-semibold text-3xl underline items-start'>Related Blogs</h2>

                                {
                                    relatedBlogs.map((post) => (
                                        <div key={post.id}>
                                            <BlogDetails post={post} />
                                        </div>
                                    ))
                                }

                            </div>

                        ) :

                        (
                            <div className='h-screen w-screen flex justify-center items-center font-semibold text-2xl overflow-y-hidden'>
                                <p> No Data Found </p>
                            </div>

                        )

            }

        </div>
    )
}

export default Blogs