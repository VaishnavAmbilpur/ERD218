import { useState } from 'react'
import './App.css'
import Hero from './assets/Hero.svg'
import apps from './assets/Apple.png'
import playap from './assets/PLay.png'
import Phone2 from './assets/Phone2.png'
import Phone3 from './assets/Phone 3.png'
import Phone4 from './assets/Phone 4.png'
import image1 from './assets/image1.png'
import image2 from './assets/image2.png'     
import image3 from './assets/image3.png'
import image4 from './assets/image4.png'
import image5 from './assets/image5.png'
import image6 from './assets/image6.png'  
import image7 from './assets/image7.png'
import image8 from './assets/image8.png'
import img1 from './assets/img.png'
import img2 from './assets/img2.png'
import img3 from './assets/img3.png'
import img4 from './assets/img4.png'
import ss1 from './assets/ss1.png'
import ss2 from './assets/ss2.png'
import ss3 from './assets/ss3.png'
import ss4 from './assets/ss4.png'
import des1 from './assets/des1.png'
import plus from './assets/plus.png'
function App() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if(selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }
  const data = [{
    question:"Chamber reached do he nothing be?",
    answer:"Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
  },{
    question:"Stuff sight equal of my woody?",
    answer:"Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
  },{
    question:"At by pleasure of children be?",
    answer:"Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
  },{
    question:"Amounted repeated as believed in confined?",
    answer:"Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
  },{
    question:"In am do giving to afford parish settle easily garret?",
    answer:"Our asked sex point her she seems. New plenty she horses parish design you. Stuff sight equal of my woody. Him children bringing goodness suitable she entirely put far daughter."
  }]
  return (
    <>
     <header className='head'>
      <div className="left">
        <span className='le'>Home</span>
        <span className='le'>About</span>
        <span className='le'>Testimonials</span>
        <span className='le'  >Contact</span>
      </div>
      <div className="cen">smartHome</div>
      <div className="right">
        <a href="https://www.figma.com/login" target="blank">
        <button className="sig">Login</button>
        </a>
        <a href="https://www.figma.com/signup" target="blank">
        <button className="login">Sign Up</button>
        </a>
        
        </div>
     </header>
     <center className="Cent">Smart Home<br></br>Application<br></br></center>
     <center className="v">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon<br></br> him call mile. An pasture he himself believe ferrars besides cottage.</center>
     <div class="page1">
      <div class="ss-img">
        <a href="https://www.facebook.com/"><img class="ss" src={ss1}></img></a>
        <a href=" https://www.instagram.com/ecell_nitb?igsh=bG1jc2xvMGZ0d2Ji"><img class="ss" src={ss2}></img></a>
        <a href="https://www.linkedin.com/company/ecell-manit/"><img class="ss" src={ss3}></img></a>
        <a href="https://x.com/messages/compose?recipient_id=1596464580753911810"><img class="ss" src={ss4}></img></a>
      </div>
      <div><img src={Hero} className="react-logo" alt="logo" /></div>
     </div>
      
      <div className="down">
        <a href="https://www.figma.com/downloads/" target="blank">
        <img src={apps} className="apl" alt="logo" />
        </a>
      <a href="https://www.figma.com/downloads/" target="blank">
      <img src={playap} className="pls" alt="logo" />
      </a>
      
      </div>
      <div className="About">About us</div>
      <div className='page2'>
          <div><img src={Phone2} className="p2" alt="logo" /></div>
            <div className='text'>
              <div className='text1'>Smart Home's Smart<br></br>Services</div>
              <div className='text2'>Ye am depending propriety sweetness<br></br> distrusts belonging collected. Smiling mention <br></br> he in thought equally musical. Wisdom new<br></br>  and valley answer. Contented it so is discourse<br></br>  recommend. Man its upon him call mile. An <br></br> pasture he himself believe ferrars besides <br></br> cottage.</div>
              <a href="https://www.figma.com/resource-library/ui-design/" target ="blank">
              <button class="learn">Learn More</button>
              </a>
              
            </div>
    
      </div>

      <div className='page21'>
            <div className='text-2'>
              <div className='text1'>Control Electric<br></br>Appliences</div>
              <div className='text2'>Ye am depending propriety sweetness<br></br> distrusts belonging collected. Smiling mention <br></br> he in thought equally musical. Wisdom new<br></br>  and valley answer. Contented it so is discourse<br></br>  recommend. Man its upon him call mile. An <br></br> pasture he himself believe ferrars besides <br></br> cottage.</div>
              <a href="https://www.figma.com/resource-library/ui-design/" target ="blank">
              <button class="l1">Learn More</button>
              </a>
            </div>
            <img src={Phone3} className="p2" alt="logo" />
      </div>

      <div className='page3'>
          <div><img src={Phone4} className="p2" alt="logo" /></div>
            <div className='text'>
              <div className='text1'>What App Can do<br></br>to your Appliences</div>
              <div className='text2'>Ye am depending propriety sweetness<br></br> distrusts belonging collected. Smiling mention <br></br> he in thought equally musical. Wisdom new<br></br>  and valley answer. Contented it so is discourse<br></br>  recommend. Man its upon him call mile. An <br></br> pasture he himself believe ferrars besides <br></br> cottage.</div>
              <a href="https://www.figma.com/resource-library/ui-design/" target ="blank">
              <button class="l1">Learn More</button>
              </a>
            </div>
    
      </div>
      <div class="our">
          <div class="client">Our Clients</div>
          <div class="wisdom">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon<br></br> him call mile. An pasture he himself believe ferrars besides cottage.</div>
      </div>
      
      <div class="images">
        <div class="img-1">
          <img src={image1} class="img10"></img>
          <img src={image2} class="img2"></img>
          <img src={image3} class="img3"></img>
          <img src={image4} class="img4"></img>
        </div>
        <div class="img-2">
          <img src={image5} class="img5"></img>
          <img src={image6} class="img6"></img>
          <img src={image7} class="img7"></img>
          <img src={image8}  class="img8"></img>
        </div>
      </div>

      <div class="test">Testimonials</div>
      <div class="new">Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon<br></br> him call mile. An pasture he himself believe ferrars besides cottage.</div>
      <div className='testi1'>
         <div className='testi2'>
         <div className='te'>our company, we do ongoing research with our target audience. This includes 30-45 minute phone interviews. It was difficult to conduct the interview, really listen, and ask good follow up questions
         </div> <div className="fla"> <img src={img1} className="img1"></img><span className='to'>Cham<br></br><span className='de'>Product Design</span></span> </div>
         </div>
         <div className='testi21'>
         <div className='te'>We meet new clients and more often than not establish long-term business relationships, all through Guru. The flexibility in how projects can be structured</div>
         <div className='fla'> <img src={img2} className="img1"></img><span className='to'>Scopic Software<br></br><span className='de'>Custom IT Solutions Firm</span></span></div>
         </div>
      </div>
      <div className='testi13'>
         <div className='testi21'>
         <div className='te'>It is easy to communicate with clients through their message system and their SafePay feature ensures that all funds are secured prior to any work being done. </div> <div className="fla"> <img src={img3} className="img1"></img><span className='to'>Russell Lee<br></br><span className='de'>Writer</span></span> </div>
         </div>
         <div className='testi21'>
         <div className='te'>At SOLACE Engineers, we provide engineering solutions and other services on various freelancing platforms. Among them all, Guru is the best and our first choice to invite clients.</div>
         <div className='fla'> <img src={img4} className="img1"></img><span className='to'>Solace Engineers Inc.<br></br><span className='de'>Engineering Firm</span></span></div>
         </div>
      </div>
      <div class="des">
      <img class="des-img" src={des1}></img>
      </div>
      <div class="faq">FAQ'S</div>
      <div class="outlinefaq">
        {data.map((item, i) => (
          <div class="faq1" key={i}>
           <div className='top'
           onClick={() => toggle(i)}>
           <div class="chamber"  >
            {selected === i ? <span class="m">_</span> : <span class="plus">+</span>}
            <span class='li'>{item.question}</span></div>
           </div>
          <div className={selected === i ? 'chamber12' : 'chamber1'}>{item.answer}</div>
          </div>
        ))}

      </div>
     
      <div className='page21'>
            <div className='text-2'>
              <div className='text1i'>Download App</div>
              <div className='text2'>Wisdom new and valley answer. Contented it so is discourse recommend. Man its upon him call mile. An pasture he himself believe ferrars besides cottage.</div>
              <div className="down2">
                <a href="https://www.figma.com/downloads/" target="blank">
                <img src={apps} className="apl2" alt="logo" />
                </a>
      <a href="https://www.figma.com/downloads/" target="blank">
      <img src={playap} className="pls2" alt="logo" />
      </a>
      
      </div>
            </div>
            <img src={Phone2} className="p2" alt="logo" />
      </div>
      <div class="page4">
        <div class="to-get">
          <div class="subscribe">Subscribe to get updated</div>
          <div class="at-vero">At vero eos et accusamus et iusto odio dignissimos ducimus qui<br></br> blanditiis praesentium voluptatum deleniti atque .</div>
        </div>
        <div class="get-div">
          <a href="https://smarthometechnologies.com/" target ="blank">
          <button class="get-button">Get Start</button>
            </a>
            </div>
      </div>

      <div class="footer1">
        <div class="home">smartHome</div>
        <div class="cat">CATEGORIES</div>
        <div class="cat">ABOUT</div>
        <div class="cat">Follow us</div>
      </div>
      <div class="footer2">
        <div class="auto">Automate your entire healthcare hiring, onboarding and compliance with a true technology platform.<br></br>
      
          <p class="p1">
          <input className="in" type="text" placeholder="Email"></input>
          <a href="https://smarthome.community/register" target="blank">
          <button class="register">Register</button>
          </a>
          
            </p>
        </div>
        <div class="footer-content">
          <div class="p">Product Management</div>
          <div class="p">Design / Creatives</div>
          <div class="p">Education & Creative</div>
          <div class="p">UI/UX Designers</div>
          <div class="p">Development</div>
          <div class="p">Customer Support</div>
        </div>
        <div>
          <div class="p">About Us</div>
          <div class="p">Partnerships</div>
          <div class="p">Finanace Experts</div>
          <div class="p">Product Management</div>
          <div class="p">Product Manager</div>
          <div class="p">The Team</div>
        </div>
        <div>
          <div class="p">Facebook</div>
          <div class="p">Twitter</div>
          <div class="p">Instagram</div>
          <div class="p">Linkedin</div>
        </div>
        <div>

        </div>
      </div>
      <footer class="last">
      Copyright © 2021 all rights reserved smartHome
      </footer>
    </>
  )
} 

export default App
