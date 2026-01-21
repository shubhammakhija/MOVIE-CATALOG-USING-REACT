function MovieCard({movie}){
    function OnFavourite(){
        alert("clicked")
    }

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;

    return(
        <>
        <div className="movie-card">
            <div className="movie-poster">
                <img src={posterUrl} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={OnFavourite}>♥</button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
            </div>

        </div>
        </>
    )

}
export default MovieCard