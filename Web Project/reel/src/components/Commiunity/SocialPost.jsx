import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
//import Row from 'react-bootstrap/Row';

const SocialPost = ({img,title,description, username}) => {
  return ( 
    <>
      <Card style={{ width: "38rem" , margin:"10px"}}>
        <Card.Header variant="dark">
          <Image src="fgh" roundedCircle className="me-2 avatar-sm" />
          Artist Name{" "}
          {username}
        </Card.Header>
        <ListGroup className="list-group-flush">
          <ListGroup.Item><Card.Title>{title}</Card.Title>
          <Card.Text>
            {description}
          </Card.Text></ListGroup.Item>
        </ListGroup>
        <Card.Img variant="top" src={img} />
        <Card.Body>
         <Card.Text className="size=sm">12 views</Card.Text>
          <Card.Text>
          
            <i class="bi bi-chat"></i> Comment
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default SocialPost;
