import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Helmet from '../components/Helmet';
import { useParams, Link } from 'react-router-dom';
import service01 from '../assets/img/service-details-1.jpg';
import service02 from '../assets/img/service-details-2.jpg';
import '../styles/services-details.css';
import Accordion from '../components/Accordion';
import ServiceDetailsLeft from '../components/ServiceDetailsLeft';
import servicesData from '../data/db.json'; 

const ServiceDetails = () => {
  const { id } = useParams();
  
  // Find the service by id from the static data
  const service = servicesData.find((item) => item.id === parseInt(id));

  return (
    <Helmet title="Service Details">
      <section>
        <Container>
          <Row>
            {!service ? (
              <h6 className="text-center">Service not found</h6>
            ) : (
              <>
                <Col lg="4" md="4" sm="4">
                  <ServiceDetailsLeft />
                  <div
                    className="mt-5 p-4 text-center single__service"
                    style={{ background: '#f9a826' }}
                  >
                    <h2 className="section__title text-light fs-3">
                      50% Off only for new members
                    </h2>
                    <p className="section__description text-light">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Fuga veritatis necessitatibus totam repellat, amet saepe?
                    </p>

                    <button className="btn mt-4">
                      <Link to="/car-listing">Reserve Now</Link>
                    </button>
                  </div>
                </Col>

                <Col lg="8" md="8" sm="8" className="single__service__right">
                  <h2 className="section__title">{service.title}</h2>
                  <p className="section__description">{service.description}</p>
                  <div className="d-flex align-items-center gap-3 mt-5 mb-5 overflow-hidden">
                    <img src={service01} alt="" className="w-50 h-50" />
                    <img src={service02} alt="" className="w-50 h-50" />
                  </div>
                  <p className="section__description mb-5">
                    {service.description}
                  </p>
                  <Accordion />
                </Col>
              </>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default ServiceDetails;
