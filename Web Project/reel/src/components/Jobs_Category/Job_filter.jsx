import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Form from 'react-bootstrap/Form';


export default function Job_filter({onFilter}) {

  const [title, setTitle] = useState('');
  const [province, setProvince] = useState('');
  const [position, setPosition] = useState('');
  const [isPaid, setIsPaid] = useState(null);
  

 /* const handleFilter = () => {
    const filters = { title, province, position, isPaid };
    onFilter(filters);
  };*/

  const handleFilter = () => {
    const filters = { 
      title, 
      province: province || undefined,
      position: position || undefined, 
      isPaid: isPaid !== null ? isPaid.toString() : undefined, 
    };
    onFilter(filters);
  };

  return (
    <div>
      
      
      <Card className="text-center">
      <Card.Header variant="dark" style={{backgroundColor:'black', color:"white"}}>Find Jobs</Card.Header>
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
      <option value=""> select Province</option>
      <option value="Western Province">Western Province</option>
      <option value="North Province">North Province</option>
      <option value="South Province">South Province</option>
    </Form.Select>
    <br/>
    <Form.Select aria-label="Select a position" value={position} onChange={(e) => setPosition(e.target.value)}>
      <option value="">Select Proffession</option> 
      <option value="Director">Director</option>
      <option value="Actor">Actor</option>
      <option value="Actress">Actress</option>
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
