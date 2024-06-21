import React , {useEffect,useState, useCallback} from 'react';
import Button from 'react-bootstrap/Button';
import {Container, Row, Col, Form } from 'react-bootstrap';
import { ListGroup } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Bio = ({ user }) => { 
    console.log('User in Bio:', user);

    const [bioData, setBioData] = useState({
        profession: [],
        city: '',
        education: [],
        experience: [],
        awards: []
    });

    const [show, setShow] = useState(false);
    //const [user, setUser] = useState(null);
    const { register, handleSubmit, reset } = useForm();

    const handleClose = () => setShow(false);
    const handleShow = () => {
        reset(bioData);
        setShow(true);
    };

  

  const fetchBioData = useCallback(async () => {
    if (!user ) 
        return;
    try {
        const response = await axios.get(`http://localhost:5000/getBio${user.id}`, {
            headers: { 'Authorization': `Bearer ${user.token}` } // Assuming user object contains token
        });
        setBioData(response.data);
    } catch (error) {
        console.error('Error fetching bio data:', error);
    }
}, [user]);

useEffect(() => {
    fetchBioData();
}, [fetchBioData]);

const onSubmit = async (data) => {
    if  (!user) {
        console.error('User is not defined');
        return;
      }

      console.log('Submitting bio data for userId:', user.id);

    // Ensure data is sent as arrays
    const formattedData = {
        ...data,
        userId: user.id,
        profession: data.profession.split(',').map(item => item.trim()),
        education: data.education.split(',').map(item => item.trim()),
        experience: data.experience.split(',').map(item => item.trim()),
        awards: data.awards.split(',').map(item => item.trim())
    };

    try {
        const response = await axios.post('http://localhost:5000/editBio', formattedData, {
            headers: { 'Authorization': `Bearer ${user.token}` } // Assuming user object contains token
        });
        setBioData(response.data);
        handleClose();
    } catch (error) {
        console.error('Error saving bio data:', error);
    }
};

console.log('User in Bio:', user);


  return (
    <div>
      <h2>Bio</h2>
      <p>This is the Bio section.</p>
      

      <Container>
      <Button variant="outline-danger" onClick={handleShow}> Edit Bio</Button>
      
                <Row>
                    <Col>
                        <Row className="align-items-center mb-2">
                            <Col xs={3}><h4>Profession</h4></Col>
                            <Col>
                                <ListGroup>
                                {bioData.profession.map((profession, index) => (
                                            <ListGroup.Item key={index}>{profession}</ListGroup.Item>
                                        ))}
                                </ListGroup>
                            </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                            <Col xs={3}><h4>City</h4></Col>
                            <Col>
                            <p>{bioData.city}</p>
                            </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                            <Col xs={3}><h4>Education</h4></Col>
                            <Col>
                            {bioData.education.map((edu, index) => (
                                        <p key={index}>{edu}</p>
                                    ))}
                            </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                            <Col xs={3}><h4>Experience</h4></Col>
                            <Col>
                            {bioData.experience.map((exp, index) => (
                                        <p key={index}>{exp}</p>
                                    ))}
                            </Col>
                        </Row>
                        <Row className="align-items-center mb-2">
                            <Col xs={3}><h4>Awards</h4></Col>
                            <Col>
                            {bioData.awards.map((award, index) => (
                                        <p key={index}>{award}</p>
                                    ))}
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
    
            <Container>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Bio</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formProfession">
                            <Form.Label>Profession</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("profession")}
                                defaultValue={bioData.profession.join(', ')}
                                placeholder="Enter professions separated by commas"
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formCity">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("city")}
                                defaultValue={bioData.city}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formEducation">
                            <Form.Label>Education</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("education")}
                                defaultValue={bioData.education.join(', ')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formExperience">
                            <Form.Label>Experience</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("experience")}
                                defaultValue={bioData.experience.join(', ')}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formAwards">
                            <Form.Label>Awards</Form.Label>
                            <Form.Control
                                type="text"
                                {...register("awards")}
                                defaultValue={bioData.awards.join(', ')}
                            />
                        </Form.Group>
                        <Button variant="primary" type="submit">Save Changes</Button>
                    </Form>
                </Modal.Body>
            </Modal>
            </Container>
           
    </div>
  );
};

export default Bio;
