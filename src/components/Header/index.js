import React, {useState} from "react";
import {MdOutlineShoppingCart} from "react-icons/all";
import {CartDropdown} from "../";
import styles from './index.module.css'

function Header(){
	const [cartVisible, setVisibility] = useState(false)
	
	function toggleDropdown(){
		setVisibility(!cartVisible)
	}
	
	return (
		<div className={styles.header}>
			<div className={styles.content}>
				<div className={styles.menu}>
					<div>SHOP</div>
					<div>PRODUCTS</div>
				</div>
				
				<div className={styles.logo}>
					LIVEN STORE
				</div>
				
				<div className={styles.relative}>
					<MdOutlineShoppingCart
						size={35}
						onClick={toggleDropdown}
					/>
					<CartDropdown
						isVisible={cartVisible}
					/>
				</div>
			</div>
		</div>
	)
}

export default Header