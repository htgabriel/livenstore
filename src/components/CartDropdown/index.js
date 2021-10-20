import React from "react";
import styles from './index.module.css'

function CartDropdown({isVisible=true}){
	return (
		<div
			className={`${styles.cart} ${isVisible ? styles.show : ''}`}
		>
			<div className={styles.content}/>
		</div>
	)
}

export default CartDropdown