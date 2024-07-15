import { ChangeEvent, FC, useState } from "react"
import styles from './Search.module.scss'
import SearchList from "./SearchList/SearchList"
import { useQuery } from "react-query"
import { useDebounce } from "../../../hooks/useDebounce"
import { MovieService } from "../../../services/movie.service"
import SearchField from "../../ui/search-field/SearchField"


const Search: FC = () => {
	const [searchTerm, setSearchTerm] = useState('')
	const debouncedSearch = useDebounce(searchTerm, 500)

	const { isSuccess, data } = useQuery(
		['Search movie list', debouncedSearch],
		() => MovieService.getAll(debouncedSearch),
		{
			select: ({ data }) => data,
			enabled: !!debouncedSearch
		}
	)

	const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
		setSearchTerm(e.target.value)
	}

	return (
		<div className={styles.wrapper}>
			<SearchField  searchTerm={searchTerm} handleSearch={handleSearch} placeholder="Поиск..."/>
			{isSuccess && <SearchList movies={data || []}/>}
		</div>
	)
}

export default Search