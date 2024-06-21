import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


export default function Job_filter({onFilter}) {

  const [title, setTitle] = useState('');
  const [province, setProvince] = useState('');
  const [position, setPosition] = useState('');
  const [isPaid, setIsPaid] = useState(null);
  

  const handleFilter = () => {
    const filters = { title, province, position, isPaid };
    onFilter(filters);
  };

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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
        </Form>

        <Card.Text>
          Filter By
        </Card.Text>
        <Form.Select aria-label="Select a location" value={province} onChange={(e) => setProvince(e.target.value)}>
      <option> select Province</option>
      <option value="1">Western province</option>
      <option value="2">North province</option>
      <option value="3">South province</option>
    </Form.Select>
    <br/>
    <Form.Select aria-label="Select a position" value={position} onChange={(e) => setPosition(e.target.value)}>
      <option>Select Proffession</option>
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
            checked={isPaid === true}
            onChange={() => setIsPaid(true)}
          />
          <Form.Check
            inline
            label="Unpaid"
            name="group2"
            type={type}
            id={`inline-${type}-2`}
            checked={isPaid === false}
            onChange={() => setIsPaid(false)}
          />
        </div>
      ))}
    </Form>
        <Button variant="danger" style={{padding:'5px' , width:'200px', margin:'20px'}} onClick={handleFilter}>Filter</Button>
      </Card.Body>
      </Card>

    
    </div>
  )
}
