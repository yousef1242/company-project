import React from 'react'
import { Container, Row } from 'react-bootstrap'

export const Share = () => {
  return (
    <>
       <div className='share-section'>
          <div className='share-div'>
             <h1>اشترك في نشرتنا الإخبارية</h1>
             <p>الاشتراك في النشرة الإخبارية الاشتراك ويكون أول من يعرف عن أحدث أخبار الشركة والعروض الخاصة والخصومات. والعروض الخاصة والخصومات.</p>
            <form>
                <Row className='align-items-center'>
                    <div className='col-lg-8  col-sm-12'>
                         <input type="email" placeholder='ايميل' required className='w-100'/>
                    </div>
                    <div className='col-lg-4 col-sm-12'>
                         <button>اشترك معنا</button>
                    </div>
                </Row>
            </form>
          </div>
       </div>
    </>
  )
}
