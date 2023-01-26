import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ProductCartItems from './ProductCartItems';

// Estilos
import '../styles/orderCard.css';

class OrderCard extends Component {
  render() {
    const { order } = this.props;
    console.log(order);
    return (
      <div className="order-display default-shadown-card ">
        <h2>{order.id}</h2>
        <ol>
          {order.products.map(({ productData, productQt }) => (
            <ProductCartItems
              key={ productData.id }
              { ...productData }
              productQt={ productQt }
              order
            />
          ))}
        </ol>
        <h2>Total:</h2>
        <span>{order.total}</span>
      </div>
    );
  }
}

OrderCard.propTypes = {
  order: PropTypes.shape({
    products: PropTypes.arrayOf({
      productData: PropTypes.shape({
        title: PropTypes.string,
        price: PropTypes.number,
        thumbnail: PropTypes.string,
      }),
      productQt: PropTypes.number,
    }),
    total: PropTypes.string,
  }),
}.isRequired;

export default OrderCard;
