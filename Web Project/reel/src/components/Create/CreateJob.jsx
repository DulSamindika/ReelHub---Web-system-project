import React, {useState} from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';

const provinces = [
  'Western Province', 'Central Province', 'Eastern Province', 'North Central Province', 'Noeth Western Province', 
'Sabaragamuwa Province', 'Southern Province', 'Uva Province', 'Nothern Province'
];

export default function CreateJob() {

        const [title, setTitle] = useState("");
        const [description, setDescription] = useState("");
        const [contact, setContact] = useState("");
        const [images, setImages] = useState([]);
        const [province, setProvince] = useState("");
        const [isPaid, setIsPaid] = useState(false);
      
        const handleFileChange = (e) => {
          setImages([...e.target.files]);
        };

        const handleRadioChange = (e) => {
          setIsPaid(e.target.value === "Paid");
        };

        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('title', title);
            formData.append('description', description);
            images.forEach(image => formData.append('images', image));
            formData.append('contact', contact);
            formData.append('province', province);
            formData.append('isPaid', isPaid);
        
            try {
              const response = await axios.post('http://localhost:5000/createJob', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data'
                }
              });
              alert("Job Post Published");
              console.log(response.data);
            } catch (error) {
              console.error("There was an error creating the post!", error);
            }
          };

  return (
    <div>
      <h2 style={{ textAlign: 'center', margin:'20px'}}>Post Your Job Advertisment</h2>

      <Container style={{maxWidth:'700px'}}>
      <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group  controlId="formGridTitle">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter title" value={title}
                onChange={(e) => setTitle(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formGridContent">
          <Form.Label>Contect</Form.Label>
          <Form.Control type="text" placeholder="Add contect" value={description}
                onChange={(e) => setDescription(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" value={contact} 
          onChange={(e) => setContact(e.target.value)} />
        </Form.Group>

      </Row>

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload Image</Form.Label>
        <Form.Control type="file" multiple  
              onChange={handleFileChange}/>
      </Form.Group>

      <Form.Group controlId="formGridProvince">
              <Form.Label>Province</Form.Label>
              <Form.Control as="select" value={province} onChange={(e) => setProvince(e.target.value)}>
                <option value="">Select Province</option>
                {provinces.map((province, index) => (
                  <option key={index} value={province}>{province}</option>
                ))}
              </Form.Control>
      </Form.Group>

      <div>
      <Form.Group className="mb-3" id="formGridCheckbox">
        <Form.Check type="radio" label="Paid" name="paymentStatus" value="Paid"
              checked={isPaid === true} onChange={handleRadioChange}/>
    
        <Form.Check type="radio" label="Unpaid" name="paymentStatus" value="Unpaid"
              checked={isPaid === false} onChange={handleRadioChange} />
      </Form.Group>
      </div>

      <Button variant="danger" type="submit" style={{alignItems: 'center'}}>
        Submit
      </Button>
    </Form>
    </Container>

    </div>
  )
}
