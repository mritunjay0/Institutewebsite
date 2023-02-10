import React from 'react'
import NavBar from "../Navbar/navbar"
import Footer from "../Footer/foot"
import "./about.css"
import Carousel from 'react-bootstrap/Carousel';
import c1 from '../../Assets/admin-b.jpeg'
import c2 from '../../Assets/corelab.jpeg'
import c3 from '../../Assets/cc.jpeg'
import c4 from '../../Assets/LHTC.jpeg'

const About = () => {
  return (
    <>
    <div classname = "Carousel">
        <Carousel>
          <Carousel.Item>
            <img height={500}
              className="d-block w-100 h-20"
              src={c1}
              alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img height={500}
              className="d-block w-100 h-20"
              src={c2}
              alt="Second slide"
            />

          
          </Carousel.Item>
          <Carousel.Item>
            <img height={500}
              className="d-block w-100 h-20"
              src={c3}
              alt="Third slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <img height={500}
              className="d-block w-100 h-20"
              src={c4}
              alt="Fourth slide"
            />
          </Carousel.Item>

        </Carousel>
    </div>
     <div className='aboutinfo'>
      <h1> About IIITDMJ</h1>
      <p>
      Probably at no previous moment in the world history have commerce and industry become so complex, extensive, and globally interrelated as they are today. India, which is going through a rapid growth in its manufacturing sector, is not unaffected by these changes. The modern manufacturing environment entails a large variety of cross-disciplinary activities including the Design and IT. Engineers consequently are being called upon to work within new environmental, economical and social constraints which are increasingly becoming a part of contemporary engineering practice. Obviously, these elements need to find their way into the engineering curricula. However, traditional engineering instructional formats isolate teaching and research into specific disciplines with un-integrated curricula and therefore the structure of our engineering curricula have hardly changed in accordance with the modern manufacturing needs. Such divisions in the existing higher education formats are found to act as barriers to learning, behavior, and performance.
      <br/>   <br/>   
      Another aspect of engineering education which needs to be considered is the basic nature of the IT profession. The IT driven market of today features a model of innovation which is quite different from the research models that most institutes are familiar with. The new market model for innovation emphasizes on fast concept, funds projects with venture capital, fosters innovation by rewarding entrepreneurs who specialize in transforming people's practices to become more productive with the help of new technology. In contrast, the conventional research model emphasizes on careful development of ideas and principles and achieves innovation only after ideas have gone through a long pipeline that distills out the best and brings them into practice over a period of 15-20 years. This dichotomy between the new market-driven model and the conventional idea-pipeline model poses another great challenge to educators of engineering.
      <br/>  <br/>  
      The current engineering education system in India, though huge and diverse, is mainly based on the conventional idea of pipeline model. To integrate the knowledge of a given discipline with IT enabled design, prototyping as well as manufacturing considerations, a need therefore exists for developing a new academic programmes. Apart from laying an emphasis on IT, the new approach should also give emphasis on aesthetic, ergonomic and functional considerations of products. The academic programme should also be able to respond to industry driven adaptive management structure.
      <br/>  <br/>   
      With above requirements in mind, the Ministry of Human Resource Development (MHRD), Government of India, felt the need to set up a national institute devoted exclusively for Information Technology (IT), Design & Manufacturing (D & M). It was envisaged that such an academic institute would promote excellence in the desired areas of specialization and would facilitate and promote the competitive advantage of Indian products and manufacturing in global markets. Further, the new Institute would serve as an inter-disciplinary institution for education and research by keeping the concept of Product Lifecycle Management (PLM) in mind. The Indian Institute of Information Technology, Design & Manufacturing (IIITDM) Jabalpur was thus established in January 2005. Strong industry interface and close cooperation with other academic and research institutions are the key features of this Institute.
      </p>
      <h3>Mission</h3>
      <p>The Mission of the Institute is to create a multidisciplinary academic environment to prepare and train manpower of excellence for nurturing and promoting knowledge-based activities and innovations in design, fabrication and manufacturing of products by bringing together a collaborative and mutually stimulating mix of different fields of science, engineering and arts. In doing so the Institute shall identify current and future agendas for scholarship, share knowledge and discoveries with the world community and actively cultivate individuals with the desire and capability to contribute to society.</p>
      <h3>Vision</h3>
      <p>In planning for its future as well as for conducting its ongoing activities, the Institute seeks to act in a manner that is guided by a deep-rooted sense of shared values and aspirations. Built upon such a foundation, the Institute:
      <ul>
        <li>
        Honours and rewards high performance in learning, teaching, scholarship, research and creative activities by encouraging intellectual curiosity and protecting the multiple expressions of academic freedom.
        </li>
        <li>
        Seeks to provide an environment conducive to imaginative innovation, experimentation and creativity by encouraging all members of the academic community to take intellectual and creative risks and to embrace changes that will enhance the fulfillment of the Institute’s mission.
        </li>
        <li>
        Aspires to build an environment of tolerance and reasoned debate without any gender-, cast-, religious- or regional- bias by affirming the worth and personal dignity of every member of the Institute community and contributing to a campus climate of civility.
        </li>
      </ul>
      </p>
     </div>
    <Footer/>
    </>
  )
}

export default About