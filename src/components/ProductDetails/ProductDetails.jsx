import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { addToCart } from "../../app/features/cart/cartSlice";
import "./product-details.css";

const ProductDetails = ({ selectedProduct }) => {
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);  // Prevent zero or negative values
    setQuantity(value);
  };

  const handleAdd = (selectedProduct, quantity) => {
    if (!selectedProduct) {
      toast.error("Product details are missing.");
      return;
    }

    dispatch(addToCart({ product: selectedProduct, num: quantity }));
    toast.success("Product has been added to cart!");
  };

  return (
    <section className="product-page">
      <Container>
        <Row className="justify-content-center">
          <Col md={6}>
            <img
              loading="lazy"
              src={selectedProduct?.imgUrl}
              alt={selectedProduct?.productName}
              className="product-image"
            />
          </Col>
          <Col md={6}>
            <h2>{selectedProduct?.productName}</h2>
            <div className="rate">
              <div className="stars">
                {/* Add rating stars dynamically based on selectedProduct.avgRating */}
                {Array.from({ length: 5 }, (_, index) => (
                  <i
                    key={index}
                    className={`fa fa-star ${index < Math.round(selectedProduct?.avgRating) ? "filled" : ""}`}
                  ></i>
                ))}
              </div>
              <span>{selectedProduct?.avgRating} ratings</span>
            </div>
            <div className="info">
              <span className="price">${selectedProduct?.price.toFixed(2)}</span>
            </div>
            <p>{selectedProduct?.shortDesc}</p>
            <input
              className="qty-input"
              type="number"
              placeholder="Qty"
              value={quantity}
              min="1"
              onChange={handleQuantityChange}
            />
            <button
              aria-label="Add to cart"
              type="button"
              className="add"
              onClick={() => handleAdd(selectedProduct, quantity)}
            >
              Add To Cart
            </button>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ProductDetails;
