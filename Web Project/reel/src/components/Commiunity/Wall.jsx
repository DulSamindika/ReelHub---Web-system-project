import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from './Filter';
import SocialPost from './SocialPost';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Awards from './Awards';

export default function Wall() {

  const [posts, setPosts] = useState([]);
  const [error, setError] = useState([]);

  useEffect(() => { 

  
    axios.get('https://web-776724771357.us-central1.run.app/getPosts')
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
        <Col md={3} className="d-none d-md-block"> <Filter/> </Col>
        
        {/*<Col xs={6}>*/}
        <Col xs={12} md={6}>
        <div style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}>
          <SocialPost/>
          {
        posts.map((post,index) => (
        <SocialPost
        key = {index}
        img = {post.img}
        title = {post.title}
        description = {post.description}
        username={post.user? post.user.username : 'Unknown'} 
        id = {post._id}
        
        
        />
      ))}
       {error && <p style={{color:'red'}}>{error}</p>}
        </div>
      </Col>
      
        <Col md={3} className="d-none d-md-block"><Awards/></Col>
      </Row>
     </Container>
    </>
  )
}
