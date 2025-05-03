interface Movie {
    id: number;
    title: string;
    adult: boolean;
    backdrop_path: string;
    genre_ids: number[];
    overview: string;
    popularity: number;
    release_date: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}

interface TrendingMovie {
    searchTerm: string;
    movie_id: number;
    title: string;
    count: number;
    poster_url: string;
}

export { Movie, TrendingMovie };