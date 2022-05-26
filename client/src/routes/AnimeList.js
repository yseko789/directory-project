import Anime from './Anime';
import './AnimeList.css';

const AnimeList = ({animeResult}) =>
{
    const list = animeResult.map((anime, index)=>{
        return(
            <Anime anime = {anime} key = {index}/>
        )
    })

    return (
        <div className='container mt-4'>
            <div className='row d-flex justify-content-between'>
                {list}
            </div>

        </div>

        
    )
}

export default AnimeList;