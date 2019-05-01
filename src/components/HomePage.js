import React, { Component } from 'react'
// import OwlCarousel from 'react-owl-carousel'
import Img1 from '../assets/img1.jpg'
import Img2 from '../assets/bg1.jpg'
import { FaUserTie , FaUsers , FaHome } from 'react-icons/fa'
import { FaHandshake } from 'react-icons/fa'
import  { FaRegCheckSquare } from 'react-icons/fa'
import { FaAward , FaMoneyBillAlt , FaFireAlt } from 'react-icons/fa'
import { MdGavel  } from 'react-icons/md'
import { IoIosHelpCircleOutline } from 'react-icons/io'
import { GiMedicines , GiCrimeSceneTape } from 'react-icons/gi'
import { Slide ,Fade } from 'react-slideshow-image'
import Footer from './Footer'
import './HomePage.css'
 
const properties = {
  duration: 5000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  arrows: false
}
 

export default class HomePage extends Component {
  constructor(props){
    super(props)
    this.state = {
      attorneys:[
        {
          id: 1,
          name: "Richard Anderson",
          position: "Civil Lawyer"
        },{
          id: 2,
          name: "Jefford Maxillin",
          position: "Business Lawyer"
        },{
          id: 3,
          name: "Carlos Obing",
          position: "Criminal Defense"
        },{
          id: 4,
          name: "Nathan Smith",
          position: "Insurance Lawyer"
        }
      ]
    }
  }
  render(){
    return(
      <div className= "home">
        <div className= "section-1">
          <div className="part-1">
            <div className= "titles title-1">We are here to help!</div>
            <div className= "titles title-2">Experience . Innovation . Excellence</div>
            <div>
              <button className= "requestButton">REQUEST A FREE CONSULTATION</button>
            </div>
          </div>
          <div className="part-2 features">
            <div className=" feature feature-1 type-1">
              <MdGavel color="#e4ba22" size="35px" />
              <h3>Get Your Legal advice</h3>
              <div className="features-description">A small river named Duden flows by their place and supplies it with the necessary regelialia</div>
            </div>
            <div className="feature feature-2 type-2">
              <FaUserTie size="35px" color="#e4ba22"/>
              <h3>Work with Expert Lawyers</h3>
              <div className="features-description">A small river named Duden flows by their place and supplies it with the necessary regelialia</div>
            </div>
            <div className="feature feature-3 type-1">
              <div className="icon">
                <FaMoneyBillAlt size="35px" color="#e4ba22"/>
              </div>
              <h3>Have Great Discounted Rates</h3>
              <div className="features-description">A small river named Duden flows by their place and supplies it with the necessary regelialia</div>
            </div>
            <div className="feature feature-4 type-2">
              <div className="icon">
                <IoIosHelpCircleOutline size="35px" color="#e4ba22"/>
              </div>
              <h3>Review your Case Documents</h3>
              <div className="features-description">A small river named Duden flows by their place and supplies it with the necessary regelialia</div>
            </div>
          </div> 
        </div>
        <div className= "section-2 about">
          <div className="part-1"></div>
          <div className="part-2">
            <h3>Fun Facts</h3>
            <h1>Whisper Lawfirm Stablished Since 1990</h1>
            <div className="about-description">far far away,behind the world mountains, far from the countries Vokalia and Consonantia</div>
            <div className="rows container">
              <div className="row-1">
                <div className="box-1 box">
                  <FaUserTie size="50px" color="black"/>
                  <h2>500</h2>
                  <h4>Qualified Lawyers</h4>
                </div>
                <div className="box-2 box">
                  <FaHandshake size="50px"/>
                  <h2>2,000</h2>
                  <h4>Trusted Clients</h4>
                </div>
              </div>
              <div className="row-2">
                <div className="box-3 box">
                  <FaRegCheckSquare size="50px"/>
                  <h2>1,500</h2>
                  <h4>Successful Cases</h4>
                </div>
                <div className="box-4 box">
                  <FaAward size="50px"/>
                  <h2>100</h2>
                  <h4>Honors & Awards</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-3 practice-areas-container">
          <h3>Practice Areas</h3>
          <h1>Practice Areas</h1>
          <div className="practice-areas">
            <div className="practice">
              <div className="practice-icon-container">
                <FaUsers size= "35px" className="practice-icon"/>
              </div>
              <div className="practice-text">
                Family Law
              </div>
            </div> 
            <div className="practice">
              <div className="practice-icon-container">
                <MdGavel size= "35px" className="practice-icon"/>
              </div>
              <div className="practice-text">
                Business Law
              </div>
            </div> 
            <div className="practice">
              <div className="practice-icon-container">
                <FaAward size= "35px" className="practice-icon"/>
              </div>
              <div className="practice-text">
                Insurance Law
              </div>
            </div> 
            <div className="practice">
              <div className="practice-icon-container">
                <GiCrimeSceneTape size= "35px" className="practice-icon"/>
              </div>
              <div className="practice-text">
                Criminal Law
              </div>
            </div> 
            <div className="practice">
              <div className="practice-icon-container">
                <FaHome size= "35px" className="practice-icon"/>
              </div>
              <div className="practice-text">
                Property Law
              </div>
            </div> 
            <div className="practice">
              <div className="practice-icon-container">
                <FaUserTie size= "35px" className="practice-icon"/>
              </div>
              <div className="practice-text">
                Employment Law
              </div>
            </div>
            <div className="practice">
              <div className="practice-icon-container">
                <FaFireAlt size= "35px" className="practice-icon"/>
              </div>
              <div className="practice-text">
                Fire Accident
              </div>
            </div>
            <div className="practice">
              <div className="practice-icon-container">
                <FaMoneyBillAlt size= "35px" className="practice-icon"/>
              </div>
              <div className="practice-text">
                Financial Law
              </div>
            </div>
            <div className="practice">
              <div className="practice-icon-container">
                <GiMedicines size= "35px" className="practice-icon"/>
              </div>
              <div className="practice-text">
                Drug Offenses
              </div>
            </div>
            <div className="practice">
              <div className="practice-icon-container">
                <GiCrimeSceneTape size= "35px" className="practice-icon"/>
              </div>
              <div className="practice-text">
                Sexual Offenses
              </div>
            </div>
          </div>
        </div>
        <div className= "section-4">
          <h3>Our Attorney</h3>
          <h1 className="heading-2">Our Legal Attorneys</h1>
          <div className="attorneys">
            {
              this.state.attorneys.map((attorney)=>{
                return(
                  <div key={attorney.id} className="attorney">
                    <div className="attorney-content">
                      <div className="attorney-name">{attorney.name}</div>
                      <div className="attorney-position">{attorney.position}</div>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
        <div className="section-5">
          <div className="part-1"></div>
          <div className="part-2">
            <form id="form">
              <div className="form-header">Free Consultation</div>
              <input type="text" placeholder="Your Name"></input>
              <input type="text" placeholder="Your email"></input>
              <input type="text" placeholder="Your subject"></input>
              <textarea rows="4" placeholder="Message">
              </textarea>
              <div className="submit-button">
                <input type="submit" value="Send Message" />
              </div>
            </form> 
           </div> 
        </div>
        <div className="section-6">
          <h3>Testimonial</h3>
          <h1>Happy Clients</h1>
          <div className="slide-show">
            <Slide {...properties}>
              <div className="each-slide">
                <div className="slide-content">
                  <div className="profile-pic">
                  </div>                  
                  <div className="client-desc">Far far away , behind the word mountains,far from the countries Vokalia and Consonantia,there live the blind texts.</div>
                  <div className="client-name">Arthur Browner</div>
                  <div className="client-position">Client</div>
                </div>
              </div>
              <div className="each-slide">
                <div className="slide-content">
                  <div className="profile-pic"></div>                  
                  <div className="client-desc">Far far away , behind the word mountains,far from the countries Vokalia and Consonantia,there live the blind texts.</div>
                  <div className="client-name">Arthur Browner</div>
                  <div className="client-position">Client</div>
                </div>
              </div>
              <div className="each-slide">
                <div className="slide-content">
                  <div className="profile-pic"></div>                  
                  <div className="client-desc">Far far away , behind the word mountains,far from the countries Vokalia and Consonantia,there live the blind texts.</div>
                  <div className="client-name">Arthur Browner</div>
                  <div className="client-position">Client</div>
                </div>
              </div>
            </Slide>
          </div>  
        </div>
        <div className="section-7">
          <h3>Our Blog</h3>
          <h1>Recent Blog</h1>
          <div className="blog">
            <div className="blog-1">
              <img src={Img1} />
              <div className="blog-content">
                <h4>All you want to know about industrial law</h4>
                <div className="blog-desc"> A small river named Duden flows by their place and supplies it with the necessary regelialia</div>
              </div>
            </div>  
            <div className="blog-2">
              <img src={Img1} />
              <div className="blog-content">
                <h4>All you want to know about industrial law</h4>
                <div className="blog-desc"> A small river named Duden flows by their place and supplies it with the necessary regelialia</div>
              </div>
            </div>  
            <div className="blog-3">
              <img src={Img1} />
              <div className="blog-content">
                <h4>All you want to know about industrial law</h4>
                <div className="blog-desc"> A small river named Duden flows by their place and supplies it with the necessary regelialia</div>
              </div>
            </div>  
          </div> 
        </div>
        <div className="blog-images">
            <div className="blog-img1"></div>
            <div className="blog-img2"></div>
            <div className="blog-img3"></div>
            <div className="blog-img4"></div>
        </div>
        <div className="section-8">
          <h1>Subscribe to our Newsletter</h1>
          <div className="subscribe-desc">
            Far far away , behind the word mountains,far from the countries Vokalia and Consonantia,there live the blind texts.Seperated they in
          </div>
          <div className="subscribe-input">
            <input placeholder="Enter email address" className="subscribe-input-box"></input>  
            <input type="submit" value="Subscribe" className="subscribe-button"></input>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}