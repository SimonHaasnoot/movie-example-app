import { Movie } from "./Movie";

export type MovieQuery = {
    errorMessage: string | null;
    queryString: string | null;
    results: Movie[] | null;
}