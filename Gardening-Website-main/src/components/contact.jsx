import React from 'react';
import '../styles/regisucess.css'
import logo from '../assets/monstera.jpg'
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ContactUsPage = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div style={{ background: 'rgba(100, 65, 48,0.6)', color: 'white', paddingTop: '50px', paddingBottom: '50px' }}>
      <Container>
        <h2 style={{ marginBottom: '30px' }}><center>Contact Us</center></h2>
        <Row>
          <Col md={6}>
            
            
            <img  src={logo} style={{
                width:'300px',
                height:'300px',
                marginLeft:'600px'
            }}/><br/><br/>
          </Col>
          <div style={{
            width:'400px',
            marginLeft:'550px'
          }}>
          <Col md={4}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="   your name" required />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="   email" required />
              </Form.Group>

              <Form.Group controlId="formSubject">
                <Form.Label>Subject</Form.Label>
                <Form.Control type="text" placeholder="   subject" required />
              </Form.Group>

              <Form.Group controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="   your message" required />
              </Form.Group>

             <Link to='/'> <Button variant="primary" type="submit" className='glow-on-hover'>
                Submit
              </Button></Link> 
            </Form>
          </Col>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUsPage;
