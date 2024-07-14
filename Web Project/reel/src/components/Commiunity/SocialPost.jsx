import React, {useState} from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
//import Row from 'react-bootstrap/Row';
//import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import CommentSection from './CommentSection';

const SocialPost = ({img,title,description, username}) => {

  const [showComments, setShowComments] = useState(false);

  const toggleComments = () => {
    setShowComments(!showComments);
  };

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
          
          <Button variant="light" onClick={toggleComments}>
            <i class="bi bi-chat"></i> Comment
          </Button>
          {showComments && <CommentSection />}
        </Card.Body>
      </Card>
    </>
  );
}

export default SocialPost;
