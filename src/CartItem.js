import React from 'react';

const CartItem = (props) => {
    const { price, title, qty ,img } = props.product;
    return (
        <div className="cart-item">
            <div className="left-block">
                <img style={styles.image} src = {img} />
            </div>
            <div className="right-block">
                <div style={{ fontSize: 25 }}>{title}</div>
                <div style={{ color: '#777' }}>{price}</div>
                <div style={{ color: '#777' }}>{qty}</div>
                <div className="cart-item-actions">
                    <img
                        alt="increase"
                        className="action-icons"
                        src="https://as2.ftcdn.net/jpg/01/26/10/59/500_F_126105961_6vHCTRX2cPOnQTBvx9OSAwRUapYTEmYA.jpg"
                        onClick={() => props.onIncreaseQuantity(props.product)}
                    />
                    <img
                        alt="decrease"
                        className="action-icons"
                        src="https://as1.ftcdn.net/jpg/03/73/49/86/500_F_373498649_nBxauQ0ipBSVrVcMpWWVmTpXu3BLvRyY.jpg"
                        onClick={() => props.onDecreaseQuantity(props.product)}
                    />
                    <img alt="delete" className="action-icons" src="https://as2.ftcdn.net/jpg/01/90/89/15/500_F_190891550_N7uKp2aHE3mOc20dmtDytj7atgvbhdOu.jpg"
                        onClick={() => props.onDeleteProduct(props.product.id)}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;