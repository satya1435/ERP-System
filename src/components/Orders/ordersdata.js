const generateMockOrdersData = () => {
  const mockOrdersData = [];
  const statuses = ["Pending", "Shipped", "Delivered", "Canceled"]; // Define possible statuses
  const currentDate = new Date(); // Get current date

  for (let i = 1; i <= 25; i++) {
    // Generate a random date between today and the next 30 days for order date
    const randomOrderDate = new Date(
      currentDate.getTime() + Math.random() * 30 * 24 * 60 * 60 * 1000
    );

    const formattedOrderDate = `${randomOrderDate.getFullYear()}-${String(
      randomOrderDate.getMonth() + 1
    ).padStart(2, "0")}-${String(randomOrderDate.getDate()).padStart(2, "0")}`;

    // Generate a random delivery estimation date between 1 and 7 days from the order date
    const randomDeliveryEstimationDate = new Date(
      randomOrderDate.getTime() + Math.random() * 7 * 24 * 60 * 60 * 1000
    );
    
    const formattedDeliveryEstimationDate = `${randomDeliveryEstimationDate.getFullYear()}-${String(
      randomDeliveryEstimationDate.getMonth() + 1
    ).padStart(2, "0")}-${String(
      randomDeliveryEstimationDate.getDate()
    ).padStart(2, "0")}`;

    const order = {
      productName: `Product ${i}`,
      id: i,
      customerName: `Customer ${i}`,
      orderDate: formattedOrderDate,
      deliveryEstimationDate: formattedDeliveryEstimationDate,
      status: statuses[Math.floor(Math.random() * statuses.length)], // Randomly select a status
    };
    mockOrdersData.push(order);
  }
  return mockOrdersData;
};

export const mockOrdersData = generateMockOrdersData();
