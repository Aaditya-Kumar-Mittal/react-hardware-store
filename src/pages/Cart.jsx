import { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";
// Importing FontAwesomeIcon and required icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

// Cart component that displays the items in the cart
const Cart = () => {
  // Retrieve the cart list from Redux store
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  // Calculate the total price of the items in the cart
  const totalPrice = cartList.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );

  // Scroll to top when the component is mounted
  useEffect(() => {
    window.scrollTo(0, 0);
    // Code commented to restore cart from localStorage if needed
    // if(CartItem.length === 0) {
    //   const storedCart = localStorage.getItem("cartItem");
    //   setCartItem(JSON.parse(storedCart));
    // }
  }, []);

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {/* Message if the cart is empty */}
            {cartList.length === 0 && (
              <h1 className="no-items product">No Items are added to Cart</h1>
            )}
            {/* Mapping through the items in the cart */}
            {cartList.map((item) => {
              const productQty = item.price * item.qty;
              return (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      {/* Product image */}
                      <img src={item.imgUrl} alt="" />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.productName}</h3>
                          <h4>
                            ₹{item.price}.00 * {item.qty}
                            <span>₹{productQty}.00</span>{" "}
                            {/* Price for the quantity */}
                          </h4>
                        </Col>
                        <Col xs={12} sm={3} className="cartControl">
                          {/* Button to increase quantity */}
                          <button
                            className="incCart"
                            onClick={() =>
                              dispatch(addToCart({ product: item, num: 1 }))
                            }
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                          {/* Button to decrease quantity */}
                          <button
                            className="desCart"
                            onClick={() => dispatch(decreaseQty(item))}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                        </Col>
                      </Row>
                    </Col>
                    {/* Button to remove the product from the cart */}
                    <button
                      className="delete"
                      onClick={() => dispatch(deleteProduct(item))}
                    >
                      <ion-icon name="close"></ion-icon>
                    </button>
                  </Row>
                </div>
              );
            })}
          </Col>
          <Col md={4}>
            {/* Cart summary section */}
            <div className="cart-total">
              <h2>Cart Summary</h2>
              <div className="d_flex">
                <h4>Total Price :</h4>
                <h3>₹{totalPrice}.00</h3> {/* Display the total price */}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Cart;
