import React from 'react';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';

const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <p>This is the Portfolio section.</p>
      <Link to ='/addWork'>
      <Button>
        Add your projects
      </Button>
      </Link>
    </div>
  );
};

export default Portfolio;
