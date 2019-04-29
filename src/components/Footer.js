import React, { Component } from 'react'
import { FaMapMarkerAlt , FaPhone ,FaFacebookF } from 'react-icons/fa'
import { IoIosMail , IoLogoTwitter , IoLogoInstagram , IoIosArrowForward} 
  from 'react-icons/io'
// import { Container , Row ,Col} from 'react-bootstrap'
import './Footer.css'

export default class Footer extends Component{
  
  render(){
    return(
      <div className="footer">
        <div className="footer-container">
          <div className="part-1 parts">
            <div className="footer-header"> Whisper</div>
            <div className="description">Far far away, behind the word mountains,far from the countries Vakalia  and Consonantia,there live the blind texts</div>
            <div className="social-icons">
              <div className="icon">
                <IoLogoTwitter></IoLogoTwitter>
              </div>
              <div className="icon">
                <FaFacebookF />
              </div>
              <div className="icon">
                <IoLogoInstagram />
              </div>
            </div>
          </div>
          <div className="part-2 parts">
            <div className="footer-header"> Practice Areas</div>
            <ul>
              <li><span><IoIosArrowForward /></span>Family Law</li>
              <li><span><IoIosArrowForward /></span>Business Law</li>
              <li><span><IoIosArrowForward /></span>Insurance Law</li>
              <li><span><IoIosArrowForward /></span>Criminal Law</li>
              <li><span><IoIosArrowForward /></span>Drug offenses</li>
              <li><span><IoIosArrowForward /></span>Fire Accident</li>
              <li><span><IoIosArrowForward /></span>Employment Law</li>
              <li><span><IoIosArrowForward /></span>Property Law</li>
            </ul>
          </div>
          <div className="part-3 parts">
            <div className="footer-header"> Business Hours</div>
            {/* <div className=""> */}
              <div className="sub-header">Opening Days:</div>
              <div className="hour-description">Monday-Friday: 9am to 20pm Saturday: 9am to 17pm</div> 
              <div className="sub-header">Vacations:</div>         
              <div className="hour-description">All sunday Days All Official Holidays</div>
            {/* </div> */}
          </div>
          <div className="part-4 parts">
            <div className="footer-header"> Have a questions?</div>
            <a href="#"> 
              {/* <div> */}
                <FaMapMarkerAlt/>
              {/* </div> */}
              <div className="contact location">203 Fake St.Mountain View, Sanfrancisco,California,USA</div>
            </a>
            <a href="#">
              <FaPhone />
              <div className="contact">+2 392 3929 210</div>
            </a>
            <a href="#">
              <IoIosMail />
              <div className="contact">info@yourdimain.com</div>
            </a>
          </div>
        </div>
        <div className="copyright">
          copyright@2019 All rights reserved | This template is made by Colorlib
        </div>

      </div>
    )
  }
} 
