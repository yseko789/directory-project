import React, { useEffect, useState } from "react";
import AnimeList from './AnimeList';
import Nav from './Nav';
import './stylesheets/search.css'



function Search() {
  const [animeSearch, setAnimeSearch] = useState('');
  const [animeResult, setAnimeResult] = useState([]);

  const fetchAnimes = async()=>{
    const url = `https://api.jikan.moe/v4/anime?q=${animeSearch}`;
    const response = await fetch(url);
    const newAnimes = await response.json();
    setAnimeResult(newAnimes.data);
  }
  
  useEffect(()=>{
    const timer = setTimeout(()=>fetchAnimes(), 500);
    return ()=>clearTimeout(timer);
  }, [animeSearch]);

  

  return(
    <div className = 'screen-search'>
      <Nav location='search'/>
      
      <div className="container mt-4">
        <div className = 'row'>
            <div className='input-group'>
              <input 
                className = 'form-control shaddow-none'
                type="search" 
                placeholder= 'Search Anime...'
                aria-label="Search"
                value = {animeSearch}
                onChange = {(e)=>setAnimeSearch(e.target.value)}
              />
              <button className="btn btn-primary btn-custom" type="button">Search</button>
            </div>
        </div>
      </div>

      <div className='container'>
        <div className='row'>
          {
            animeResult.length === 0 &&
            <h1 className = 'Loading'>
              Loading...
            </h1>
          }
          {
            animeResult.length >0 &&
            <AnimeList animeResult = {animeResult}/>
          }
        </div>
        
      </div>
    </div>



    
  )


}

export default Search;