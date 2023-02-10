import { useState } from 'react';
import { MovieList } from './components/MovieList';
import bgImage from './assets/cinema-chairs.jpg';

const App = () => {
    const [loadMovies, setLoadMovies] = useState(false);

    return (
        <div className="app">
            <div className="app__heading">
                <h1>My movie overview</h1>
                <p>Your favorite Arnold Schwarzenegger movies by James Cameron.</p>
                <button onClick={() => setLoadMovies(true)}>Load movies</button>

                <img src={bgImage} alt="Cinema chairs" className="app__background" />
            </div>

            <div className="app__content">
                {loadMovies && <MovieList />}
            </div>
        </div>
    );
};

export default App;
