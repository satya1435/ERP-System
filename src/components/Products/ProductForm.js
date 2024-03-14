import React, { useState, useEffect } from "react";
import {
    FormControl,
    FormLabel,
    FormHelperText,
    Input,
    Button,
    Modal,
    ModalOverflow,
    ModalDialog,
    ModalClose,
    DialogTitle,
    DialogContent,
    DialogActions,
} from "@mui/joy";

const ProductForm = ({ open, onClose, onSubmit, selectedProduct }) => {
    const [formData, setFormData] = useState({
        name: "",
        category: "",
        price: "",
        stock: "",
    });
    const [errors, setErrors] = useState({
        name: false,
        category: false,
        price: false,
        stock: false,
    });

    useEffect(() => {
        if (selectedProduct) {
            setFormData(selectedProduct);
        } else {
            setFormData({
                name: "",
                category: "",
                price: "",
                stock: "",
            });
        }
    }, [selectedProduct]);

    const handleChange = (e) => {
        if (e.target.type === "number" && parseFloat(e.target.value) < 0) {
            return; // Do not update state if value is negative
        }
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
        // Clear error for the field being edited
        setErrors({
            ...errors,
            [e.target.name]: false,
        });
    };

    const handleSubmit = () => {
        // Validate form fields
        const newErrors = {};
        if (formData.name.trim() === "") newErrors.name = true;
        if (formData.category.trim() === "") newErrors.category = true;
        if (formData.price.toString().trim() === "") newErrors.price = true;
        if (formData.stock.toString().trim() === "") newErrors.stock = true;

        // If any required field is empty, set errors and prevent form submission
        if (Object.values(newErrors).some((error) => error)) {
            setErrors(newErrors);
        } else {
            // Call onSubmit only if all required fields are filled
            onSubmit(formData);
            onClose();
            setFormData({
                name: "",
                category: "",
                price: "",
                stock: "",
            });
        }
    };

    return (
        <Modal open={open} onClose={onClose} sx={{ overflowY: "auto" }}>
            <ModalOverflow> {/* Enables scrolling for long content */}
                <ModalDialog>
                    <ModalClose />
                    <DialogTitle>
                        {selectedProduct ? "Edit Product" : "Add Product"}
                    </DialogTitle>
                    <DialogContent>
                        <FormControl
                            required
                            size="sm"
                            color="primary">
                            <FormLabel>
                                Name
                            </FormLabel>
                            <Input
                                placeholder="Name"
                                name="name"
                                autoFocus
                                error={errors.name}
                                value={formData.name}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined" />
                            <FormHelperText>
                                {errors.name && "Please enter a name"}
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            required
                            size="sm"
                            color="primary">
                            <FormLabel>
                                Category
                            </FormLabel>
                            <Input
                                placeholder="Category"
                                name="category"
                                error={errors.category}
                                value={formData.category}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined" />
                            <FormHelperText>
                                {errors.category && "Please enter a category"}
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            required
                            size="sm"
                            color="primary">
                            <FormLabel>
                                Price
                            </FormLabel>
                            <Input
                                placeholder="Price"
                                name="price"
                                type="number"
                                error={errors.price}
                                value={formData.price}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined" />
                            <FormHelperText>
                                {errors.price && "Please enter a valid price"}
                            </FormHelperText>
                        </FormControl>
                        <FormControl
                            required
                            size="sm"
                            color="primary">
                            <FormLabel>
                                Stock Quantity
                            </FormLabel>
                            <Input
                                placeholder="Stock Quantity"
                                name="stock"
                                type="number"
                                error={errors.stock}
                                value={formData.stock}
                                onChange={handleChange}
                                fullWidth
                                variant="outlined" />
                            <FormHelperText>
                                {errors.stock && "Please enter a valid stock quantity"}
                            </FormHelperText>
                        </FormControl>
                    </DialogContent>
                    <DialogActions sx={{ justifyContent: "flex-end" }}>
                        <Button onClick={onClose}>Cancel</Button>
                        <Button onClick={handleSubmit} color="primary">
                            {selectedProduct ? "Save" : "Add"}
                        </Button>
                    </DialogActions>
                </ModalDialog>
            </ModalOverflow>
        </Modal>
    );
};

export default ProductForm;
