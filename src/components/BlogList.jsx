import React, { useEffect, useState } from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../styles/blog-list.css';
import blogsData from '../data/blogs.json'; 

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    
    setTimeout(() => {
      setBlogs(blogsData);
      setIsPending(false);
    }, 1000);
  }, []);

  console.log('Blogs:', blogs); 

  return (
    <>
      {isPending && <p className="text-center">Loading...</p>}
      
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <Col lg="4" md="6" sm="6" key={blog.id} className="mb-5">
            <div className="blog__item">
              <img src={blog.imgUrl} alt={blog.title} className="w-100" />
              <div className="blog__info p-3">
                <Link to={`/blog-details/${blog.id}`}>
                  <h6>{blog.title}</h6>
                </Link>
                <p className="section__description">
                  {blog.description.length > 100
                    ? `${blog.description.slice(0, 100)}...`
                    : blog.description}
                </p>
                <Link to={`/blog-details/${blog.id}`} className="read__more">
                  Read More
                </Link>
                <div className="blog__time pt-3 mt-3 d-flex align-items-center justify-content-between">
                  <span className="author__name">
                    <i className="ri-user-line"></i> {blog.author}
                  </span>
                  <div className="d-flex align-items-center gap-3">
                    <span className="d-flex align-items-center gap-1 section__description">
                      <i className="ri-calendar-line"></i> {blog.date}
                    </span>
                    <span className="d-flex align-items-center gap-1 section__description">
                      <i className="ri-time-line"></i> {blog.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        ))
      ) : (
        <p className="text-center">No blogs available.</p>
      )}
    </>
  );
};

export default BlogList;
