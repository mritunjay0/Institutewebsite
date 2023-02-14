import React from 'react'
import { useNavigate } from 'react-router-dom'
import banner_inst from '../../Assets/banner_inst.png'
import Research from '../../research_updates/research'
import Announce from '../Announcments/announcments'
import Foot from '../Footer/foot'
import News from '../newsandevents/news'


const LandingPage = () => {

  const navigate = useNavigate()
  return (
    <div> 
    <div style={{margin:"8%"}}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={banner_inst} alt="institute banner"/>
      </div>
      <div className='heading'>
        About the Institute
      </div>
      <div className='heading-para'>
      Probably at no previous moment in the world history have commerce and industry become so complex, extensive, and globally interrelated as they are today. India, which is going through a rapid growth in its manufacturing sector, is not unaffected by these changes.
      </div>
      <div
        style={{
          color:  "#077B0A",
          textDecorationLine: "underline",
          fontSize: "18px",
          cursor: "pointer",
          marginTop:"1rem"
      }} onClick = {() => {navigate("/about")}}>
        Read more
      </div>
      <News/>
      <Announce/>
      <Research/>
    </div>
    <Foot/>
    </div>
  )
}

export default LandingPage