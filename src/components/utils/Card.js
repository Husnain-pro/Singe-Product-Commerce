import React, { useState } from "react";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import { RiArrowDropLeftFill, RiArrowDropRightFill } from "react-icons/ri";
import styles from "../styles/Card.module.css";
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
          <p>CLASSIC | 40MM</p>
          <div className={styles.title}>
            <h2>Classic Roselyn</h2>
            <p
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: "500",
                fontSize: "19pt",
                color: "var(--color-secondary)",
              }}
            >
              <p
                style={{
                  fontSize: "11pt",
                  paddingRight: "1pt",
                  marginBottom: "1pt",
                }}
              >
                $
              </p>
              159
            </p>
          </div>
        </div>

        {/* ......PRODUCT DESCRIPTION........ */}

        <p className={styles.description}>
          With classic feathure such as the slim case,detail in rose gold and
          silver, and our heritage NATO strap in ruby red, classic Roselyn is an
          effortless day-to-evening timespace.
        </p>

        {/* .........PRODUCT BUTTON......... */}
        <div className={styles.btnContainer}>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p className={styles.size}>SIZE:</p>
            <div className={styles.btn}>
              <p>36</p>
              <p>40</p>
              <p>44</p>
            </div>
          </div>
          <div className={styles.quantity}>
            <p>QUANTITY:</p>
            <div className={styles.quantityBtn}>
              <p onClick={() => setQuantity(quantity - 1)}>
                <IconContext.Provider value={{ className: styles.q_btn }}>
                  <RiArrowDropLeftFill />
                </IconContext.Provider>
              </p>
              <p
                style={{
                  fontSize: "10pt",
                  fontWeight: "500",
                  transform: "translateY(-1px)",
                }}
              >
                {quantity}
              </p>

              <p onClick={() => setQuantity(quantity + 1)}>
                <IconContext.Provider value={{ className: styles.q_btn }}>
                  <RiArrowDropRightFill />
                </IconContext.Provider>
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
            <p style={{display:"flex",alignItems:"center"}}>
            PURCHASE <span className={styles.purchaseArrow}>→</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
