import styles from './index.module.css'
import {GoSearch} from "react-icons/all";

function Search({onSearch}){
	return (
		<div className={styles.content}>
			<input
				type="text"
				onBlur={({target: {value}}) => onSearch && onSearch(value)}
			/>
			
			<button className={styles.btnSearch}>
				<GoSearch size={20} />
			</button>
		</div>
	)
}

export default Search