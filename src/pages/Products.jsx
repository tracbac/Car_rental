import React, { useState } from 'react';
import carData from '../data/car_shop.json'; 
import ReactPaginate from 'react-paginate';

import Helmet from '../components/Helmet';
import CommonSection from '../components/CommonSection';
import { Container, Row, Col, ListGroup, ListGroupItem } from 'reactstrap';
import ProductCard from '../components/ProductCard';

const PRODUCT__CATEGORY = [
  { display: 'Battery' },
  { display: 'Disk' },
  { display: 'Seat' },
  { display: 'Wheel' },
  { display: 'Shock Absorber' },
  { display: 'Oil' },
];

const Products = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const productPerPage = 9;
  const visitedPage = pageNumber * productPerPage;


  const products = carData; 
  const displayPage = products
    .slice(visitedPage, visitedPage + productPerPage)
    .map(item => <ProductCard item={item} key={item.id} />); 

  const pageCount = Math.ceil(products.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <Helmet title="Products">
      <section className="pt-0">
        <CommonSection title="Products" />
        <Container>
          <Row>
            <Col lg="3" md="3" sm="3" xs="5">
              <h6 className="category__title">Categories</h6>
              <ListGroup>
                {PRODUCT__CATEGORY.map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="border-0 section__description"
                    style={{ cursor: 'pointer' }}
                  >
                    {item.display}
                  </ListGroupItem>
                ))}
              </ListGroup>

              <h6 className="mt-4 category__title">Top Selling</h6>
              <ListGroup>
                {products.slice(0, 5).map((item, index) => (
                  <ListGroupItem
                    key={index}
                    className="border-0 section__description p-0"
                    style={{ cursor: 'pointer' }}
                  >
                    <div className="top__selling d-flex align-items-center gap-2">
                      <img src={item.imgUrl} alt={item.title} className="w-25" />
                      <div>
                        <h6 className="fs-6">{item.title}</h6>
                        <h6 className="section__subtitle fs-6 fw-bold">
                          ${item.price}
                        </h6>
                      </div>
                    </div>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </Col>

            <Col lg="9" md="9" sm="9" xs="7">
              <div className="d-flex align-items-center justify-content-between flex-wrap">
                {displayPage.length > 0 ? displayPage : <p className="text-center">No products available.</p>}
              </div>
            </Col>
            <Col>
              <div className="mt-5">
                <ReactPaginate
                  previousLabel={'Prev'}
                  nextLabel={'Next'}
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName="paginationBttns"
                  activeClassName="active"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Products;
