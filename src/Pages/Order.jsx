import React, { Component } from 'react';

// Componentes
import Loading from '../components/Loading';
import OrderCard from '../components/OrderCard';

class Order extends Component {
  constructor() {
    super();

    this.state = {
      loadingPage: true,
      order: {},
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    const order = this.getOrderData(id);

    this.setState({
      order,
    });

    this.fakeLoading();
  }

  getOrderData(id) {
    const orders = JSON.parse(localStorage.getItem('orders'));

    return orders.find((order) => order.id === id);
  }

  fakeLoading() {
    const waitTime = 1000;
    setTimeout(this.setState({ loadingPage: false }), waitTime);
  }

  render() {
    const { loadingPage, order } = this.state;

    return loadingPage
      ? <Loading />
      : <OrderCard order={ order } />;
  }
}

export default Order;
