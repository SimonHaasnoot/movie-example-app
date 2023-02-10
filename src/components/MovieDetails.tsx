import { Movie } from '../types/Movie';

export type MovieDetailProps = {
    movie: Movie;
};

export const MovieDetails: React.FC<MovieDetailProps> = ({ movie }) => {
    return (
        <div className="movie-details">
            <div className="movie-details__image">
                <img src={movie.image} alt={movie.title} className="movie-details__image" />
            </div>
            <div className="movie-details__info">
                <h2>{movie.title}</h2>

                <p>
                    Movie plot: <br /> {movie.plot}
                </p>
                <p>
                    Movie stars: <br /> {movie.stars}
                </p>
                <p>
                    Genres: <br /> {movie.genres}
                </p>
            </div>
        </div>
    );
};
