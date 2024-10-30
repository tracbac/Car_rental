import React, { useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import servicesData from '../data/db.json'; 

const ServiceDetailsLeft = () => {
 
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <ListGroup>
      {servicesData.map((item, index) => (
        <ListGroupItem key={index} className="border-0 ps-0">
          <Link
            to={`/service-details/${item.id}`}
            style={{ color: '#000d6b', fontWeight: '600', fontSize: '1rem' }}
          >
            {item.title}
          </Link>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default ServiceDetailsLeft;
