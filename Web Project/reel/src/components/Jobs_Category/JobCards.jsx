import React from 'react'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { formatDistanceToNow } from 'date-fns';

const JobCards = ({img,title,description,isPaid,createdAt}) => {


  return (
   /*<Card style={{ width: '30rem' , margin:'10px'}}>
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
    </Card>*/
<Card className="mx-auto my-3" style={{ maxWidth: '95%', margin: '0 auto'}}>
      <Row className="g-0">
        <Col xs={12} md={4}>
          <Card.Img
            variant="top"
            src={img}
            style={{ objectFit: 'cover', height: '100%', width: '100%' }}
          />
        </Col>
        <Col xs={12} md={8}>
          <Card.Body>
            {isPaid && (
              <div className="d-flex justify-content-end">
                <Button variant="success" size="sm" style={{ borderRadius: '15px' }}>
                  Paid
                </Button>
              </div>
            )}
            <Card.Title>{title}</Card.Title>
            <Card.Text>{description}</Card.Text>
            <Row className="align-items-center">
              <Col xs={6}>
                <Card.Text className="text-muted">
                  {formatDistanceToNow(new Date(createdAt))} ago
                </Card.Text>
              </Col>
              <Col xs={6} className="text-end">
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
