
import './index.css';
import { Route, Routes, useLoaderData, useLocation, useSearchParams } from 'react-router-dom';
import Home from "./components/Pages/Home";
import Blogs from "./components/Pages/Blogs";
import Category from "./components/Pages/Category";
import Tags from "./components/Pages/Tags";
import { useContext, useEffect } from 'react';
import  { AppContext }  from './context/AppContext';


function App() {

  const location = useLocation();
  const [searchParams , setSearchParams] = useSearchParams();
  const {fetchingPageData ,isDarkMode} = useContext(AppContext);


  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("Tags")){
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchingPageData(Number(page) , tag);
    }else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceAll("-" , " ");
      fetchingPageData(Number(page) , null , category);
    }
    else{
      fetchingPageData(Number(page));
    }
  },[location.pathname , location.search]);

  
  return (<div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className="App h-screen w-screen overflow-x-hidden ">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Blogs/:blogId" element={<Blogs/>}/>
        <Route path="/categories/:category" element={<Category/>}/>
        <Route path="/Tags/:tags" element={<Tags/>}/>
      </Routes>
    </div>
    </div>
  );
}

export default App;