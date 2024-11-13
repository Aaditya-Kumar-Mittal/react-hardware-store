import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner"; // Import the Banner component
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList"; // Import the list of products
import { products } from "../utils/products"; // Import the available products
import { useParams } from "react-router-dom"; // To get the product ID from the URL
import ProductDetails from "../components/ProductDetails/ProductDetails"; // Product details
import ProductReviews from "../components/ProductReviews/ProductReviews"; // Product reviews
import useWindowScrollToTop from "../hooks/useWindowScrollToTop"; // Hook to scroll to the top

// Product component that displays the details of the selected product
const Product = () => {
  const { id } = useParams(); // Get the product ID from the URL parameters
  const [selectedProduct, setSelectedProduct] = useState(
    // Find the product that matches the passed ID
    products.filter((item) => parseInt(item.id) === parseInt(id))[0]
  );
  const [relatedProducts, setRelatedProducts] = useState([]); // State for related products

  // Effect that runs every time the selected product or ID changes
  useEffect(() => {
    // Scroll the window to the top when the page is opened
    window.scrollTo(0, 0);
    // Update the selected product
    setSelectedProduct(
      products.filter((item) => parseInt(item.id) === parseInt(id))[0]
    );
    // Find related products in the same category, excluding the current product
    setRelatedProducts(
      products.filter(
        (item) =>
          item.category === selectedProduct?.category &&
          item.id !== selectedProduct?.id
      )
    );
  }, [selectedProduct, id]); // Dependencies: triggers when selectedProduct or id changes

  useWindowScrollToTop(); // Custom hook to always scroll to the top

  return (
    <Fragment>
      {/* Banner with the product name */}
      <Banner title={selectedProduct?.productName} />
      {/* Product details of the selected product */}
      <ProductDetails selectedProduct={selectedProduct} />
      {/* Product reviews for the selected product */}
      <ProductReviews selectedProduct={selectedProduct} />
      {/* Section for related products */}
      <section className="related-products">
        <Container>
          <h3>You might also like</h3> {/* Section title */}
        </Container>
        {/* List of related products */}
        <ShopList productItems={relatedProducts} />
      </section>
    </Fragment>
  );
};

export default Product;
