import { ChangeEvent, FC, useState } from "react"
import styles from './Search.module.scss'
import SearchList from "./SearchList/SearchList"
import SearchField from "components/ui/search-field/SearchField"
import { useDebounce } from "@/hooks/useDebounce"
import { useQuery } from "react-query"
import { MovieService } from "@/services/movie.service"


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