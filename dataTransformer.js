function dataTransformer(userIds, userOrders, userData, orderData) {
  const result = userIds.map(id => {
    const { orderIds } = userOrders.find(data => data.userId === id);

    return {
      user: {
        id,
        name: userData[id],
      },
      orders:
        orderIds.length === 0
          ? []
          : orderIds.map(orderId => ({
              id: orderId,
              name: orderData[orderId].name,
              price: orderData[orderId].price,
            })),
    };
  });

  return result;
}

// 輸入資料:
// const userIds = ['U01', 'U02', 'U03'];
// const orderIds = ['T01', 'T02', 'T03', 'T04'];
// const userOrders = [
//   { userId: 'U01', orderIds: ['T01', 'T02'] },
//   { userId: 'U02', orderIds: [] },
//   { userId: 'U03', orderIds: ['T03'] },
// ];
// const userData = { U01: 'Tom', U02: 'Sam', U03: 'John' };
// const orderData = {
//   T01: { name: 'A', price: 499 },
//   T02: { name: 'B', price: 599 },
//   T03: { name: 'C', price: 699 },
//   T04: { name: 'D', price: 799 },
// };

// const result = dataTransformer(userIds, userOrders, userData, orderData);
// console.log(result);

// 輸出結果:
// const result = [
//   {
//     user: { id: 'U01', name: 'Tom' },
//     orders: [
//       { id: 'T01', name: 'A', price: 499 },
//       { id: 'T02', name: 'B', price: 599 },
//     ],
//   },
// ];
