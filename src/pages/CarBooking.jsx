import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { useParams, useNavigate } from 'react-router-dom';

import carDataList from '../data/car.json'; 
import BookingForm from '../components/BookingForm';
import PaymentMethod from '../components/PaymentMethod';
import Helmet from '../components/Helmet';

const CarBookingView = () => {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [carData, setCarData] = useState(null);
  const [isBooked, setIsBooked] = useState(false);


  useEffect(() => {
    const selectedCar = carDataList.find(car => car.id === parseInt(id)); 
    setCarData(selectedCar);
    window.scrollTo(0, 0);
  }, [id]);

  const handleBooking = (bookingDetails) => {
   
    console.log('Booking details:', bookingDetails);
    
  
    setIsBooked(true); 
  };

  const handlePaymentSuccess = () => {
 
    console.log('Payment successful');

    navigate('/confirmation'); 
  };

  return (
    <Helmet title="Car Booking">
      <section className="car__booking">
        <Container>
          <Row>
            {!carData ? (
              <h6 className="text-center">Car not found</h6>
            ) : (
              <>
                <Col lg="6">
                  <img src={carData.imgUrl} alt={carData.title} className="w-100" />
                </Col>
                <Col lg="6">
                  <div className="booking__car__info">
                    <h2>{carData.title}</h2>
                    <div className="d-flex gap-5 align-items-center mb-4 mt-3">
                      <h6 className="rent__price">${carData.price}.00/ Day</h6>
                      <span className="d-flex align-items-center gap-2">
                        <span style={{ color: '#f9a826' }}>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-fill"></i>
                          <i className="ri-star-half-line"></i>
                        </span>
                        ({carData.rating} ratings)
                      </span>
                    </div>
                    <p className="section__description">{carData.description}</p>

                    <div className="car__item-info d-flex align-items-center mt-3" style={{ columnGap: '4rem' }}>
                      <span className="d-flex align-items-center gap-1 section__description">
                        <i className="ri-car-line"></i> {carData.model}
                      </span>
                      <span className="d-flex align-items-center gap-1 section__description">
                        <i className="ri-settings-2-line"></i> {carData.automatic}
                      </span>
                      <span className="d-flex align-items-center gap-1 section__description">
                        <i className="ri-timer-flash-line"></i> {carData.speed}
                      </span>
                    </div>

                    <div className="car__item-info d-flex align-items-center mt-3" style={{ columnGap: '2.8rem' }}>
                      <span className="d-flex align-items-center gap-1 section__description">
                        <i className="ri-map-pin-line"></i> {carData.gps}
                      </span>
                      <span className="d-flex align-items-center gap-1 section__description">
                        <i className="ri-wheelchair-line"></i> {carData.seatType}
                      </span>
                      <span className="d-flex align-items-center gap-1 section__description">
                        <i className="ri-building-2-line"></i> {carData.brand}
                      </span>
                    </div>
                  </div>
                </Col>
              </>
            )}

            <Col lg="7" className="mt-5">
              <div className="personal__information__form mt-5">
                <h5 className="mb-4">Booking Details</h5>
                <BookingForm onBooking={handleBooking} />
              </div>
            </Col>

            <Col lg="5" className="mt-5">
              <div className="rent__payment__method mt-5">
                <h5 className="mb-4">Payment Method</h5>
                <PaymentMethod onSuccess={handlePaymentSuccess} btnText="Reserve Now" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarBookingView;
