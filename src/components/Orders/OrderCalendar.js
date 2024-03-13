import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { DialogTitle, Button, DialogActions, DialogContent, Modal, ModalDialog, List, ListItem, ModalOverflow, ModalClose, Divider, ListDivider, Typography, Box } from '@mui/joy';
import { Grid } from '@mui/material';
import { mockOrdersData as orders } from './ordersdata';

function OrderCalendar() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [showOrderList, setShowOrderList] = useState(false);
    const [filteredOrders, setFilteredOrders] = useState([]);

    const handleDateChange = (date) => {
        setSelectedDate(date);
        // Filter orders based on deliveryEstimationDate
        const filtered = orders.filter((order) => {
            const orderDeliveryDate = new Date(order.deliveryEstimationDate);
            return (
                orderDeliveryDate.getDate() === date.getDate() &&
                orderDeliveryDate.getMonth() === date.getMonth() &&
                orderDeliveryDate.getFullYear() === date.getFullYear()
            );
        });
        setFilteredOrders(filtered);
        setShowOrderList(true); // Open the dialog box when a date is selected
    };

    const handleClose = () => {
        setShowOrderList(false);
    };

    return (
        <Grid container justifyContent="center">
            <Grid item xs={12}>
                <Typography level="h2" gutterBottom textAlign={'center'} my={5} textColor={'orange'}>
                    Calendar
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'center'}}> {/* Center the calendar horizontally */}
                    <Calendar
                        onChange={handleDateChange}
                        value={selectedDate}
                    />
                </Box>
            </Grid>

            <Modal open={showOrderList} onClose={handleClose}>
                <ModalOverflow>
                    <ModalDialog>
                        <DialogTitle >Expected Deliveries on {selectedDate.toLocaleDateString()}</DialogTitle>
                        <Divider />
                        <DialogContent sx={{ maxHeight: '500px', overflowY: 'auto', margin: 'auto'}}>
                            {filteredOrders.length > 0 ? (
                                <List>
                                    {filteredOrders.map((order, index) => (
                                        <>
                                            <ListItem key={order.id} disablePadding>
                                                <div>
                                                    <p>
                                                        <span>Product:</span> {order.productName}
                                                    </p>
                                                    <p>
                                                        <span>Customer:</span> {order.customerName}
                                                    </p>
                                                    <p>
                                                        <span>Status:</span> {order.status}
                                                    </p>
                                                </div>
                                            </ListItem>
                                            {index < filteredOrders.length - 1 && <ListDivider />}
                                        </>
                                    ))}
                                </List>
                            ) : (
                                <DialogContent>
                                    <p>No orders found for this date.</p>
                                </DialogContent>
                            )}
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose}> 
                                Close
                            </Button>
                        </DialogActions>
                    </ModalDialog>
                </ModalOverflow>
            </Modal>
        </Grid>
    );
}

export default OrderCalendar;
