import { getAdminHomeUrl, getAdminUrl } from "config/url.config";
import { INavItem } from "./admin-navigation.interface";

export const navItems:INavItem[] = [
	{
		title:'Statistics',
		link: getAdminHomeUrl()
	},
	{
		title:'Пользователи',
		link: getAdminUrl('users')
	},
	{
		title:'Фильмы',
		link: getAdminUrl('movies')
	},
	{
		title:'Актеры',
		link: getAdminUrl('actors')
	},
	{
		title:'Жанры',
		link: getAdminUrl('genres')
	},
]