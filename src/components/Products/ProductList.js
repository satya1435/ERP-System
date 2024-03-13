import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  Box,
  Sheet,
  AspectRatio
} from "@mui/joy";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import DeleteOutlinedIcon from "@mui/icons-material/DeleteOutlined";

const ProductList = ({ products, handleEdit, handleDelete }) => {
  return (
    <Grid container spacing={2} my={3}>
      {products?.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={product.id}>
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
              <Typography level="title-lg" textAlign={"center"} gutterBottom>
                {product.name}
              </Typography>
              <AspectRatio sx={{ minWidth: 200 }}>
                <img
                  src="https://images.unsplash.com/photo-1616663308968-58162d332720?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  srcSet="https://images.unsplash.com/photo-1616663308968-58162d332720?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
              <Sheet
                sx={{
                  bgcolor: "background.level1",
                  borderRadius: "sm",
                  p: 1.5,
                  my: 1.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  "& > div": { flex: 1 },
                }}
              >
                <Typography level="body-md">
                  Category: {product.category}
                </Typography>
                <Typography level="body-md">
                  Stock Quantity: {product.stock}
                </Typography>
                <Typography level="body-md" fontWeight={600}>
                  {" "}
                  Price: ${product.price}
                </Typography>
              </Sheet>
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
                startDecorator={<EditOutlinedIcon fontSize="small" />}
                onClick={() => handleEdit(product)}
              >
                Edit
              </Button>
              <Button
                variant="soft"
                startDecorator={<DeleteOutlinedIcon fontSize="small" />}
                color="danger"
                onClick={() => handleDelete(product.id)}
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

export default ProductList;
