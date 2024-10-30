import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import carData from '../data/car.json'; 
import '../styles/product-details.css';
import ProductCard from '../components/ProductCard';
import Helmet from '../components/Helmet';
import { Container, Row, Col } from 'reactstrap';
import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cartSlice';

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();


  const product = carData.find(item => item.id === parseInt(id));


  const relatedProducts = carData.filter(item => item.id !== parseInt(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  const addToCart = () => {
    if (product) {
      dispatch(
        cartActions.addItem({
          id: product.id, 
          title: product.title,
          price: product.price,
          imgUrl: product.imgUrl,
        })
      );
    }
  };

  return (
    <Helmet title="Product Details">
      <section className="pt-0">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="6">
              {!product && <h6 className="text-center">Product not found</h6>}
              {product && (
                <img src={product.imgUrl} alt={product.title} className="w-100" />
              )}
            </Col>
            <Col lg="6" md="6" sm="6">
              <div className="product__details mt-5">
                {product ? (
                  <>
                    <h4>{product.title}</h4>
                    <p className="section__description">{product.description}</p>
                    <h4 className="section__subtitle d-flex gap-2">
                      <span className="fs-6">Price:</span>${Number(product.price)}
                    </h4>
                    <button className="btn px-4 mt-5" onClick={addToCart}>
                      Add to Cart
                    </button>
                  </>
                ) : (
                  <p className="section__description">No product details available.</p>
                )}
              </div>
            </Col>
            <Col lg="12" className="text-center related__products mt-5">
              <h2 className="section__title">Related Products</h2>
            </Col>
            {relatedProducts.slice(0, 4).map((item, index) => (
              <Col lg="3" md="4" sm="6" xs="6" key={index}>
                <ProductCard item={item} />
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ProductDetails;
