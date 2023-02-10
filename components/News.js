import React from 'react'
import { Container, Row,Card,Button } from 'react-bootstrap'

export const News = () => {
  return (
    <>
       <div className='news-section' style={{background:"#f8f9fa" , padding:"80px 0px",marginTop:"50px"}}>
          <Container>
             <Row>
                <div className='col-lg-4 col-md-6 col-xs-6'>
                <Card>
                <Card.Img variant="top" src="https://hamzanabil.github.io/arabic-bootstrap/images/service-item-bg-1.jpg" />
                <Card.Body>
                  <Card.Title>أفضل البناء في العالم</Card.Title>
                  <Card.Text>
                  أبجد هوز دولور الجلوس امات، والحيوية، بحيث تعبا وحزنا، وبعض الأشياء الهامة التي يجب. على مدى السنوات القادمة، الذين يمارسون أبجد هوز دولور الجلوس امات، والحيوية، بحيث تعبا وحزنا، وبعض الأشياء الهامة التي يجب. على مدى السنوات القادمة، الذين يمارسون
                  </Card.Text>
                  <button variant="primary">عرض التفاصيل</button>
                </Card.Body>
              </Card>
                </div>
                <div className='col-lg-4 col-md-6 col-xs-6'>
                <Card>
                <Card.Img variant="top" src="https://hamzanabil.github.io/arabic-bootstrap/images/service-item-bg-2.jpg" />
                <Card.Body>
                  <Card.Title>أفضل تجديد في العالم</Card.Title>
                  <Card.Text>
                  أبجد هوز دولور الجلوس امات، والحيوية، بحيث تعبا وحزنا، وبعض الأشياء الهامة التي يجب. على مدى السنوات القادمة، الذين يمارسون أبجد هوز دولور الجلوس امات، والحيوية، بحيث تعبا وحزنا، وبعض الأشياء الهامة التي يجب. على مدى السنوات القادمة، الذين يمارسون
                  </Card.Text>
                  <button variant="primary">عرض التفاصيل</button>
                </Card.Body>
              </Card>
                </div>
                <div className='col-lg-4 col-md-6 col-xs-6 three-col'>
                <Card>
                <Card.Body>
                  <Card.Title className='news-text'>الاخبار المهمة</Card.Title>
                  <Card.Text>
                    <Row>
                       <div className='col-12 mb-4'>
                          <Row>
                             <div className='col-3'>
                                <img src="https://hamzanabil.github.io/arabic-bootstrap/images/news-thumb-1.jpg" alt=""/>
                             </div>
                             <div className='col-9'>
                                <p>البناء التطبيقات مساعدة المشرفين على البناء سحب السلامة أولا</p>
                             </div>
                          </Row>
                       </div>
                       <div className='col-12 mb-4'>
                          <Row>
                             <div className='col-3'>
                                <img src="https://hamzanabil.github.io/arabic-bootstrap/images/news-thumb-1.jpg" alt=""/>
                             </div>
                             <div className='col-9'>
                                <p>البناء التطبيقات مساعدة المشرفين على البناء سحب السلامة أولا</p>
                             </div>
                          </Row>
                       </div>
                       <div className='col-12'>
                          <Row>
                             <div className='col-3'>
                                <img src="https://hamzanabil.github.io/arabic-bootstrap/images/news-thumb-1.jpg" alt=""/>
                             </div>
                             <div className='col-9'>
                                <p>البناء التطبيقات مساعدة المشرفين على البناء سحب السلامة أولا</p>
                             </div>
                          </Row>
                       </div>
                    </Row>
                  </Card.Text>
                </Card.Body>
              </Card>
                </div>
             </Row>
          </Container>
       </div>
    </>
  )
}
