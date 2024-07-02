import React, {useState, useEffect, useCallback} from 'react'
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
import axios from 'axios';



  const Profile = ({ user }) => {
    console.log('User in Profile component:', user);
  const [userData, setUserData] = useState(null);
  const [activeTab, setActiveTab] = useState('bio');

  const fetchUserData = useCallback(async () => {
    if (!user || !user.token ) 
      return;

    try {
      const response = await axios.get(`http://localhost:5000/getUser/${user.id}`, {
        headers: { 'Authorization': `Bearer ${user.token}` }
      });

      setUserData(response.data); // Assuming response.data contains user data
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  }, [user]);

  // Fetch user data on component mount
  useEffect(() => {
    fetchUserData();
  }, [fetchUserData]);

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

  if (!userData) {
    return <p>Loading...</p>;
  }
  
   
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
          <h2>{`${userData.firstname} ${userData.secondname}`}</h2>
        </Row>
        <Row className="d-flex justify-content-center text-center">
          <h4>Actor/Script Writer </h4>
          {console.log('User in Profile component:', user)}
        </Row>
        
        <Container className='text-center' style={{margin:'10px'}}>
        <Row>
        <Col  className="d-flex justify-content-end">
          <Link to="/editProfile" state={{ user }}>
          <Button variant="danger">Create a Post</Button>
          </Link></Col>
        <Col className="d-flex justify-content-start">
          <Link to='/postJob'>
          <Button variant="danger" >Post a Job</Button>
          </Link></Col>
        </Row>
        </Container>

        <Card>
      <Card.Header className=" d-flex align-items-center">
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

          <Nav.Item className="ml-auto">
                <Link to="/editProfile" state={{user: userData }} className="ml-auto">
                  <Button variant="secondary justify-content-end align-items-right" style={{ marginLeft: '10px' }}>Edit Profile</Button>
                </Link>
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
