import { Movie } from '../types/Movie';
import { FaStar } from 'react-icons/fa';

export type MovieListItemProps = {
    movie: Movie;
    isFavorite?: boolean;
    toggleDetailedView: (movie: Movie) => void;
    addToFavorites: (movie: Movie) => void;
};

export const MovieListItem: React.FC<MovieListItemProps> = (props) => {
    const { movie, isFavorite, toggleDetailedView, addToFavorites } = props;

    return (
        <div className="ml-item">
            <img src={movie.image} alt={movie.title} className="ml-item__image" onClick={() => toggleDetailedView(movie)} />
            <div className="ml-item__info">
                <h2 className="ml-item__title" onClick={() => toggleDetailedView(movie)}>
                    {movie.title}
                </h2>
                <p className="ml-item__rating">{movie.imDbRating}</p>
            </div>
            <div className="ml-item__favorite" onClick={() => addToFavorites(movie)}>
                <FaStar color={isFavorite ? '#F2AD1A' : 'black'} style={{transition: 'all 0.3s ease-in-out'}} />
            </div>
        </div>
    );
};
