import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { formatDistanceToNow } from 'date-fns';

const JobCards = ({img,title,description,isPaid,createdAt}) => {


  return (
   <Card style={{ width: '30rem' , margin:'10px'}}>
    <Row>
        <Col><Card.Img variant="top" src= {img} /></Col>
        <Col>
        <Card.Body>
        {isPaid && (
            <Col className="d-flex justify-content-end">
        <Button variant="success" size="sm" style={{borderRadius:'15px'}}>
          Paid
        </Button>
        </Col>
        )}
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          {description}
        </Card.Text>
        <Row>
            <Col>
            <Card.Text>{formatDistanceToNow(new Date(createdAt))} ago</Card.Text></Col>
            <Col>
        <Button variant="danger">Contact</Button>
        </Col>
        </Row>
      </Card.Body>
      </Col>
    </Row>
    </Card>
  )
}

export default JobCards;
