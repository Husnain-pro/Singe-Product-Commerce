import React, { useState } from 'react';
import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import styles from '../styles/Card.module.css';
const Card = () => {
	const [quantity, setQuantity] = useState(12);
	return (
		<div className={styles.container}>
			<div className={styles.header}>
				<p>About Product</p>
			</div>
			<div className={styles.cardBody}>
				{/* ...........PRODUCT TITLE........ */}
				<div className={styles.titleContainer}>
					<p>CLASSIC | 4mm</p>
					<div className={styles.title}>
						<h2>Classic Roselyn</h2>
						<p>
							<span style={{ fontSize: '10px' }}>$</span>
							159
						</p>
					</div>
				</div>

				{/* ......PRODUCT DESCRIPTION........ */}
				<div className={styles.description}>
					<p>
						with classic feathure such as the slim case,detail in rose gold and silver, and our heritage
						NATO strap in ruby red, classic Roselyn is an effortless day-to-evening timespace.
					</p>
				</div>

				{/* .........PRODUCT BUTTON......... */}
				<div className={styles.btnContainer}>
					<div
						style={{
							display: 'flex',
							flexDirection: 'row',
							gap: '20px',
							justifyContent: 'center',
							alignItems: 'center'
						}}
					>
						<p className={styles.size}>size:</p>
						<div className={styles.btn}>
							<p>36</p>
							<p>40</p>
							<p>44</p>
						</div>
					</div>
					<div className={styles.quantity}>
						<p>Quantity:</p>
						<div className={styles.quantityBtn}>
							<p className={styles.q_btn} onClick={() => setQuantity(quantity - 1)}>
								<FaLessThan />
							</p>
							<p style={{ fontSize: '14px' }}>{quantity}</p>
							<p className={styles.q_btn} onClick={() => setQuantity(quantity + 1)}>
								<FaGreaterThan />
							</p>
						</div>
					</div>
				</div>

				{/* ..........CART OPTIONS.......... */}
				<div className={styles.cartContainer}>
					<div className={styles.cartDetails}>
						<p>Make every gift special 10% off any two products.</p>
					</div>
					<div className={styles.cartBtn}>
						<p>
							ADD TO CART <span style={{ paddingLeft: '10px' }}>+</span>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Card;
