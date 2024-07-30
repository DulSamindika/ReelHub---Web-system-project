import React,{useState} from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';


export default function CreatePost({ user }) {

    
        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [images, setImages] = useState([]);
        
         
      
        const handleFileChange = (e) => {
          setImages([...e.target.files]);
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            formData.append('userId', user.id);
            images.forEach(image => formData.append('images', image));
        
            try {
              const response = await axios.post('http://localhost:5000/create', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': `Bearer ${user.token}`
                }
              });
              alert("Post Created");
              console.log(response.data);
            } catch (error) {
              console.error("There was an error creating the post!", error);
            }
          };


  return (
    <div>
      <h2 style={{ textAlign: 'center', margin:'20px'}}>Create a Post</h2>
      <Container style={{maxWidth:'700px'}}>
      <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group  controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={title}
                onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formGridContent">
          <Form.Label>Content</Form.Label>
          <Form.Control type="text" placeholder="Add contect" value={description}
                onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>
      </Row>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" multiple  
              onChange={handleFileChange}/>
      </Form.Group>

      

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="radio" label="Public" />
      </Form.Group>

      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="radio" label="Private" />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  )
}
