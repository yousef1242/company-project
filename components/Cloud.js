import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const Cloud = () => {
  return (
    <div className='cloud' style={{direction:"ltr",padding:"100px 0px 0px 0px"}}>
       <Container>
          <Row>
             <div className='col-sm-12 col-md-6 col-xxl-6 col-lg-6 mb-5'>
                 <img src="https://hamzanabil.github.io/arabic-bootstrap/images/project-slide1.jpg" className='img-fluid' alt=""/>  
             </div>
             <div className='col-sm-12 col-md-6 col-xxl-6 col-lg-6 text-end'>
                <h2 className='cloud-text' style={{marginBottom:"35px"}}>دون الغبار</h2>
                <p style={{marginBottom:"45px",color:"#777",fontWeight:"500"}}>ونحن نسعى لتحقيق أحلام عملائنا، من خلال الجمع بين أفكارهم، ونمط الحياة، والميزانية مع تجربتنا الخاصة، والخبرة، وأفضل الممارسات لإنشاء البيت الذي هو ممتع، عملي ومستدامة وذات قيمة دائمة.</p>
                <button>عرض جميع المشاريع</button>
             </div>
             
          </Row>
       </Container>
    </div>
  )
}
