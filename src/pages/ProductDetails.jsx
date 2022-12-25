

import '../styles/product-details.css';

import { Container , Row , Col } from 'reactstrap';
import { Link } from 'react-router-dom' ;
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import products from '../assets/data/products';
import Helmet from '../components/Helmet/Helmet';
import CommonSection from '../components/ProductUi/CommonSection';

const ProductDetails = () => {

  const {id} = useParams() ;
  const product = products.find(item => item.id === id) ;

  const { imgUrl , productName , price , description , shortDesc , category } = product ;

 
  return (
    <Helmet title={productName}>
      <CommonSection title={productName} />
      <section className='a'>
        <Container>
          <Row>
            <Col lg="6" >
              <img src={imgUrl} alt="" />
            </Col>
            <Col lg="6">
              <div className="product_details">
                <h1> {productName} </h1>
                <h3> {category} </h3>
                <h2>$ {price}</h2>
                <p> {shortDesc} </p>
                <motion.button   whileTap={{scale: 1.2}} className="buy_btn" > <Link to='/login'> Buy New </Link></motion.button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='a'>
        <Container>
          <Row>
            <Col lg="10">
              <div className="tap_wrapper">
                <h2>Description :</h2>
                <p>{description}</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </Helmet>
  )
}
 
export default ProductDetails ;