import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/product-card.css';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';
import carData from '../data/car.json'; 

const ProductCard = () => {
  const dispatch = useDispatch();

  const addToCart = (id, title, price, imgUrl) => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        price,
        imgUrl,
      })
    );
  };

  return (
    <div className="product__list">
      {carData.map(car => (
        <div key={car.id} className="product__item">
          <div className="product__item-img">
            <img src={car.imgUrl} alt={car.title} className="w-100" />
          </div>

          <div className="product__info d-flex justify-content-between align-items-center">
            <div>
              <h6>
                <Link to={`/product-details/${car.id}`}>{car.title}</Link>
              </h6>
              <h4 className="section__subtitle fw-bold">${Number(car.price).toFixed(2)}</h4>
            </div>

            <span className="cart__icon me-5">
              <i className="ri-shopping-cart-2-line" onClick={() => addToCart(car.id, car.title, car.price, car.imgUrl)}></i>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductCard;
