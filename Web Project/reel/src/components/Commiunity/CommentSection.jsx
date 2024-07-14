import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
import axios from "axios";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([
    // Example comments, you can fetch these from your backend
    { id: 1, text: "This is a great post!" },
    { id: 2, text: "Thanks for sharing!" }
  ]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const response = await axios.get(`/comments/${postId}`);
        setComments(response.data);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [postId]);


  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };


  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/comments', {
        text: newComment,
        author: "currentUserId", // Replace with actual user ID from auth
        postId
      });
      setComments([...comments, response.data]);
      setNewComment("");
    } catch (error) {
      console.error("Error posting comment:", error);
    }
  };

  

  return (
    <div>
      <ListGroup className="mb-3">
        {comments.map(comment => (
          <ListGroup.Item key={comment._id}>
          <Image src={comment.author.profilePicture} roundedCircle className="me-2 avatar-sm" />
          <strong>{comment.author.username}</strong>: {comment.text}
        </ListGroup.Item>
          
        ))}
      </ListGroup>
      <Form onSubmit={handleCommentSubmit}>
        <Form.Group controlId="commentInput">
          <Form.Control
            type="text"
            placeholder="Write a comment..."
            value={newComment}
            onChange={handleCommentChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mt-2">
          Post Comment
        </Button>
      </Form>
    </div>
  );
};

export default CommentSection;
