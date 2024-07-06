import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../components/store/store';
import { clearCart, removeFromCart } from '../components/store/cartSlice';
import '../styles/appStyles.css';
import { Link, useNavigate } from 'react-router-dom';

const CartPopup: React.FC = () => {
    const cart = useSelector((state: RootState) => state.cart.items);
    const dispatch = useDispatch();
    const navigate=useNavigate();

    const totalPrice = cart.reduce((total, book) => {
        const price = typeof book.price === 'string' ? parseFloat(book.price.replace('$', '')) : book.price;
        return total + price;
    }, 0);

    const handleCheckout=()=>{
        dispatch(clearCart());
        navigate(`/thankyou`);
    }
        

    return (
        <div className="cart-popup">
            <h2>Your cart</h2>
            {cart.length === 0 ? (
                <p>Your cart is empty</p>
            ) : (
                <>
                <ul>
                    {cart.map((book) => (
                        <li key={book.id}>
                            <div>
                                <button onClick={() => dispatch(removeFromCart(book.id))}>Remove</button>
                            
                                <Link to={`/book/${book.id}`} className="cart-info">{book.title}</Link>
                            </div>
                            <div className="cart-info" id='price'>{book.price}</div>
                            
                        </li>
                    ))}
                    <li>
                        
                    </li>
                </ul>
                <p id="total">
                    Total: ${totalPrice.toFixed(2)}
                </p>
                <button onClick={handleCheckout} id="checkout-button">Checkout</button>
                </>
            )}
        </div>
    );
};

export default CartPopup;
