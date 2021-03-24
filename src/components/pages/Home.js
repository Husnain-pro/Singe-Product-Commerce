import React from 'react';
import { BsArrowDown } from 'react-icons/bs';
import styles from '../styles/Home.module.css';
import Card from '../utils/Card';

const Home = () => {
	return (
		<div className={styles.home}>
			<div className={{ ...styles.container, ...styles.container_res }}>
				<div className={styles.imageContainer}>
					<div className={styles.sideCir}>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
						<span></span>
					</div>
					<img
						src="https://www.danielwellington.com/media/staticbucket/media/catalog/product/c/l/cl40-roselyn-rg.png"
						alt="clock"
						className={styles.image}
					/>
					<p className={styles.arrow}>
						<BsArrowDown />
					</p>
				</div>
				<div className={styles.cardContainer}>
					<Card />
				</div>
			</div>
		</div>
	);
};

export default Home;
