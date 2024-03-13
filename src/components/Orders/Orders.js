import React, { useState } from "react";
import { Container, Typography, Box, Button } from "@mui/joy";
import { Link } from "react-router-dom";

import OrderList from "./OrderList";
import OrderDetails from "./OrderDetails";
import { mockOrdersData } from "./ordersdata";

const Orders = () => {
  const [orders, setOrders] = useState(mockOrdersData);
  const [selectedOrder, setSelectedOrder] = useState(null);

  const handleViewDetails = (order) => {
    setSelectedOrder(order);
  };

  const handleUpdateStatus = (orderId, newStatus) => {
    setOrders(
      orders.map((order) =>
        order.id === orderId ? { ...order, status: newStatus } : order
      )
    );
  };

  const handleDeleteOrder = (orderId) => {
    setOrders(orders.filter((order) => order.id !== orderId));
    setSelectedOrder(null); // Clear selected order if it's deleted
  };

  const handleCloseDetails = () => {
    setSelectedOrder(null);
  };

  return (
    <Container>
      <Box my={4} display="flex" justifyContent="space-between" alignItems="center">
        <Typography level="h2" gutterBottom textColor={'var(--text-color-primary)'}>
          Orders Management
        </Typography>
        {/* Add button at the right top parallel to the title */}
        <Button component={Link} to="/orders/calendar"sx={{backgroundColor: 'purple'}}>
          View Orders Calendar
        </Button>
      </Box>
      <OrderList
        orders={orders}
        onViewDetails={handleViewDetails}
        onUpdateStatus={handleUpdateStatus}
        onDeleteOrder={handleDeleteOrder}
      />
      <OrderDetails order={selectedOrder} onClose={handleCloseDetails} />
    </Container>
  );
};

export default Orders;
