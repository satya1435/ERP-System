const generateMockData = () => {
  const mockData = [];
  for (let i = 1; i <= 25; i++) {
    const product = {
      id: i,
      name: `Product ${i}`,
      category: `Category ${Math.floor(Math.random() * 5) + 1}`,
      price: Math.floor(Math.random() * 100) + 1,
      stock: Math.floor(Math.random() * 500) + 1,
    };
    mockData.push(product);
  }
  return mockData;
};

export const mockData = generateMockData();
