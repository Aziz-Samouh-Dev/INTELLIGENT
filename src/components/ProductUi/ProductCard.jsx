
// import Style css
import '../../styles/product_card.css' ;


// import tools
import { motion } from 'framer-motion' ;
import { Col } from 'reactstrap' ;
import { Link } from 'react-router-dom' ;


const ProductCard = ({item}) => {

   

  return (
    <Col lg="4" md="4" className=' mb-5' >
        <div className="product_item p-2">
            <div className="product_img ">
                <motion.img whileHover={{scale: 0.9}} src={item.imgUrl} alt="" />
            </div>
            <div className="p-2 product_info">
                <h3 className="product_name">
                    <Link to={`/services/${item.id}`}>
                        {item.productName} 
                    </Link></h3>
                <span >{item.category}</span>
            </div>
            <div className="product_card-button d-flex align-items-center justify-content-between p-2">
                <span className="price">${item.price}</span>
            </div>
        </div>
    </Col> 
  )
} ;

export default ProductCard ;