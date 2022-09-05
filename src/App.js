import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from './components/topBar/TopBar'
import SearchFilterBar from './components/searchFilterBar/SearchFilterBar';
import AllCountries from './components/allCountries/AllCountries.js'



const App = () => {

  return (

    <div className="App">
          <TopBar />
          <SearchFilterBar/>
          <AllCountries/>
              
</div>

// {/* 
    // <div className="App">
    //   <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<TopBar/>}>
    //      {/* <Route path='/allCountries' element={<AllCountries/>} /> */}
    //       {/* <Route path=" " element={< />} /> */}
    //       {/* <Route path=" " element={< />} /> */}
    //       {/* <Route path=" " element={< />} /> */}
    //     </Route>
    //   </Routes>
    //   <AllCountries/>
    // </BrowserRouter>
    //      */}
  );
}

export default App;
