import { render } from '@testing-library/react';
import { MovieDetails } from '../components/MovieDetails';

describe('MovieDetails', () => {
    it('should render', () => {
        const movie = {
            id: 'tt0107362',
            image: 'https://m.media-amazon.com/images/M/MV5BNjdhOGY1OTktYWJkZC00OGY5LWJhY2QtZmQzZDA2MzY5MmNmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_Ratio0.6837_AL_.jpg',
            title: 'Last Action Hero',
            description: '(1993)',
            runtimeStr: '130 min',
            genres: 'Action, Adventure, Comedy',
            genreList: [
                {
                    key: 'Action',
                    value: 'Action',
                },
                {
                    key: 'Adventure',
                    value: 'Adventure',
                },
                {
                    key: 'Comedy',
                    value: 'Comedy',
                },
            ],
            contentRating: 'PG-13',
            imDbRating: '6.4',
            imDbRatingVotes: '154902',
            metacriticRating: '44',
            plot: 'With the help of a magic ticket, a young movie fan is transported into the fictional world of his favorite action movie character.',
            stars: 'John McTiernan, Arnold Schwarzenegger, F. Murray Abraham, Art Carney, Charles Dance',
            starList: [
                {
                    id: 'tt0107362',
                    name: 'John McTiernan',
                },
                {
                    id: 'tt0107362',
                    name: 'Arnold Schwarzenegger',
                },
                {
                    id: 'tt0107362',
                    name: 'F. Murray Abraham',
                },
                {
                    id: 'tt0107362',
                    name: 'Art Carney',
                },
                {
                    id: 'tt0107362',
                    name: 'Charles Dance',
                },
            ],
        };

        render(<MovieDetails movie={movie} />);
    });
});
