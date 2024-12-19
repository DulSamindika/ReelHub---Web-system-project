import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
//import { Link } from 'react-router-dom';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Home() {

  useEffect(()=>{
    AOS.init({duration: 2000});
  }, [])

  return (
    <>
   

      <div class="head-section">
        <img src="./Images/Hero.jpg" alt="Hero" class="head-image"/>
        <div class="head-overlay">
            <h1 class="head-title">Your film needs you</h1>
            <p class="head-text">Join our community and start making magic today!</p>
            <a href="/Reg" class="head-button">Join Us</a>
        </div>
       </div>
   
    <div className="bg-black" style={{paddingTop:'6vh', paddingBottom:'6vh'}}>
  <div className="container bg-black rounded-5 shadow" style={{paddingTop:'6vh', paddingBottom:'6vh', paddingLeft:'5vw',paddingRight:'5vw'}}>

  <div className="row gx-5">
    <div className="col-12 col-md-6">
      <Card className="card bg-transparent mb-5 aos-item" data-aos='fade-up'>
        <div className="bg-dark shadow rounded-5 p-0">
          <img src="./Images/community.jpg" width="582" height="327" alt="directing" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
          <Card.Body className="p-5">
            <Card.Title className="fw-lighter text-light">Engaging Community</Card.Title>
            <Card.Text className="pb-4 text-secondary">Connect with fellow filmmakers, share your thoughts, and engage in discussions. Evaluate short films, offer feedback, and gain insights from industry peers to enhance your craft.</Card.Text>
            <Button variant="outline-light">
            Read more</Button>
          </Card.Body>
        </div>
      </Card>

      <Card className="card bg-transparent aos-item"  data-aos='zoom-in-up'>
        <div className="bg-dark shadow rounded-5 p-0">
          <img src="./Images/portfolio.jpg" width="582" height="442" alt="acting" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
          <Card.Body className="p-5">
            <Card.Title className="fw-lighter text-light"> Digital Portfolio</Card.Title>
            <Card.Text className="pb-4 text-secondary">Create a stunning digital portfolio to display your films, projects, and achievements. ReelHub provides a platform for you to highlight your talent and attract potential clients and collaborators.</Card.Text>
            <Button variant="outline-light">
            Read more</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
    <div className="col-12 col-md-6">
      <div className="p-5 pt-0 mt-5 fade-in" >
        <span className="h3 text-secondary fw-lighter">What we do.</span>
        <h2 className="display-4">There is a lot we do. Here is a small sneak peek</h2>
      </div>
      <Card className="card bg-transparent mb-5 mt-5" data-aos='zoom-in-up'>
        <div className="bg-dark shadow rounded-5 p-0">
          <img src="./Images/jobplace.jpg" width="582" height="390" alt="jobs" class="img-fluid rounded-5 no-bottom-radius" loading="lazy"/>
          <Card.Body className="p-5">
            <Card.Title className="fw-lighter text-light">Job Placement</Card.Title>
            <Card.Text className="pb-4 text-secondary">Discover the perfect collaborators for your next project. Our job placement service helps you find skilled professionals in the film industry, from directors to editors, ensuring your vision comes to life.
              </Card.Text>
              <Button variant="outline-light">
            Read more</Button>
          </Card.Body>
        </div>
      </Card>

      <Card className="card bg-transparent" data-aos='zoom-in-up'>
        <div className="bg-dark shadow rounded-5 p-0">
          <img src="./Images/equipment.jpg" width="582" height="327" alt="communi" class="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
          <Card.Body className="p-5">
            <Card.Title className="fw-lighter text-light">Hire Equipment</Card.Title>
            <Card.Text className="pb-4 text-secondary">Access high-quality film equipment for your productions. Our equipment rental service offers everything you need, from cameras to lighting, at competitive prices, ensuring your project is well-equipped for success.</Card.Text>
            <Button variant="outline-light">
            Read more</Button>
          </Card.Body>
        </div>
      </Card>
    </div>
  </div>

</div>

</div>


<div className="bg-dark position-relative" style={{ padding: '40px' }}>
  <div className="container px-3 py-5">
    <div className="row d-flex align-items-center">
      <div className="col-12 col-lg-7 order-1 order-lg-0 mb-4 mb-lg-0 text-center">
        <img
          className="img-fluid rounded-5 shadow"
          src="./Images/person11.jpg"
          width="352"
          height="352"
          alt="another nice person"
          loading="lazy"
          data-aos="zoom-in-up"
        />
      </div>
  
      <div className="col-12 col-lg-5 order-0 order-lg-1 text-lg-start">
        <span className="d-block mb-3" style={{ color: '#ffffff' }}>
          "Joining ReelHub has been a game-changer for my filmmaking journey, allowing me to gain
          valuable insights, showcase my work, and find the perfect collaborators for my projects. If
          you're serious about filmmaking, ReelHub is the place to be!"
        </span>
        <h2 className="name" style={{ color: '#ffffff' }}>- Ashan Mendis</h2>
      </div>
    </div>
  </div>
</div>


    </>
  )
}
