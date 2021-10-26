import React, {useEffect, useState} from "react";
import styles from './index.module.css'
import {Card, Header, Search} from '../../components'
import api from "../../services/api"

const limit_per_page = 8
function Dashboard(){
	const [products, setProducts] = useState([])
	const [page, setPage] = useState(1)
	const [filter, setFilter] = useState('')
	
	useEffect(() => {
		(async () => {
			try{
				const {data} = await api.get(`api/v1/product?${filter ? `name=${filter}` : ''}`, {
					params: {
						page,
						limit: limit_per_page
					}
				})
				setProducts(data)
			}catch (err){
				console.log(err)
			}
		})()
	}, [page, filter])
	
	function filterProducts(txtProducts){
		setFilter(txtProducts)
	}
	
	return (
		<div className={styles.container}>
			<Header />
			
			<Search
				onSearch={filterProducts}
			/>
			
			<div className={styles.dashboard}>
				<div className={styles.content}>
					{products.map(product => {
						return (
							<Card
								key={product.id}
								{...product}
							/>
						)
					})}
				</div>
				
				<div className={styles.pagination} style={{display: "flex", width: "100%", justifyContent: "space-between", marginTop: 20}}>
					<div>
						{page !== 1 &&
							<span onClick={() => setPage(page -1)}>Pagina Anterior</span>
						}
					</div>
					
					<div>
						{products.length === limit_per_page &&
							<span onClick={() => setPage(page + 1)}>Próxima Página</span>
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Dashboard