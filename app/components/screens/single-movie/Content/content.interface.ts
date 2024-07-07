export interface ILink {
	_id:string
	link:string
	title:string
	photo?:string
}

export interface IContentList {
	name:string
	links:ILink[]
	variant?: 'actors' | 'genres'
}