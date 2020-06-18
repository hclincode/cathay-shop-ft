import React from 'react';

import OrderStatusCard from './components/OrderStatusCard';
import OrderApi from './api/OrderApi';

function compareByDateDESC(a, b) {
  let keyA = new Date(a.date);
  let keyB = new Date(b.date);
  if (keyA < keyB) return 1;
  if (keyA > keyB) return -1;
  return 0;
}

function App() {
  const orderStatus = OrderApi.getOrderStatus().orders;
  let activeOrders = orderStatus.filter(x => x.status.code === 1 || x.status.code === 2).sort(compareByDateDESC);
  let inactiveOrders = orderStatus.filter(x => x.status.code === 3 || x.status.code === 4).sort(compareByDateDESC);
  return (
    <div>
      <OrderStatusCard isActive={true} orders={activeOrders} title="進行中" />
      <OrderStatusCard isActive={false} orders={inactiveOrders} title="已完成" />
    </div>
  );
}

export default App;
