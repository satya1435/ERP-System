import React from "react";
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Menu,
  MenuItem,
  Box,
  Dropdown,
  MenuButton,
  Stack,
} from "@mui/joy";
import { RemoveRedEyeOutlined, DeleteOutline } from "@mui/icons-material";

const OrderList = ({
  orders,
  onViewDetails,
  onUpdateStatus,
  onDeleteOrder,
}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedOrderId, setSelectedOrderId] = React.useState(null);

  const handleClick = (event, orderId) => {
    setAnchorEl(event.currentTarget);
    setSelectedOrderId(orderId);
  };

  const handleClose = () => {
    setAnchorEl(null);
    setSelectedOrderId(null);
  };

  const handleUpdateStatus = (status) => {
    onUpdateStatus(selectedOrderId, status);
    handleClose();
  };

  return (
    <Grid container spacing={2} my={3}>
      {orders.map((order) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={order.id}>
          <Card
            variant="outlined"
            sx={(theme) => ({
              transition: "transform 0.3s, border 0.3s",
              "&:hover": {
                borderColor: theme.vars.palette.primary.outlinedHoverBorder,
                transform: "translateY(-2px)",
              },
            })}
          >
            <CardContent>
              <Typography level="body-md" gutterBottom>
                Customer Name: {order.customerName}
              </Typography>
              <Typography level="body-md" gutterBottom>
                Ordered On: {order.orderDate}
              </Typography>
              <Typography level="body-md" gutterBottom>
                Delivery Date: {order.deliveryEstimationDate}
              </Typography>
              <Stack direction="row" alignItems="center" spacing={2} mb={1}>
                <Typography level="body-md" gutterBottom>
                  Status: {order.status}
                </Typography>
                <Dropdown>
                  <MenuButton
                    size="sm"
                    onClick={(e) => handleClick(e, order.id)}
                  >
                    Update
                  </MenuButton>
                  <Menu
                    id="status-menu"
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl && selectedOrderId === order.id)}
                    onClose={handleClose}
                  >
                    <MenuItem onClick={() => handleUpdateStatus("Pending")}>
                      Pending
                    </MenuItem>
                    <MenuItem onClick={() => handleUpdateStatus("Shipped")}>
                      Shipped
                    </MenuItem>
                    <MenuItem onClick={() => handleUpdateStatus("Delivered")}>
                      Delivered
                    </MenuItem>
                    <MenuItem onClick={() => handleUpdateStatus("Canceled")}>
                      Canceled
                    </MenuItem>
                  </Menu>
                </Dropdown>
              </Stack>
            </CardContent>
            <Box
              sx={{
                display: "flex",
                gap: 2,
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <Button
                variant="soft"
                onClick={() => onViewDetails(order)}
                startDecorator={<RemoveRedEyeOutlined fontSize="small" />}
              >
                View
              </Button>

              <Button
                variant="soft"
                onClick={() => onDeleteOrder(order.id)}
                startDecorator={<DeleteOutline fontSize="small" />}
                color="danger"
              >
                Delete
              </Button>
            </Box>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default OrderList;
