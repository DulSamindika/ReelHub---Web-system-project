import React, {useState, useEffect} from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
//import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import './ProfilePreview.css';
import { useLocation } from 'react-router-dom';


const EditProfile = () => {

    const location = useLocation();
    const { user } = location.state; 
    
    const [firstname, setFirstName] = useState("");
    const [secondname, setSecondName] = useState("");
    const [email, setEmail] = useState("");
    const [image, setImage] = useState([]);
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
        
    useEffect(() => {
      // You can fetch user data if needed using the user object
      console.log('User in EditProfile:', user);
    }, [user]);


   /* useEffect(() => {
      if (!user) {
        console.error('User is null, redirecting to login');
        navigate('/login'); // Redirect to login if user is not defined
        return;
      }
      console.log('User in EditProfile:', user);
      // Initialize form fields with user data if available
      setFirstName(user.firstname || "");
      setSecondName(user.secondname || "");
      setEmail(user.email || "");
    }, [user, navigate]);*/
  
      
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          setImage(file);
          setImagePreviewUrl(URL.createObjectURL(file));
        } else {
            console.log("No file selected or file selection was invalid."); // Debugging log
            setImage(null);
            setImagePreviewUrl(null);
          }
      };

        const handleSubmit = async (e) => {
            e.preventDefault();
            const formData = new FormData();
            formData.append('userId', user.id);
            formData.append('firstname', setFirstName);
            formData.append('secondname', setSecondName);
            formData.append('email', setEmail);
            if (image) {
                formData.append('image', image);
              }
        
            try {
              const response = await axios.post('http://localhost:5000/editProfile', formData, {
                headers: {
                  'Content-Type': 'multipart/form-data',
                  'Authorization': `Bearer ${user.token}`
                }
              });
              console.log(response.data);
            } catch (error) {
              console.error("There was an error creating the post!", error);
          
            }
          };


  return (
    <div>
      <h2 style={{ textAlign: 'center', margin:'20px'}}>Edit Your Profile </h2>
      <Container style={{maxWidth:'700px'}}>
      <Form onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group  controlId="formGridTitle">
          <Form.Label>First Name</Form.Label>
          <Form.Control type="text" placeholder="Edit first name" value={firstname}
                onChange={(e) => setFirstName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formGridContent">
          <Form.Label>Second Name</Form.Label>
          <Form.Control type="text" placeholder="Edit second name" value={secondname}
                onChange={(e) => setSecondName(e.target.value)} />
        </Form.Group>

        <Form.Group controlId="formGridContent">
          <Form.Label>Email</Form.Label>
          <Form.Control type="text" placeholder="Edit email" value={email}
                onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
      </Row>

      

      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Upload Profile Image</Form.Label>
        <Form.Control type="file"  
              onChange={handleFileChange}/>
      </Form.Group>

      {imagePreviewUrl && ( 
      <div className="image-preview-container">
      <div className="image-preview-mask">
        <img src={{imagePreviewUrl}} alt="Profile Preview" className="image-preview" />
      </div>
     </div> )}

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </Container>
    </div>
  )
}

export default EditProfile;
