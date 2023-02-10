import { Movie } from '../types/Movie';
import { FaStar } from 'react-icons/fa';

export type MovieListItemProps = {
    movie: Movie;
    toggleDetailedView: (movie: Movie) => void;
};

export const MovieListItem: React.FC<MovieListItemProps> = ({ movie, toggleDetailedView }) => {
    return (
        <div className="ml-item" onClick={() => toggleDetailedView(movie)}>
            <img src={movie.image} alt={movie.title} className="ml-item__image" />
            <div className="ml-item__info">
                <h2 className="ml-item__title">{movie.title}</h2>
                <p className="ml-item__rating">{movie.imDbRating}</p>
            </div>
            <div className="ml-item__favorite" onClick={(e) => e.preventDefault()}>
                <FaStar color="black" />
            </div>
        </div>
    );
};
