
import './index.css';
import Header from './components/Header';
import Bottom from './components/Bottom';
import MainPages from './components/MainPages';
import { useContext, useEffect } from 'react';
import  { AppContext }  from './context/AppContext';


function App() {

  const {fetchingPageData } = useContext(AppContext);


  useEffect(() => {
    fetchingPageData();
  },[]);

  
  return (
    <div className="App">

      <Header/>
      <MainPages/>
      <Bottom/>
    </div>
  );
}

export default App;