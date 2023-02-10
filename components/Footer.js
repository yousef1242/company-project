import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const Footer = () => {
  return (
    <>
       <div className='footer'>
          <Container>
             <Row>
                <div className='col-xs-12 col-md-6 col-lg-4 mb-4'>
                    <img style={{marginBottom:"15px"}} src="https://hamzanabil.github.io/arabic-bootstrap/images/logo.png" alt=""/>
                    <h5 style={{color:"#fff"}}>نحن مستعدون لمساعدتك دائما.</h5>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-4 mb-4'>
                   <h3 style={{marginBottom:"20px",color:"#fff"}}>روابط سريعة</h3>
                   <ul>
                     <li style={{marginBottom:"10px"}}><a href='/'>معلومات عنا</a></li>
                     <li style={{marginBottom:"10px"}}><a href='/'>مدونة</a></li>
                     <li><a href='/'>اتصل بنا</a></li>
                   </ul>
                </div>
                <div className='col-xs-12 col-md-6 col-lg-4 mb-4'>
                <Row>
                <div className='col-12 mb-4'>
                <h3 style={{marginBottom:"20px",color:"#fff"}}>المشاركات الاخيرة</h3>
                   <Row>
                      <div className='col-3'>
                         <img src="https://hamzanabil.github.io/arabic-bootstrap/images/news-thumb-1.jpg" alt=""/>
                      </div>
                      <div className='col-9'>
                         <p style={{color:"#fff"}}>البناء التطبيقات مساعدة المشرفين على البناء سحب السلامة أولا</p>
                      </div>
                   </Row>
                </div>
                <div className='col-12 mb-4'>
                   <Row>
                      <div className='col-3'>
                         <img src="https://hamzanabil.github.io/arabic-bootstrap/images/news-thumb-1.jpg" alt=""/>
                      </div>
                      <div className='col-9'>
                         <p style={{color:"#fff"}}>البناء التطبيقات مساعدة المشرفين على البناء سحب السلامة أولا</p>
                      </div>
                   </Row>
                </div>
             </Row>
                </div>
             </Row>
          </Container>
       </div>
    </>
  )
}
