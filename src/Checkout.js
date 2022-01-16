import React from 'react';
import './Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';
import { useStateValue } from './ContextApi';

function Checkout() {
    const [{cart, user}, dispatch] = useStateValue(); 
  
    return (
      <div className="checkout">
        <div className="checkout__left">
            <img className="checkout__adv" src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/Jupiter21P1/pay_stripe_desk.png" alt="adv" />
          <div>
            <h3>{user?.email}</h3>
            <h3 className="checkout__title">Your Shopping Details</h3>
            
            {cart.map( item => (
             <CheckoutProduct 
              id = {item.id}
              title = {item.title}
              image = {item.image}
              price = {item.price}
             /> 
            ))}
          </div>
        </div>
  
        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    );
  }
  
  export default Checkout;