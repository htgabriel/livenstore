import styles from './index.module.css'
import React from "react";
import {BiPlus} from "react-icons/all";

function Card({name, price, image}){
	return (
		<div className={styles.card}>
			<img src={image} alt="Card img"/>
			
			<div className={styles.body}>
				<span className={styles.product}>{name}</span>
				<span> {`$${price}`} </span>
			</div>
			
			<div className={styles.btndesktop}>
				<button>
					<BiPlus />
				</button>
			</div>
			
			<div className={styles.btnmobile}>
				<button> Add to cart </button>
			</div>
		</div>
	)
}

export default Card