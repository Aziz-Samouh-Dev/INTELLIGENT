import React , { useState } from 'react'

import CommonSection from '../components/ProductUi/CommonSection';
import Helmet from '../components/Helmet/Helmet'
import products from '../assets/data/products'
import ProductList from '../components/ProductUi/ProductList'

import { Container, Row , Col } from 'reactstrap';

import '../styles/Services.css'

const Services = () => {

  const [ productsData , setProductsData ] = useState(products) 

  const handleFilter = (e) => {
    const filterValue = e.target.value ;

    if (filterValue === "graphic design") {
      const filteredProducts = products.filter(
        (item) => item.category === "graphic design"
      );

      setProductsData(filteredProducts)
    }
  
    if (filterValue === "website") {
      const filteredProducts = products.filter(
        (item) => item.category === "website"
      );

      setProductsData(filteredProducts)
    }
  
    if (filterValue === "Logo") {
      const filteredProducts = products.filter(
        (item) => item.category === "Logo"
      );

      setProductsData(filteredProducts)
    }
  
    if (filterValue === "business card design") {
      const filteredProducts = products.filter(
        (item) => item.category === "business card design"
      );

    setProductsData(filteredProducts)
    }
  
  }

  const handleSearch = (e) => {
    const searchTerm = e.target.value

    const searchedProducts = products.filter(item => 
    item.productName.toLocaleLowerCase().includes(searchTerm.toLowerCase()))

    setProductsData(searchedProducts)
  }

  return (
    <Helmet title="Services">
      <CommonSection title="Services" />

      <section  id='a'>
        <Container>
          <Row className='d-flex align-items-center justify-content-center'>
            <Col lg='4' md='4' >
              <div className="filter_widget">
                <select  onChange={handleFilter} >
                  <option> Filter by Category</option>
                  <option value="graphic design">Graphic Design</option>
                  <option value="website">Website</option>
                  <option value="Logo">Logo</option>
                  <option value="business card design">business card design</option>
                </select>
              </div>
            </Col>
            <Col lg='8' md='8' >
              <div className="search_box">
                <input type="text" placeholder='Search .....' onChange={handleSearch} />
                <span><i class="ri-search-line"></i></span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section id='a' className='pt-0'>
        <Container>
          <Row>
            {
              productsData.length === 0? <h1 className='text-center fs-2'>No products are found !</h1>
              : <ProductList data={productsData} />
            }
          </Row>
        </Container>
      </section>
    </Helmet>
  )
}

export default Services ;