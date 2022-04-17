import './Anime.css';

const Anime = ({anime})=>{
    return (
        <div className = 'anime'>
            <div className= 'animeImageContainer'>
                <img className = 'animeImage' src = {anime.images.jpg.large_image_url} alt = {anime.title}/>
            </div>
            <div className = 'animeInfoContainer'>
                <button className = 'addButton'>Add</button>
                <h1 className= 'animeTitle'>{anime.title}</h1>
            </div>
        </div>
    )

}

export default Anime;