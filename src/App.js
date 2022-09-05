import './App.css';
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
  );
}

export default App;
