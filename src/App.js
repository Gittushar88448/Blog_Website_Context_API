
import './index.css';
import Header from './components/Header';
import Bottom from './components/Bottom';
import MainPages from './components/MainPages';
import { useContext, useEffect } from 'react';
import  { AppContext }  from './context/AppContext';


function App() {

  const {fetchingPageData ,isDarkMode} = useContext(AppContext);


  useEffect(() => {
    fetchingPageData();
  },[]);

  
  return (<div className={`${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
    <div className="App h-screen w-screen overflow-x-hidden ">

      <Header/>
      <MainPages/>
      <Bottom/>
    </div>
    </div>
  );
}

export default App;