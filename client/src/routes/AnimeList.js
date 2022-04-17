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
        <div className = 'animeList'>
            {list}
        </div>

        
    )
}

export default AnimeList;