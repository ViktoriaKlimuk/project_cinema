import { ChangeEvent, FC } from "react"
import styles from './SearchField.module.scss';


interface ISearchField {
	searchTerm: string
	handleSearch: (event: ChangeEvent<HTMLInputElement>) => void
	placeholder: string
}

const SearchField: FC<ISearchField> = ({ searchTerm, handleSearch, placeholder }) => {
	return (

		<div className={styles.container}>
			<input placeholder={placeholder} value={searchTerm} onChange={handleSearch} type="search" />
			<div className={styles.search}></div>
		</div>
	)
}

export default SearchField



{/* // <div className={styles.search}>
		// 	<input placeholder={placeholder} value={searchTerm} onChange={handleSearch}/>
		// 	<img src="../../../../icons/searchLogo.svg" alt="поиск фильма" draggable={false}/>
		// </div> */}