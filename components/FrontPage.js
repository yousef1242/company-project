import React from 'react'

export const FrontPage = () => {
  return (
    <>
       <div className='front-page' style={{position:"relative",color:"#fff",display:"flex",alignItems:"center"}}>
       <div className='overlay'></div>
           <div className='container text-center' style={{zIndex:"2"}}>
              <div className='items-front'>
                  <h1 style={{marginBottom:"30px"}}>قوية الانصهار قالب البناء الحد الأدنى</h1>
                  <p style={{marginBottom:"20px",fontWeight:"800",fontSize:"20px"}}>نسعى لتحقيق أحلام عملائنا ، من خلال الجمع بين أفكارهم وأسلوب حياتهم وميزانيتهم وتجربتنا الخاصة.</p>
                  <button>اطلب القياس</button>
              </div>
           </div>
       </div>
    </>
  )
}
