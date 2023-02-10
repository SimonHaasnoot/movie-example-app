import { useState } from 'react';
import { useQuery } from 'react-query';
import { Movie } from '../types/Movie';
import { MovieListItem } from './MovieListItem';

const API_KEY = 'k_2pcqdv1i';

export const MovieList: React.FC = () => {
    const [detailedView, setDetailedView] = useState(false);
    const { isLoading, isError, data } = useQuery<{ results: Movie[] }>('movies', () =>
        fetch(`https://imdb-api.com/API/AdvancedSearch/${API_KEY}?plot=Arnold Schwarzenegger`).then((res) => res.json()),
    );

    const isMovieByJamesCameron = (movie: Movie): boolean => {
        const needle = 'james cameron';

        return movie.stars?.toLowerCase().includes(needle);
    };

    const toggleDetailedView = () => {
        setDetailedView(!detailedView);
    };

    return (
        <div className="movielist">
            {!detailedView &&
                (isLoading ? (
                    <span>Loading</span>
                ) : isError ? (
                    <span>Something went wrong fetching the imdb-api.</span>
                ) : (
                    <div className="movielist__collection">
                        {data?.results.map((movie, index) => {
                            return isMovieByJamesCameron(movie) ? (
                                <MovieListItem movie={movie} key={index} toggleDetailedView={toggleDetailedView} />
                            ) : null;
                        })}
                    </div>
                ))}

            {detailedView && (
                <div className="movielist__detailed-view">
                    <button onClick={toggleDetailedView}>{'<--'} Back</button>
                </div>
            )}
        </div>
    );
};
