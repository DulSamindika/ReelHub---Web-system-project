import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import JobFilter from './Job_filter';
import JobCards from './JobCards';
import { useState, useEffect } from 'react';
import axios from 'axios';
//import { formatDistanceToNow } from 'date-fns';

export default function Jobs() {

  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState([]);

 

  const fetchJobs = async (filters = {}) => {
    try {

      const validFilters = {};
      for (const key in filters) {
        if (filters[key] !== '' && filters[key] !== undefined) {
          validFilters[key] = filters[key];
        }
      }

      const queryString = new URLSearchParams(validFilters).toString();
      const response = await axios.get(`https://web-776724771357.us-central1.run.app/getJob?${queryString}`);
      
      // Update the browser URL with the current filters
      window.history.pushState(null, '', `?${queryString}`);

      if (response.data.status === 'success' && response.data.data.jobs) {
        setJobs(response.data.data.jobs);
      } else {
        setError('Unexpected response format from server');
      }
    } catch (err) {
      if (err.response && err.response.status === 403) {
        setError('Access Denied');
      } else {
        setError('Error fetching from server');
      }
    }
  };


  useEffect(() => {
    fetchJobs();
  }, []);

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin:'20px'}}>Opportunities are waiting for you</h2>

      <Container>
      <Row>
      <Col sm={3}> < JobFilter onFilter={fetchJobs}/></Col>
      <Col sm={9}>
      <Row>
      {
        jobs.map((job,index) => (
          <Col sm={6} key={index}>
        <JobCards
        img = {job.img}
        title = {job.title}
        description = {job.description}
        id = {job._id}
        isPaid={job.isPaid}
        createdAt={job.createdAt}
        />
        </Col>
      ))}
       {error && <p style={{color:'red'}}>{error}</p>}
       </Row>
       </Col> 
      </Row>
      </Container>
    </div>
  )
}

