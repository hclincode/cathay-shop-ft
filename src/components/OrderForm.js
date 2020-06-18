import React from 'react';

import '../style/OrderForm.css';

const LIMITED_VISIBLE_NAME_LENGTH = 40;

class OrderForm extends React.Component {
    isHidden = () => {
        if (!this.props.isActive) {
            return "hidden";
        }
        return "";
    }

    isGray = () => {
        if (!this.props.isActive) {
            return "gray";
        }
        return "";
    }

    showName = () => {
        if (this.props.details.name.length > LIMITED_VISIBLE_NAME_LENGTH) {
            return this.props.details.name.substring(0, LIMITED_VISIBLE_NAME_LENGTH) + "...";
        }

        return this.props.details.name;
    }

    render() {
        return (
            <div className="order-form-container">
                <div className="logo">
                    <img alt="logo" className={`img-logo ${this.isGray()}`} src={this.props.details.logo}></img>
                </div>
                <div className="info">
                    <div className="type-date-container">
                        <div className={`type ${this.isGray()}`}>{this.props.details.status.type}</div>
                        <div className={`date ${this.isHidden()}`}>預計出貨：{this.props.details.date}</div>
                    </div>
                    <div className="name">{this.showName()}</div>
                </div>
                <div className="more">{">"}</div>
            </div>
        );
    }
}

OrderForm.defaultProps = {
    details: {
        name: "",
        logo: "",
        logo_alt: "logo",
        status: {
            type: ""
        },
        date: ""
    },
    isActive: true
}

export default OrderForm;