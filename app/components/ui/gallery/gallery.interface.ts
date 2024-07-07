import { IGenre } from "@/shared/interfaces/movie.types"

export interface IGalleryItem{
	_id:string
	posterPath: string
	name:string
	link: string
	rating:number
	genres:IGenre
	subTitle?: string
	description?:string
	movieType?:string
	content?:{
		title:string,
		year:number,
		duration:number,
		country:string,
		ratingKinoPoisk:number
	},
	param?: {
		title: string,
		subTitle:string,
	}

}


export interface IGalleryItemProps {
	item:IGalleryItem
	variant?: 
		'horizontal' |
		'filmDetails' |
		'mainPage'
}