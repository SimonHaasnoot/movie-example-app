import { useState } from 'react';
import { useQuery } from 'react-query';
import { Movie } from '../types/Movie';
import { MovieQuery } from '../types/MovieQuery';
import { MovieDetails } from './MovieDetails';
import { MovieListItem } from './MovieListItem';

const API_KEY = 'k_2pcqdv1i';

export const MovieList: React.FC = () => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>();
    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);

    const { isLoading, isError, data } = useQuery<MovieQuery>('movies', () =>
        fetch(`https://imdb-api.com/API/AdvancedSearch/${API_KEY}?plot=Arnold Schwarzenegger`).then((res) => res.json()),
    );

    const isMovieByJamesCameron = (movie: Movie): boolean => {
        const needle = 'james cameron';

        return true;

        return movie.stars?.toLowerCase().includes(needle);
    };

    return (
        <div className="movielist">
            {!selectedMovie &&
                (isLoading ? (
                    <span>Loading</span>
                ) : isError ? (
                    <span>Something went wrong fetching the imdb-api.</span>
                ) : (
                    <div className="movielist__collection">
                        {data?.results &&
                            data.results.length > 0 &&
                            data.results.map((movie, index) => {
                                return isMovieByJamesCameron(movie) ? (
                                    <MovieListItem movie={movie} key={index} toggleDetailedView={setSelectedMovie} />
                                ) : null;
                            })}

                        {!data?.results && data?.errorMessage && <span>{data.errorMessage}</span>}
                    </div>
                ))}

            {selectedMovie && (
                <div className="movielist__detailed-view">
                    <button onClick={() => setSelectedMovie(null)}>{'<--'} Back</button>

                    <MovieDetails movie={selectedMovie} />
                </div>
            )}
        </div>
    );
};
