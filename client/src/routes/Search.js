import React, { useEffect, useState } from "react";
import AnimeList from './AnimeList';


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
    fetchAnimes();
  }, [animeSearch]);

  

  return(
    <div>

   
      <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <a class="navbar-brand">Anime Search</a>
          <form class="d-flex">
            <input 
              class="form-control me-2" 
              type="search" 
              placeholder= 'Search Anime...'
              aria-label="Search"
              value = {animeSearch}
              onChange = {(e)=>setAnimeSearch(e.target.value)}
            />
            <button class="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
      </nav>
      
        
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
    
  )


}

export default Search;