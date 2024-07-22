import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Awards = () => {
  return (
    <div>
      <h2>Activity</h2>
      

      <Card className="text-center">
      <Card.Header>The British Short Film Awards</Card.Header>
      <Card.Body>
        <Card.Title>As we move in to our fourth year we’ve made a few changes and updates to our categories and awards</Card.Title>
        <Card.Text>
- There is now the option to submit to all categories (if eligible)
- All winners will receive a gold statuette at the 2024 awards ceremony.
- Longlists will be announced a few weeks after submission close.
- Nominees will be selected from those longlists.
- All nominees will be invited to the awards ceremony.
        </Card.Text>
        <Button variant="primary">Apply Now</Button>
      </Card.Body>
      <Card.Footer className="text-muted">Deadline: Augest 23</Card.Footer>
    </Card>
    </div>
  );
};

export default Awards;