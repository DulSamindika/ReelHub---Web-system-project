import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';

export default function Job_filter() {
  return (
    <div>
      
      Find Jobs
      <Card className="text-center">
      <Card.Header variant="dark" style={{backgroundColor:'black', color:"white"}}>Find Artist</Card.Header>
      <Card.Body>
        <Card.Text>
          Search by Title
        </Card.Text>
        <Form>
         <Form.Control
              type="text"
              placeholder="Search"
              className=" mr-sm-2"
            />
        </Form>

        <Card.Text>
          Filter By
        </Card.Text>
        <Form.Select aria-label="Select a location">
      <option>Open this select menu</option>
      <option value="1">Western province</option>
      <option value="2">North province</option>
      <option value="3">South province</option>
    </Form.Select>
    <br/>
    <Form.Select aria-label="Select a position">
      <option>Open this select menu</option>
      <option value="1">Director</option>
      <option value="2">Actor</option>
      <option value="3">Actress</option>
    </Form.Select>

    <Form>
      {['checkbox'].map((type) => (
        <div key={`inline-${type}`} className="mb-3">
          <Form.Check
            inline
            label="Paid"
            name="group1"
            type={type}
            id={`inline-${type}-1`}
          />
          <Form.Check
            inline
            label="Unpaid"
            name="group2"
            type={type}
            id={`inline-${type}-2`}
          />
        </div>
      ))}
    </Form>
        <Button variant="danger" style={{padding:'5px' , width:'200px', margin:'20px'}}>Filter</Button>
      </Card.Body>
      </Card>
    
    </div>
  )
}
