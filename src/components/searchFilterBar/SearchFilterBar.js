import React from 'react'
import './SearchFilterBar.css'
import {useState} from 'react'
import useFetch from '../UseFetch'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

const SearchFilterBar = () => {

  const [inputField , setInputField ] = useState(undefined);
  const [search,setSearch] = useState(undefined);
  const [searchFilter,setSearchFilter] = useState("All");
  const {data} = useFetch("https://restcountries.com/v2/all")
  const handleSubmit = (e) => {
      e.preventDefault();
      setSearch(inputField);
  }
  const handleSelect = (e) => {
    setSearchFilter(e.target.value)
    setSearch(undefined);
    setInputField('');
  }
  const getCountryName = (code) => {
    let countryName;
    const country = data.filter((element)=>{
      return element.alpha3Code === code;
    })  
    countryName = country[0].name
    return countryName;
  }
  const numberWithCommas = ( number => {
    return number
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g,",");
  })


  return (
    <div>
        <div className="container">
          <form onSubmit={handleSubmit}>
              <div className="inputField">
                      
                      <input 
                        type="search"
                        placeholder = "Search for a country..."
                        value={inputField}
                        onChange={(e)=>{
                          setInputField(e.target.value)
                          setSearch(e.target.value)
                          }
                        }
                      />
                      <i><FontAwesomeIcon icon={faSearch}/></i>
              </div>
                <select id="region" name="region" onChange={handleSelect}>
                      <option value="All" defaultValue>All</option>
                      <option value="Africa">Africa</option>
                      <option value="Americas">America</option>
                      <option value="Asia">Asia</option>
                      <option value="Europe">Europe</option>
                      <option value="Oceania">Oceania</option>
                </select>
          </form>
                    
        </div>
    </div>
  )
}

export default SearchFilterBar