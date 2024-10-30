import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import '../styles/servicebox.css';
import { Link } from 'react-router-dom';
import servicesData from '../data/db.json'; 

const ServicesItem = () => {
  const [services, setServices] = useState([]);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsPending(true);

    setTimeout(() => {
      setServices(servicesData);
      setIsPending(false);
    }, 1000);
    
 
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isPending && <h6 className="text-center">Loading....</h6>}
      {error && <h6 className="text-center">{error}</h6>}

      {services &&
        services.map((item) => <ServiceBox item={item} key={item.id} />)}
    </>
  );
};

const ServiceBox = ({ item }) => {
  return (
    <Col lg="4" md="4" sm="6" className="mb-3">
      <div className="service__box">
        <span className="mb-3 d-inline-block">
          <i className={item.icon}></i> 
        </span>
        <h6>
          <Link to={`/service-details/${item.id}`}>{item.title}</Link>
        </h6>
        <p className="section__description">
          {item.description.length > 120
            ? `${item.description.substr(0, 120)}...` 
            : item.description}
        </p>
      </div>
    </Col>
  );
};

export default ServicesItem;
