import React from "react";
import { Dialog, DialogTitle, DialogContent, IconButton } from "@mui/material";
import { Typography, Sheet } from "@mui/joy";
import { CloseOutlined } from "@mui/icons-material";

const OrderDetails = ({ order, onClose }) => {
  return (
    <Dialog open={order} onClose={onClose}>
      <DialogTitle sx={{ m: 0, p: 2 }} fontWeight={600}>
        Order Details
      </DialogTitle>
      <IconButton
        aria-label="close"
        onClick={onClose}
        sx={{
          position: "absolute",
          right: 8,
          top: 12,
          color: (theme) => theme.palette.grey[500],
        }}
      >
        <CloseOutlined />
      </IconButton>
      <DialogContent dividers>
        {order && (
          <div>
            <Typography level="title-lg" textAlign={"center"}>
              {order.productName}
            </Typography>
            <Sheet
              sx={{
                bgcolor: "background.level1",
                borderRadius: "sm",
                p: 1.5,
                mt: 1.5,
                display: "flex",
                flexDirection: "column",
                "& > div": { flex: 1 },
              }}
            >
              <Typography level="body-sm" fontWeight={600}>
                Order ID: {order.id}
              </Typography>
              <Typography level="body-sm" fontWeight={600}>
                Customer Name: {order.customerName}
              </Typography>
              <Typography level="body-sm" fontWeight={600}>
                Date: {order.orderDate}
              </Typography>
              <Typography level="body-sm" fontWeight={600}>
                Status: {order.status}
              </Typography>
              <Typography level="body-sm" fontWeight={600}>
                Delivery Date: {order.deliveryEstimationDate}
              </Typography>
            </Sheet>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetails;
