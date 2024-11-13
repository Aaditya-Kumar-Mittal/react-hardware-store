import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import SearchBar from "../components/SeachBar/SearchBar";
import { Fragment, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Shop = () => {
  const [filterList, setFilterList] = useState(
    products.filter((item) => item.category === "sofa")
  );
  useWindowScrollToTop();

  return (
    <Fragment>
      <Banner title="Our Product List" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={10}>
              {/* Wrapper div for SearchBar and FilterSelect */}
              <div className="filter-search-wrapper">
                <div className="filter-select">
                  <FilterSelect setFilterList={setFilterList} />
                </div>
                <div className="search-bar">
                  <SearchBar setFilterList={setFilterList} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        {/* Added margin-top to create space between filter and product list */}
        <Container className="product-list-container" style={{ marginTop: "30px" }}>
          <ShopList productItems={filterList} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
