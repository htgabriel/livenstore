import React from "react";
import styles from './index.module.css'
import {Card, Header, Search} from '../../components'

function Dashboard(){
	return (
		<div className={styles.container}>
			<Header />
			
			<Search />
			
			<div className={styles.dashboard}>
				<div className={styles.content}>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
				
				<div className={styles.pagination}>
					<span className={styles.active}/>
					<span/>
					<span/>
				</div>
			</div>
		</div>
	)
}

export default Dashboard