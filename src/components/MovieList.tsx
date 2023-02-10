import { useQuery } from 'react-query';
import { Movie } from '../types/Movie';
import { MovieListItem } from './MovieListItem';

const API_KEY = 'k_2pcqdv1i';

export const MovieList: React.FC = () => {
    const { isLoading, isError, data } = useQuery<{ results: Movie[] }>('movies', () =>
        fetch(`https://imdb-api.com/API/AdvancedSearch/${API_KEY}?plot=Arnold Schwarzenegger`).then((res) => res.json()),
    );

    const isMovieByJamesCameron = (movie: Movie): boolean => {
        const needle = 'james cameron';

        return movie.stars?.toLowerCase().includes(needle);
    };

    return (
        <div className="movielist">
            {isLoading ? (
                <span>Loading</span>
            ) : isError ? (
                <span>Something went wrong fetching the imdb-api.</span>
            ) : (
                <div className="movielist__container">
                    {data?.results.map((movie: Movie) => {
                        return isMovieByJamesCameron(movie) ? <MovieListItem movie={movie} /> : null;
                    })}
                </div>
            )}
        </div>
    );
};
