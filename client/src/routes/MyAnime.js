const MyAnime = ({anime})=>{

    return (
        <div className='myAnime row mb-3'>
            <div className="myAnime">
                <h3>{anime.title}</h3>
                <h3>{anime.status}</h3>
            </div>
        </div>
    )
}

export default MyAnime;