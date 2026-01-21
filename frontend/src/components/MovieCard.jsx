import { useMovieContext } from "../contexts/MovieContext";

function MovieCard({movie}){
    const { addToFavorites, removeFromFavorites, isFavorite } = useMovieContext();
    
    function OnFavourite(){
        if(isFavorite(movie.id)){
            removeFromFavorites(movie.id)
        } else {
            addToFavorites(movie)
        }
    }

    const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
    const favorite = isFavorite(movie.id);

    return(
        <>
        <div className="movie-card">
            <div className="movie-poster">
                <img src={posterUrl} alt={movie.title} />
                <div className="movie-overlay">
                    <button className="favourite-btn" onClick={OnFavourite} style={{color: favorite ? "red" : "white"}}>♥</button>
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