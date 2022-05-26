import MyAnime from './MyAnime';


const MyAnimeList = ({works}) =>
{
    const list = works.map((anime, index)=>{
        return(
            <MyAnime anime = {anime} key = {index}/>
        )
    })

    return (
        <div className='container mt-4'>
            <div className='container'>
                {/* <h1>hi</h1> */}
                {list}
            </div>
        </div>

        
    )
}

export default MyAnimeList;