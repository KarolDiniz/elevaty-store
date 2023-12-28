import React, { useState, useEffect } from "react";
import { Menu } from "@ui/Menu";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Table from "@mui/material/Table";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

const Produto = () => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterValue, setFilterValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://fakerapi.it/api/v1/products?_quantity=27&_locale=en_US&_taxes=10&_categories_type=string"
        );
        const data = await response.json();
        setProducts(data.data);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setIsLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleRowClick = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleFilterChange = (event) => {
    setFilterValue(event.target.value);
  };

  const handleRemoveProduct = () => {
    setProducts((prevProducts) =>
      prevProducts.filter((product) => product.id !== selectedProduct.id)
    );
    handleCloseModal();
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} mt={-5} ml={-0.5}>
        <Menu />

        <TextField
          label="Filter by Name"
          variant="outlined"
          value={filterValue}
          onChange={handleFilterChange}
          style={{ marginBottom: "16px", marginLeft: "11.5rem", marginTop: "1rem", borderRadius: "10px", width: "16%"}}
        />
      </Grid>
      {isLoading ? (
        <div style={{ textAlign: 'center', marginTop: '10rem' }}>
          <Typography variant="h4" style={{ marginBottom: '10px' }}>Loading...</Typography>
          <CircularProgress />
        </div>
      ) : (
        <Paper style={{ background: "#ffffff", padding: "52px", borderRadius: "10px", marginTop: "1.5rem", marginLeft: "5rem", marginRight: "5rem", minWidth: "20%", minHeight: "20%" }}>
          <Grid container spacing={3}>
            {filteredProducts.map((product) => (
              <Grid key={product.id} item xs={12} sm={6} md={4} lg={4}>
                <Paper
                  style={{
                    borderRadius: "1rem",
                    marginRight: "5rem",
                    marginLeft: "5rem",
                    maxHeight: "250px",
                    maxWidth: "500px",
                    backgroundColor: "#edecf5",
                    transition: "transform 0.3s ease-in-out, background-color 0.3s, color 0.3s",
                    "&:hover": {
                      transform: "scale(1.05)",
                      backgroundColor: "#6357F1",
                      color: "#000",
                    },
                  }}
                >
                  <TableContainer>
                    <Table>
                      <TableHead>
                        <TableRow></TableRow>
                      </TableHead>
                      <TableRow onClick={() => handleRowClick(product)}>
                        <TableCell style={{ color: "#6357F1", textAlign: "left" }}>
                          <Typography variant="body2" style={{ fontWeight: "bold" }}>
                            {product.id}. {product.name}
                          </Typography>
                          <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                            <img
                              src={product.image_url || "src/assets/img/package-box_6046583.png"}
                              alt={product.name}
                              style={{ maxWidth: "100%", maxHeight: "100%" }}
                            />
                          </div>
                        </TableCell>
                      </TableRow>
                    </Table>
                  </TableContainer>
                </Paper>
              </Grid>
            ))}
          </Grid>
        </Paper>
      )}

      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <Paper style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", padding: "40px", borderRadius: "1rem" }}>
          <Typography variant="h5" style={{ textAlign: "center", marginBottom: "2rem", fontWeight: "bold" }}> Product Details</Typography>
          {selectedProduct && (
            <div style={{ padding: "16px", backgroundColor: "#edecf5"}}>
              <Typography style={{ marginBottom: "8px", fontWeight: "bold" }}>ID: {selectedProduct.id}</Typography>
              <Typography style={{ marginBottom: "8px" }}>Name: {selectedProduct.name}</Typography>
              <Typography style={{ marginBottom: "8px" }}>Taxes: {selectedProduct.taxes}</Typography>
              <Typography>Price: {selectedProduct.price}</Typography>
            </div>
          )}
          <Button variant="contained" color="primary" onClick={handleCloseModal} style={{ marginTop: "1rem", marginLeft: "15rem" }}>
            Close
          </Button>
          <Button
            variant="outlined"
            backgroundColor="#cf3d3d"
            onClick={handleRemoveProduct}
            style={{ marginTop: "1rem" }}
          >
            Remover
          </Button>
        </Paper>
      </Modal>
    </Grid>
  );
};

export default Produto;
