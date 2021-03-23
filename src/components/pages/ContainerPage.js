import React from 'react';
import styles from '../styles/ContainerPage.module.css';
import Home from './Home';
import Navbar from './Navbar';
const ContainerPage = () => {
	return (
		<div className={styles.container}>
			<div className={styles.navbar}>
				<Navbar />
			</div>
			<div className={styles.home}>
				<Home />
			</div>
		</div>
	);
};

export default ContainerPage;
