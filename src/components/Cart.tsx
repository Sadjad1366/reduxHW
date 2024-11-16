import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store';
import { removeFromCart, updateQuantity } from '../features/cartSlice';

const Cart: React.FC = () => {
      const cartItems = useSelector((state: RootState) => state.cart.items);
      const dispatch = useDispatch();


  const handleRemove = (id: number) => {
      dispatch(removeFromCart(id));
    };

    const handleQuantityChange = (id: number, quantity: number) => {
      if (quantity > 0) {
        dispatch(updateQuantity({ id, quantity }));
      }
    };
    return (
      <div>
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <h3>{item.title}</h3>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, +e.target.value)}
                />
                <button onClick={() => handleRemove(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  };

  export default Cart;
