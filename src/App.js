
import './index.css';
import { Route, Routes } from 'react-router-dom';
import Home from "./components/Pages/Home";
import Blogs from "./components/Pages/Blogs";
import Category from "./components/Pages/Category";
import Tags from "./components/Pages/Tags";
import { useContext, useEffect } from 'react';
import  { AppContext }  from './context/AppContext';


function App() {

  const {fetchingPageData ,isDarkMode} = useContext(AppContext);


  useEffect(() => {
    fetchingPageData();
  },[]);

  
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