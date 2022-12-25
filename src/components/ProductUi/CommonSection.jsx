import React from 'react'
import { Container } from 'reactstrap';

import '../../styles/commonSection.css' ;

const CommonSection = ({ title }) => {
  return (
    <section className="common_section">
        <Container className='d-flex align-items-center justify-content-center ' >
            <h1>{title}</h1>
        </Container>
    </section>
  )
}
export default CommonSection ;