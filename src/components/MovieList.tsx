import { useState } from 'react';
import { useQuery } from 'react-query';
import { Movie } from '../types/Movie';
import { MovieQuery } from '../types/MovieQuery';
import { MovieDetails } from './MovieDetails';
import { MovieListItem } from './MovieListItem';

const API_KEY = 'k_2pcqdv1i';
const API_URL = 'https://imdb-api.com/API/AdvancedSearch';

enum ActiveTabs {
    ALL = 'ALL',
    FAVORITES = 'FAVORITES',
}

export const MovieList: React.FC = () => {
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>();
    const [favoriteMovies, setFavoriteMovies] = useState<Movie[]>([]);
    const [activeTab, setActiveTab] = useState<ActiveTabs>(ActiveTabs.ALL);
    const [moviePlotFilter, setMoviePlotFilter] = useState<string>();

    const { isLoading, isError, data } = useQuery<MovieQuery>('movies', () =>
        fetch(`${API_URL}/${API_KEY}?plot=Arnold Schwarzenegger`).then((res) => res.json()),
    );

    const addToFavorites = (movie: Movie) => {
        if (!favoriteMovies.some((fav) => fav.id === movie.id)) {
            setFavoriteMovies((prev) => [...prev, movie]);
        } else {
            setFavoriteMovies((prev) => prev.filter((fav) => fav.id !== movie.id));
        }
    };

    const movieList = activeTab === ActiveTabs.ALL ? data?.results : favoriteMovies;

    return (
        <div className="movielist">
            {!selectedMovie &&
                (isLoading ? (
                    <span>Loading</span>
                ) : isError ? (
                    <span>Something went wrong fetching the imdb-api.</span>
                ) : (
                    <>
                        <div className="movielist__categories">
                            <button className={activeTab === ActiveTabs.ALL ? 'active' : ''} onClick={() => setActiveTab(ActiveTabs.ALL)}>
                                All movies
                            </button>
                            <button className={activeTab === ActiveTabs.FAVORITES ? 'active' : ''} onClick={() => setActiveTab(ActiveTabs.FAVORITES)}>
                                Favorite movies
                            </button>
                        </div>
                        <div className="movielist__filters" onClick={() => setMoviePlotFilter(!moviePlotFilter ? 'James Cameron' : '')}>
                            {!moviePlotFilter ? 'Click here to filter movies by James Cameron' : 'Click here to remove filter'}
                        </div>
                        <div className="movielist__collection">
                            {movieList &&
                                movieList.length > 0 &&
                                movieList.map((movie, index) => {

                                    // If the movie plot filter is set, only show movies that include the filter string
                                    if (moviePlotFilter) {
                                        if (!movie.plot?.toLowerCase().includes(moviePlotFilter.toLowerCase())) {
                                            return null;
                                        }
                                    }

                                    return (
                                        <MovieListItem
                                            movie={movie}
                                            key={index}
                                            toggleDetailedView={setSelectedMovie}
                                            addToFavorites={addToFavorites}
                                            isFavorite={favoriteMovies.some((fav) => fav.id === movie.id)}
                                        />
                                    );
                                })}

                            {!data?.results && data?.errorMessage && <span>{data.errorMessage}</span>}
                        </div>
                    </>
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
