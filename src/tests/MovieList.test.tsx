import { getByText, render, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { MovieList } from '../components/MovieList';
import App from '../App';
import { act } from 'react-dom/test-utils';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            refetchOnReconnect: false,
            retry: false,
        },
    },
});

describe('MovieList', () => {
    it('should render', () => {
        render(
            <QueryClientProvider client={queryClient}>
                <MovieList />
            </QueryClientProvider>,
        );
    });

    it('should load a movielist', () => {
        const app = render(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>,
        );

        const button = app.getAllByText('Load movies');

        act(() => {
            button[0].click();
        });

        expect(app.baseElement.querySelector('.movielist')).toBeInTheDocument();
    });
    
    it('should have loaded movies into the movielist and contain The Expendables 2 movie', async () => {
        const app = render(
            <QueryClientProvider client={queryClient}>
                <App />
            </QueryClientProvider>,
        );

        const button = app.getAllByText('Load movies');

        act(() => {
            button[0].click();
        });

        const { findByText  } = app;

        const movie = await findByText('The Expendables 2', undefined , { timeout: 5000 });
    });
});
