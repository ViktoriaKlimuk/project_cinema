import { IActor } from "../../../../shared/interfaces/movie.types";



export interface IActorEditInput extends Omit<IActor, '_id'> {}