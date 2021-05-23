export enum MovieType {
  movie ='movie', 
  series = 'series', 
  episode = 'episode'
}

export type MovieFromApi = {
  Title: string;
  Poster: string;
  Type: string;
  imdbID: string;
  Year: string;
}

export type MovieResponse = {
  Response: boolean;
  Search: MovieFromApi[];
  totalResults: number;
}

export type MovieForFavourites = {
  movie: Movie,
  numOfFans: number
}

export class Movie {
  constructor(
  /**
   * Movie Title
   */
  public title: string,
  /**
   * Year produced
   */
  public year: string,
  /**
   * Id for the IMDB database. Used to fetch movie details
   */
  public imdbID: string,
  /**
   * Movie Genre
   */
  public type: MovieType,
  /**
   * Url to fetch poster image
   */
  public posterUrl: string,
  ){}

  static fromApiObject(object: MovieFromApi) {
  return new Movie(
    object.Title,
    object.Year,
    object.imdbID,
    (<any>MovieType)[object.Type],
    object.Poster
  )   
  }

}