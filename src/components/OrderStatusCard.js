import React from 'react'
import '../style/OrderStatusCard.css';
import OrderForm from './OrderForm';

class OrderStatusCard extends React.Component {
    defaultPros = { orders: [], title: "" };

    render() {
        if (this.props.orders.length === 0) {
            return "";
        }

        return (
            <div className="order-status-card-container">
                <div className="title-container">
                    <div className="card-title">
                        <div id="green-bar"></div>
                        {this.props.title}
                    </div>
                </div>
                <div>
                    {this.props.orders.map((orderDetails, index) => <OrderForm key={index} isActive={this.props.isActive} details={orderDetails} />)}
                </div>
            </div>
        );
    }
}

export default OrderStatusCard;