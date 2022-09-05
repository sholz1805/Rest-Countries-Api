import useFetch from "../UseFetch";
import { useState, useEffect, createContext, useContext } from "react";
import {Link} from 'react-scroll'
import './AllCountries.css'


// const UserContext = createContext();
let url;
const Countries = ({input}) => {
    url = input ? `https://restcountries.com/v2/name/${input}` : "https://restcountries.com/v2/all"
    
    const {data,loading} = useFetch(url);
    const [countries,setCountries] = useState([]);
    const [searchFilter, setSearchFilter] = useState("All");
    
 
    useEffect(()=>{
        if(input){
           setCountries(data)
        }

        else{
              console.log(countries)
            if(searchFilter === "All"){
              console.log(data)
               setCountries(data)
            }
            else{

                setCountries(data.filter((country)=>{
                    return country.region === searchFilter;
                }))

            }

        }

    },[input,data,searchFilter])

    return ( 
        <div className="countriesList">
            <div className="country-container">
                {loading && <h1 className="loading">Loading ...</h1>}
                {countries.length ? countries.map(country => {
                   console.log(country.name)
                        const {flag,name,population,region,capital} = country;
                        return(
                            <Link to={`/${name}`} className="listItem" key={name}>
                                <img src={flag} alt={name}/>
                                <div className="info">
                                    <h2>{name}</h2>
                                    <div><h3>population:</h3><span>{(population)}</span></div>
                                    {region && <div><h3>region:</h3><span>{region}</span></div>}
                                    {capital && <div><h3>capital:</h3><span>{capital}</span></div>}
                                </div>
                            </Link>
                        )
                    })
                  : <h1 className={loading ? "x" : "loading"} style={{left:"35%"}}>No result for your search</h1>}
            </div>
        </div>
    );
}
 
export default Countries;