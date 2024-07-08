import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';
import {Link} from 'react-router-dom';
import axios from 'axios';


export default function Filter({ onFilter }) {

  const [name, setName] = useState('');
  const [city, setCity] = useState('');
  const [profession, setProfession] = useState('');


 /* const handleFilter = async () => {
    try {
        const response = await axios.get('http://localhost:5000/userFilter', {
            params: { name, city, profession }
        });
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};*/

const handleFilter = async () => {
  const filters = {
    name,
    city: city || undefined,
    profession: profession || undefined
  };
  try {
    const response = await axios.get('http://localhost:5000/userFilter', { params: filters });
    if (response.data.status === 'success') {
      onFilter(response.data.data);
    }
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div>
      Find Artists
      <Card className="text-center">
      <Card.Header variant="dark" style={{backgroundColor:'black', color:"white"}}>Find Artist</Card.Header>
      <Card.Body>
        <Card.Text>
          Search by Name
        </Card.Text>
        <Form>
         <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
        </Form>

        <Card.Text>
          Filter By
        </Card.Text>
        <Form.Select 
        aria-label="Select a location"
        value={city}
        onChange={(e) => setCity(e.target.value)}>
      <option>Open this select menu</option>
      <option value="Western province">Western province</option>
      <option value="North province">North province</option>
      <option value="South province">South province</option>
    </Form.Select>
    <br/>
    <Form.Select 
    aria-label="Select a profession"
    value={profession}
    onChange={(e) => setProfession(e.target.value)}>
      <option>Open this select menu</option>
      <option value="Director">Director</option>
      <option value="Actor">Actor</option>
      <option value="Actress">Actress</option>
    </Form.Select>
       <Link to='/connect'>
        <Button variant="danger" style={{padding:'5px' , width:'200px', margin:'20px'}}
        onClick={handleFilter} >Filter</Button>
        </Link>
      </Card.Body>
      </Card>
    </div>
  )
}
