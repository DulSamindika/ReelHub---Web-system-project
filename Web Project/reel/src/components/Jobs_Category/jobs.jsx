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

  useEffect(() => { 

  
    axios.get('http://localhost:5000/getJob')
    .then(res => {
      if(res.data.status === 'success' && res.data.data.jobs){
        const jobs = res.data.data.jobs;
        setJobs(jobs);
      }else{
        setError('Unexpected response format from server');
      }
    })
    .catch(err => {
      if(err.response && err.response.status === 403){
        setError('Access Denied');
      }else{
        setError('Error fetching from server');
      }
    });
  },[]);

  return (
    <div>
      Jobs
      <Container>
      <Row>
      <Col sm={3}>sm=4 < JobFilter/></Col>
      <Col sm={9}>sm=8 
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

