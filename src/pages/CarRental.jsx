import React, { useState, useEffect } from 'react';
import blogsData from '../data/car.json'; // Your static car data
import ReactPaginate from 'react-paginate';

import '../styles/pagination.css';

import Helmet from '../components/Helmet';
import CommonSection from '../components/CommonSection';
import { Container, Row } from 'reactstrap';
import CarCard from '../components/CarCard';

const CarRental = () => {
  // Using static data directly since you indicated not using the API
  const carData = blogsData; 

  const [pageNumber, setPageNumber] = useState(0);
  const [sortedData, setSortedData] = useState(carData);
  const carPerPage = 6;
  const visitedPage = pageNumber * carPerPage;

  // Display the correct slice of carData
  const displayPage = sortedData
    .slice(visitedPage, visitedPage + carPerPage)
    .map(item => <CarCard key={item.id} item={item} />); // Ensure each CarCard has a unique key

  const pageCount = Math.ceil(sortedData.length / carPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  // Sort cars based on selected criteria
  const handleSortChange = (e) => {
    const sortType = e.target.value;

    let sortedCars = [...carData]; // Create a copy of the car data for sorting

    if (sortType === "Low-High") {
      sortedCars.sort((a, b) => a.price - b.price);
    } else if (sortType === "High-Low") {
      sortedCars.sort((a, b) => b.price - a.price);
    }

    setSortedData(sortedCars);
    setPageNumber(0); // Reset to first page after sorting
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [sortedData]);

  return (
    <Helmet title="Car-Listing">
      <section className="pt-0">
        <CommonSection title="Car Listing" />
      </section>
      <section className="pt-0">
        <Container>
          <Row>
            <div className="d-flex align-items-center mb-5 gap-3 car__sorting">
              <span className="d-flex align-items-center gap-1">
                <i className="ri-sort-asc"></i> Sort By
              </span>
              <select onChange={handleSortChange} defaultValue="Default">
                <option value="Default">Default</option>
                <option value="Low-High">Price (Low to High)</option>
                <option value="High-Low">Price (High to Low)</option>
              </select>
            </div>

            {sortedData.length === 0 && <h6 className="text-center">No cars available.</h6>}
            {displayPage}
            <div>
              <ReactPaginate
                previousLabel={'Prev'}
                nextLabel={'Next'}
                pageCount={pageCount}
                onPageChange={changePage}
                containerClassName="paginationBttns"
                activeClassName="active" 
              />
            </div>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CarRental;
