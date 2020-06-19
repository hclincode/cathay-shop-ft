import React from 'react';

import OrderStatusCard from './components/OrderStatusCard';
import Spinder from './components/Spinner'
import OrderApi from './api/OrderApi';

function compareOrderByDateDESC(a, b) {
  let keyA = new Date(a.date);
  let keyB = new Date(b.date);
  if (keyA < keyB) return 1;
  if (keyA > keyB) return -1;
  return 0;
}

class App extends React.Component {
  state = { orderStatus: [] };

  componentDidMount() {
    setTimeout(() => { this.setState({ orderStatus: OrderApi.getOrderStatus().orders }) }, 200);
  }

  renderOrderStatus = () => (
    <div>
      <OrderStatusCard
        isActive={true}
        orders={this.state.orderStatus.filter(x => x.status.code === 1 || x.status.code === 2).sort(compareOrderByDateDESC)}
        title="進行中" />
      <OrderStatusCard
        isActive={false}
        orders={this.state.orderStatus.filter(x => x.status.code === 3 || x.status.code === 4).sort(compareOrderByDateDESC)}
        title="已完成" />
    </div>
  );


  render() {
    if (this.state.orderStatus.length === 0) {
      return <Spinder />;
    }

    return this.renderOrderStatus();
  }
}
export default App;
