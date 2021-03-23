import React from 'react';
import { AiOutlineInfo } from 'react-icons/ai';
import styles from '../styles/Navbar.module.css';
const Navbar = () => {
	return (
		<div className={styles.container}>
			<div>
				<h1>DW</h1>
			</div>
			<div className={styles.m_nav}>
				<p>WATCHES</p>
				<p>ABOUT</p>
			</div>
			<div className={styles.info}>
				<p>
					<AiOutlineInfo />
				</p>
			</div>
		</div>
	);
};

export default Navbar;
