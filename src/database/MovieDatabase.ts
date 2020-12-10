import { BaseDatabase } from "./BaseDatabase";
import { Movie } from "../model/Movie";

export class MovieDatabase extends BaseDatabase {
    private static TABLE_NAME = "movies_4all";

    public async createMovie (
     id: string,
     title: string,
     director: string,
     available: boolean,
    ): Promise <Movie | undefined> {
        try{
            const movie = await this.getConnection()
                .insert({
                    id,
                    title,
                    director,
                    available
                })
                .into(MovieDatabase.TABLE_NAME);
            return Movie.toMovieModel(movie[0])
        }   catch (error) {
            throw new Error(error.sqlMessage || error.message);
        }
    }

    public async getMovieByTitle(title: string): Promise<any> {
        
    }

}