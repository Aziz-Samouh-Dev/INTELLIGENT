import './footer.css'


import { Container , Row , Col , ListGroup , ListGroupItem } from 'reactstrap'
import { Link } from 'react-router-dom'

const Footer = () => {

  const year = new Date().getFullYear() ;


  return (
    <footer className="footer">
      <Container>
        <Row>

          <Col lg='4' className='p'>
            <div  className="logo">
              <div>
                <h1>INTELLIGENT</h1>
              </div>
            </div>
            <p className="footer_text mt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, incidunt.
            </p>
          </Col>
          <Col lg='3' className='p'>
            <div className="footer_links">
              <h4 className="footer_links_title"> Categories</h4>
              <ListGroup>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Logo</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Graphic Design</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Website</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='#'>Business Card Design</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>
          <Col lg='2' className='p'>
            <div className="footer_links">
              <h4 className="footer_links_title">Useful Links</h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/home'>Home</Link>
                </ListGroupItem>
                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/services'>Services</Link>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0'>
                  <Link to='/login'>Login</Link>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>
          <Col lg='3' className='p'>
            <div className="footer_links">
              <h4 className="footer_links_title">Contact</h4>
              <ListGroup>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center p-0'>
                  <span style={{
                    paddingRight: '6px' ,
                    color: '#fff'
                  }}><i class="ri-facebook-circle-fill fs-4"></i></span>
                  <a href="http://www.facebook.com">Facebook</a>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center p-0'>
                  <span style={{
                    paddingRight: '6px' ,
                    color: '#fff'
                  }}><i class="ri-facebook-circle-fill fs-4"></i></span>
                  <a href="http://www.facebook.com">Facebook</a>
                </ListGroupItem>

                <ListGroupItem className='ps-0 border-0 d-flex align-items-center p-0'>
                  <span style={{
                    paddingRight: '6px' ,
                    color: '#fff'
                  }}><i class="ri-facebook-circle-fill fs-4"></i></span>
                  <a href="http://www.facebook.com">Facebook</a>
                </ListGroupItem>

              </ListGroup>
            </div>
          </Col>

          <Col lg='12' className='footer_copyright d-flex align-items-center justify-content-center  pt-2 pb-0  '>
            <span><i class="ri-copyright-fill fs-3 p-2 " ></i></span> <p>Copyright {year} - developed by Aziz Samouh</p> 
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer