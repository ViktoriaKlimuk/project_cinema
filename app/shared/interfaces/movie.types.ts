import { TypeMaterialIconName } from './icons.types'

export interface IGenre {
	_id: string
	name: string
	slug: string
	description: string
	link?: string
	//   icon: TypeMaterialIconName;
}
export interface IParameters {
	year: number
	duration: number
	country: string
}
export interface ISerial {
	releaseYears?:string | null
	seasonsInfo?:number
	seriesLength?:number
}
export interface IActor {
	_id: string
	kinopoiskId: string
	photo: string
	name: string
	countMovies: number
	slug: string
}

export interface IMovie {
	_id: string
	kinopoiskID: string
	poster: string
	bigPoster: string
	title: string
	description: string
	parameters: IParameters
	movieType?: string
	genres: IGenre[]
	actors: IActor[]
	videoUrl: string
	slug: string
	serial?: ISerial
	ratingKinoPoisk?: number
	votes?: number
	shortDescription?: string
	trailer?: string
	quality?: string
	rating: number
	countOpened?: number
}