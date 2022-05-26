import './stylesheets/anime.css';
import { useEffect } from 'react';
import { ReactDOM } from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faPlus, faPlusSquare, faSolid } from '@fortawesome/free-solid-svg-icons'

const Anime = ({anime})=>{

    //see if the anime already exists in database
    //if it does, change button
    // const workExist = async(e)=>{
    //     e.preventDefault();
    //     const resposne = await fetch('api/v1/works/:id',{
    //         method: 'GET',
    //         headers: {
    //             'Authorization': 'Bearer ' + localStorage.getItem('token')
    //         },
    
    //     })
    // }

    // useEffect(()=>{

    // }, [])

    const animeData = {
        title: anime.title,
        type: 'anime'
    }

    const addHandler = async(e)=>{
        e.preventDefault();
        const response = await fetch('/api/v1/works',{
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(animeData)
        });
        const data = await response.json();
        console.log(data);
    }


    return (
        <div className='anime'>
            

            <div className = 'animeImageContainer '>
                <img className = 'animeImage' src = {anime.images.jpg.large_image_url} alt = {anime.title}/>
            </div>
            <div className= 'animeInfoContainer d-flex justify-content-start'>
                    <button onClick = {addHandler} className='  addButton btn'>
                        <FontAwesomeIcon icon={faPlus}/>
                    </button>
                    <h1 className='animeTitle'>{anime.title}</h1>
            </div>
        </div>
    )
}

export default Anime;