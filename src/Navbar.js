import React from "react";

const Navbar = (props) => {
// console.log(props.count);
  return (
    <div style={styles.nav}>
      <div style={styles.cartIconContainer}>
        <img
          style={styles.cartIcon}
          src="https://www.flaticon.com/svg/vstatic/svg/3868/3868915.svg?token=exp=1619860169~hmac=d913368d9ed663e994c209589a0ffb86"
          alt="cart-icon"
        />
        <span style={styles.cartCount}> { props.count } </span>
      </div>
    </div>
  );
};

const styles = {
  cartIcon: {
    height: 32,
    marginRight: 19,
  },
  nav: {
    height: 70,
    background: "#4267b2",
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  cartIconContainer: {
    position: "relative",
  },
  cartCount: {
    background: "white",
    borderRadius: "100%",
    padding: "3px",
    position: "absolute",
    right: 0,
    top: -9,
  },
};
export default Navbar;
