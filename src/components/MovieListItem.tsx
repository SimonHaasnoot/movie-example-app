import { Movie } from '../types/Movie';

export type MovieListItemProps = {
    movie: Movie;
};

export const MovieListItem: React.FC<MovieListItemProps> = ({ movie }) => {
    return <div className="movielist__movie">{movie.title}</div>;
};
