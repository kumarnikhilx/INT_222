import EventEmitter from 'events';

class OrderSystem extends EventEmitter {}

const orderSystem = new OrderSystem();

// 1. Payment listener
orderSystem.on('orderPlaced', (order) => {
  console.log(`💳 Processing payment for order #${order.id} - Amount: ₹${order.amount}`);
});

// 2. Email notification listener
orderSystem.on('orderPlaced', (order) => {
  console.log(`📧 Sending email to ${order.email} for order #${order.id}`);
});

// 3. Inventory management listener
orderSystem.on('orderPlaced', (order) => {
  console.log(`📦 Reducing stock for item: ${order.itemName}, Quantity: ${order.quantity}`);
});

// sample order object
const order = {
  id: 101,
  itemName: 'Headphones',
  quantity: 2,
  amount: 2999,
  email: 'user@example.com',
};

// event emit
orderSystem.emit('orderPlaced', order);
