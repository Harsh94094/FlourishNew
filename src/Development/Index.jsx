import React from 'react'

import Services from "./Comman1"
import Services2 from "./Comman2"
import Defrent from "./Drefrent"
import WeUse from "./WeUse"
import ContectUs from "./contectus"
import Proud from "../com/Proud"
import Testimonial from '../com/Client'
import FAQItem from "./Faq"

const index = ({name,description,image,title,title1,title2,title3,d1,d2,d3,t1,t2,t3,i1,de1,de2,de3,img}) => {
  return (
    <>
    <Services Name={name} Img={img} />
    <Services2 Description={description} Image={image} Title={title}  />
    <Defrent Title1={title1} Title2={title2} Title3={title3} D1={d1} D2={d2} D3={d3} />
    <WeUse T1={t1} T2={t2} T3={t3} I1={i1} DE1={de1} DE2={de2} DE3={de3}/>
    <ContectUs />
    <Proud/>
    <Testimonial/>
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4 flex justify-between items-center text-blue-500">FAQs</h1>
      <FAQItem />
    </div>

    </>
  )
}

export default index