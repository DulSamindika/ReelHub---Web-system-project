import React,{useState} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Filter from './Filter';
import { Button, Card, CardBody } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';

const Connect = () => {

  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleFilter = (data) => {
    setFilteredUsers(data);
  };


  return (
    <div>
      
      <h2 style={{ textAlign: 'center', margin:'20px'}}>Opportunities are waiting for you</h2>

      <Container>
      <Row>
      <Col sm={3}> < Filter onFilter={handleFilter}/></Col>
      <Col sm={9}>
      <Row>
      {filteredUsers.map((user) => (
      <Card key={user._id} style={{margin:'10px'}}>
        <CardBody className="d-flex align-items-center">
        {/*<Image src="./Images/dp.jpg"  roundedCircle className="me-3" style={{ width: '50px', height: '50px' }} />*/}
        <Image src={user.user.profilePicture}  roundedCircle className="me-3" style={{ width: '50px', height: '50px' }} />
        <div className="flex-grow-1">
            <h2> {user.user.firstname} {user.user.secondname}</h2> 
            <h3>{user.profession}</h3>
        </div>
            <Button variant="danger" style={{padding:'5px' , width:'100px', margin:'20px'}}>
                Connect
            </Button>
        </CardBody>
      </Card>
      ))}
       </Row>
       </Col> 
      </Row>
      </Container>
    


    </div>
  );
};

export default Connect;