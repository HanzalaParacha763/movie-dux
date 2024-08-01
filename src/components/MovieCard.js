import React from 'react'
import '../styles.css'

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {


    const handleError = (e) => {
        e.target.src = "images/default.jpg"
    }

    const getRating = (rating) => {

        if (rating >= 8)
            return "rating-good"
        else if (rating >= 4)
            return "rating-ok"
        else
            return "rating-bad"
    }

    return (
        <div key={movie.id} className="movie-card">
            <img src={`images/${movie.image}`} alt={movie.title} onError={handleError} />
            <div className="movie-card-info">
                <h3 className="movie-card-title">{movie.title}</h3>
                <div>
                    <span className="movie-card-genre">{movie.genre}</span>
                    <span className={`movie-card-rating ${getRating(movie.rating)}`}>{movie.rating}</span>
                </div>
                <label className="switch">
                    <input type="checkbox" checked={isWatchlisted} onChange={() => toggleWatchlist(movie.id)} />
                    <span className='slider'>
                        <span className='slidedr-label'>{isWatchlisted ? "In WatchList" : "Add to Watchlist"}</span>
                    </span>
                </label>
            </div>
        </div>
    );
}
