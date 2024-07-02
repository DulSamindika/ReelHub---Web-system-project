import React, { useEffect } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/esm/Button';
import { Link } from 'react-router-dom';
import './Home.css';
import AOS from 'aos';
import 'aos/dist/aos.css';




export default function Home() {

  useEffect(()=>{
    AOS.init({duration: 2000});
  }, [])

  return (
    <>
    <div className="hero-section">
      <Card className="bg-dark text-white" style={{ height: '500px', padding: 0, margin:0 }}>
      <Card.Img src="./Images/Hero.jpg" alt="Card image"  data-aos='zoom-in-up'/>
      <Card.ImgOverlay style={{ display: 'flex', alignItems: 'center', flexDirection: 'column'}}>
        <Card.Title style={{ fontSize: '4rem', textAlign: 'center',paddingTop:'100px' }}>Your film needs you</Card.Title>
        <Card.Text style={{ fontSize: '3rem', textAlign: 'center' }}>
          Join our community and start making magic today!
        </Card.Text>
        <Link to='/Reg'>
        <Button variant="danger">Join Us</Button></Link>
        
      </Card.ImgOverlay>
    </Card> 
    </div>

   
    <div className="bg-black" style={{paddingTop:'6vh', paddingBottom:'6vh'}}>
  <div className="container bg-black rounded-5 shadow" style={{paddingTop:'6vh', paddingBottom:'6vh', paddingLeft:'5vw',paddingRight:'5vw'}}>

  <div className="row gx-5">
    <div className="col-12 col-md-6">
      <Card className="card bg-transparent mb-5 aos-item" data-aos='zoom-in-up'>
        <div className="bg-dark shadow rounded-5 p-0">
          <img src="./Images/abstract3.jpg" width="582" height="327" alt="directing" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
          <Card.Body className="p-5">
            <Card.Title className="fw-lighter text-light">Engaging Community</Card.Title>
            <Card.Text className="pb-4 text-secondary">Connect with fellow filmmakers, share your thoughts, and engage in discussions. Evaluate short films, offer feedback, and gain insights from industry peers to enhance your craft.</Card.Text>
            <a href="home" className="link-fancy link-fancy-light">Read more</a>
          </Card.Body>
        </div>
      </Card>

      <Card className="card bg-transparent aos-item"  data-aos='zoom-in-up'>
        <div className="bg-dark shadow rounded-5 p-0">
          <img src="./Images/jobplace.jpg" width="582" height="442" alt="acting" className="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
          <Card.Body className="p-5">
            <Card.Title className="fw-lighter text-light">Job Placement</Card.Title>
            <Card.Text className="pb-4 text-secondary">Discover the perfect collaborators for your next project. Our job placement service helps you find skilled professionals in the film industry, from directors to editors, ensuring your vision comes to life.</Card.Text>
            <a href="actor" className="link-fancy link-fancy-light">Read more</a>
          </Card.Body>
        </div>
      </Card>
    </div>
    <div className="col-12 col-md-6">
      <div className="p-5 pt-0 mt-5 fade-in" >
        <span className="h5 text-secondary fw-lighter">What we don´t know</span>
        <h2 className="display-4">There is a lot we don´t know. Here is a small sneak peek</h2>
      </div>
      <Card className="card bg-transparent mb-5 mt-5" data-aos='zoom-in-up'>
        <div className="bg-dark shadow rounded-5 p-0">
          <img src="./Images/abstract17.jpg" width="582" height="390" alt="jobs" class="img-fluid rounded-5 no-bottom-radius" loading="lazy"/>
          <Card.Body className="p-5">
            <Card.Title className="fw-lighter text-light">Digital Portfolio</Card.Title>
            <Card.Text className="pb-4 text-secondary">Create a stunning digital portfolio to display your films, projects, and achievements. ReelHub provides a platform for you to highlight your talent and attract potential clients and collaborators.</Card.Text>
            <a href="jobs" class="link-fancy link-fancy-light">Read more</a>
          </Card.Body>
        </div>
      </Card>

      <Card className="card bg-transparent" data-aos='zoom-in-up'>
        <div className="bg-dark shadow rounded-5 p-0">
          <img src="./Images/equipment.jpg" width="582" height="327" alt="communi" class="img-fluid rounded-5 no-bottom-radius" loading="lazy" />
          <Card.Body className="p-5">
            <Card.Title className="fw-lighter text-light">Hire Equipment</Card.Title>
            <Card.Text className="pb-4 text-secondary">Access high-quality film equipment for your productions. Our equipment rental service offers everything you need, from cameras to lighting, at competitive prices, ensuring your project is well-equipped for success.</Card.Text>
            <a href="posts" class="link-fancy link-fancy-light">Read more</a>
          </Card.Body>
        </div>
      </Card>
    </div>
  </div>

</div>

</div>
<div className="bg-dark position-relative">
  <div className="container px-vw-5 py-vh-5">
    <div className="row d-flex align-items-center">

      <div className="col-12 col-lg-7">
        <img className="img-fluid rounded-5 mb-n5 shadow" src="./Images/person9.jpg" width="512" height="512" alt="a nice person" loading="lazy" data-aos="zoom-in-right" />
        <img className="img-fluid rounded-5 ms-5 mb-n5 shadow" src="./Images/person11.jpg" width="512" height="512" alt="another nice person" loading="lazy" data-aos="zoom-in-up" />
      </div>
      <div className="col-12 col-lg-5 bg-dark rounded-5 py-5 fade-in" >
        <span className="h5 text-secondary fw-lighter">Do you like faces?</span>
        <h2 className="display-4">We constantly adding new images to our website. Does it make sense? No!</h2>
      </div>
    </div>
  </div>
</div>



    </>
  )
}
