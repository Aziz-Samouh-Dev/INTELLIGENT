import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import {Container , Row , Col , Form , FormGroup } from 'reactstrap'
import { Link } from 'react-router-dom'


import '../styles/login.css'
import { useState } from 'react'


const Login = () => {

  const [ email , setEmail] = useState("")
  const [ password , setPassword] = useState("")


  return (
    <Helmet  title="Login" >
      <section id='a' className='login' >
        <Container >
          <Row >
            <Col lg='6' className='m-auto text-center '>
              <h3 className='fw-bold fs-1 mb-4' >Login</h3>

              <Form className='auth_from'>
                <FormGroup className='form_group'>
                  <input type="email" placeholder='Enter your Email' value={email} 
                  onChange={e => setEmail(e.target.value)} />
                </FormGroup>
              
                <FormGroup className='form_group'>
                  <input type="password" placeholder='Enter your Password'  value={password} 
                  onChange={e => setPassword(e.target.value)} />
                </FormGroup>

                <button className="auth_btn" type='submit'>
                  Login
                </button>

                <p>
                  Don't have an account ,  {""}
                  <Link to="/signup" > Create an account </Link>
                </p>

              </Form>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Login