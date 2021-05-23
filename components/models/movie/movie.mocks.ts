import { MovieFromApi } from './index';

export const mockMovieList: MovieFromApi[]  = [
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BMTc4ODc4NTQ1N15BMl5BanBnXkFtZTcwNDUxODUyMw@@._V1_SX300.jpg",
    Title: "The A-Team",
    Type: "movie",
    Year: "2010",
    imdbID: "tt0429493"
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BMWVkMTk4MjItMzE2Ni00NzllLTlmMWUtMmVjODYyYmRmNzViXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SX300.jpg",
    Title: "The Dream Team",
    Type: "movie",
    Year: "1989",
    imdbID: "tt0097235"
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_SX300.jpg",
    Title: "WALL·E",
    Type: "movie",
    Year: "2008",
    imdbID: "tt0910970"
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BMjNiMWVhNjAtMzgyYS00NzRhLWJmNGUtNzdiOGFhMmY5NDUwL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Police Academy",
    Type: "movie",
    Year: "1984",
    imdbID: "tt0087928"
  },
  {
    Poster: "https://m.media-amazon.com/images/M/MV5BNzM4Y2FlNzYtZmY5Yy00NzU4LTk1ODItY2NjYWYzYzUyZGM3L2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
    Title: "Patch Adams",
    Type: "movie",
    Year: "1998",
    imdbID: "tt0129290"
  }
];

export function getRandomMockMovie(){
  const movieIndex = Math.floor(Math.random() * mockMovieList.length);
  return mockMovieList[movieIndex];
}