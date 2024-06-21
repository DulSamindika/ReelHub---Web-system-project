import React, {useState} from 'react'
import Image from 'react-bootstrap/Image';
import { Container, Row, Col } from 'react-bootstrap';
import './Profile.css';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import Bio from './Bio'
import Activity from './Activity';
import Portfolio from './Portfolio';



  const Profile = ({ user }) => {
  console.log('User in Bio:', user);
  const [activeTab, setActiveTab] = useState('bio');

  const renderContent = () => {
    switch (activeTab) {
      case 'bio':
        return < Bio user={user}/>;
      case 'portfolio':
        return <Portfolio />;
      case 'activity':
        return <Activity />;
      default:
        return <Bio user={user}/>;
    }
  };
   
  return (
    <div className="profile-page">
    
      <div className="cover-photo">
      </div>
      
      <Container className="profile-container">
        <Row>
          <Col className="d-flex justify-content-center">
            {/* Profile Picture */}
            <div className="profile-picture">
              <Image src="./Images/dp.jpg" roundedCircle style={{height:'200px', width:'200px', alignContent:"center"}}/>
            </div>
          </Col>
          
        </Row>
        {/* Additional profile info can be added here */}
        <Row className="d-flex justify-content-center text-center">
          <h2>Janaka Bandara</h2>
        </Row>
        <Row className="d-flex justify-content-center text-center">
          <h4>Actor/Script Writer </h4>
        </Row>
        
        <Container className='text-center' style={{margin:'10px'}}>
        <Row>
        <Col  className="d-flex justify-content-end">
          <Link to='/createPost'>
          <Button variant="danger">Create a Post</Button>
          </Link></Col>
        <Col className="d-flex justify-content-start">
          <Link to='/postJob'>
          <Button variant="danger" >Post a Job</Button>
          </Link></Col>
        </Row>
        </Container>

        <Card>
      <Card.Header>
        <Nav variant="tabs" defaultActiveKey="#first">
          <Nav.Item>
            <Nav.Link active={activeTab === 'bio'} 
                onClick={() => setActiveTab('bio')}> Bio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={activeTab === 'portfolio'} 
                onClick={() => setActiveTab('portfolio')}>Portfolio</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link active={activeTab === 'activity'} 
                onClick={() => setActiveTab('activity')}>
              Activity
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
          {renderContent()}
        </Card.Text>
        
      </Card.Body>
    </Card>
        
      </Container>
    </div>
  )
}

export default Profile;
