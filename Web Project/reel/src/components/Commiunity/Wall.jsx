import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from './Filter';
import SocialPost from './SocialPost';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Wall() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => { 

  
    axios.get('http://localhost:5000/getPosts')
    .then(res => {
      if(res.data.status === 'success' && res.data.data.posts){
        const Posts = res.data.data.posts;
        setPosts(Posts);
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
    <>
      <Container>
      <Row>
        <Col> <Filter/> </Col>
        
        <Col xs={6}>
        <div style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
          <SocialPost/>
          {
        posts.map((post,index) => (
        <SocialPost
        key = {index}
        img = {post.img}
        title = {post.title}
        description = {post.description}
        id = {post._id}
        />
      ))}
       {error && <p style={{color:'red'}}>{error}</p>}
        </div>
      </Col>
      
        <Col>3 of 3</Col>
      </Row>
     </Container>
    </>
  )
}
