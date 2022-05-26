import react from 'react';
import React, {useState, useEffect} from 'react';
import MyAnimeList from './MyAnimeList';
import Nav from './Nav';


function Account(){

    const [works, setWorks] = useState([])
    

    const fetchWorks = async()=>{
        const response = await fetch('/api/v1/works',{
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        });
        const data = await response.json();
        console.log(data)
        setWorks(data.works)
        
    }

    useEffect(()=>{
        fetchWorks();
    }, [])

    return(
        <div className='screen'>
            <Nav location={"search"}/>
            <div className='container'>
                <div className='row'>
                    <h1>My Anime:</h1>
                </div>
            </div>
            {
                works.length===0 && <h1>Loading...</h1>
            }
            {
                works.length>0 &&<MyAnimeList works = {works}/>
            }
        </div>
    )
}

export default Account;
