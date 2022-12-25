

import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container , Row , Col , Form , FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'


import '../styles/login.css'
import { useState } from 'react'


const Signup = () => {

  const [ username , setUsername] = useState("") ;
  const [ email , setEmail] = useState("") ;
  const [ password , setPassword] = useState("") ;

  return (
    <Helmet  title="Signup" >
      <section id='a'>
        <Container >
          <Row >
            <Col lg='6' className='m-auto text-center '>
              <h3 className='fw-bold fs-1 mb-4' >Signup</h3>

              <Form className='auth_from'  >
                <FormGroup className='form_group'>
                  <input type="text" placeholder='Enter your Username' value={username} 
                  onChange={e => setUsername(e.target.value)} />
                </FormGroup>
              
                <FormGroup className='form_group'>
                  <input type="email" placeholder='Enter your Email' value={email} 
                  onChange={e => setEmail(e.target.value)} />
                </FormGroup>
              
                <FormGroup className='form_group'>
                  <input type="password" placeholder='Enter your Password'  value={password} 
                  onChange={e => setPassword(e.target.value)} />
                </FormGroup>

                <button className="auth_btn" type='submit'>
                  Create an Account
                </button>

                <p>
                  Already have an account ,  {""}
                  <Link to="/login" > Login</Link>
                </p>

              </Form>
            </Col>
          </Row>
        </Container>



        

      </section>
    </Helmet>
  )
}

export default Signup