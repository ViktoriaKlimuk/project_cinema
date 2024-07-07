import { IGenre } from "@/shared/interfaces/movie.types";


export interface IGenreEditInput extends Omit<IGenre, '_id'> {}