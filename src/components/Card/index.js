import styles from './index.module.css'
import React from "react";
import {BiPlus} from "react-icons/all";

function Card(){
	return (
		<div className={styles.card}>
			<img src="https://site.tim.com.br/sites/default/files/2021-07/meni-noney_0.png" alt="Card img"/>
			
			<div className={styles.body}>
				<span className={styles.product}>
					Neymar Jr
				</span>
				
				<span>
					R$500.000.000,00
				</span>
			</div>
			
			<div className={styles.btndesktop}>
				<button>
					<BiPlus />
				</button>
			</div>
			
			<div className={styles.btnmobile}>
				<button>
					Add to cart
				</button>
			</div>
		</div>
	)
}

export default Card