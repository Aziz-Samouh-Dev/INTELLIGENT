
// import style css
import '../styles/home.css'

//import Pages
import Helmet from '../components/Helmet/Helmet'
import Services from '../services/Services'
import ProductList from '../components/ProductUi/ProductList'
import products from '../assets/data/products'


// import tools
import React , { useState , useEffect } from 'react'
import  { Container , Row , Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'


// import image hero
import heroImg from '../assets/images/hero-img.png'


const Home = () => {

  const year = new Date().getFullYear() ;

  const [trendingProducts , setTrendingProducts] = useState([])

  useEffect(()=>{
    const filteredTrendingProducts = products.filter( 
      (item) => item.category === "website" 
    );

    setTrendingProducts(filteredTrendingProducts) 
  } , [] ) ;


  return (
    <Helmet title={"Home"}>

      <section className="hero_section">
        <section  className='p-0 m-0 container-' >
          <Row  className='p-0 m-0'>
            <Col lg="6" md='8' >
              <div className="hero_content">
                <p className="hero_subtitle">Trending Services in {year} </p>
                <h2>Find the independent services you need for your business.</h2>
                <p>To know more information about intelligent</p>
                <motion.button whileTap={{ scale : 1.1}} className='buy_btn'><Link to='/services' >SHOP NOW</Link></motion.button>
              </div>
            </Col>

            <Col className='p-0 m-0'>
              <div className="hero_img p-0 m-0 " >
                <img src={heroImg} alt="" />
              </div>
            </Col>

          </Row>
        </section>
      </section>

      <Services />

      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className='text-center pb-5 '>
              <h2 className='section_title fs-1'>Trending Services</h2>
            </Col>
            <ProductList data={trendingProducts} />
          </Row>
        </Container>
      </section>

    </Helmet> 
  )
}

export default Home