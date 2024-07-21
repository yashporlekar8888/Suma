import React from 'react'
import Comman from './Comman'
import './Home.css';
export default function Home() {
    return (
        <div>
            <div><Comman /></div>

            <div className="image-container">
                <img src="./Images/Hero.png" alt="Hero" />
            </div>
            <div className='Whydoyouneedwebsite' >
                <div className='heading'><h2 className='h2'><strong>Why Do You Need a Website</strong></h2></div>
                <div className='content-container'>
                    <ul >
                        <li className='li'>1. Online Presence and Accessibility: A website ensures your business or personal brand is accessible 24/7, reaching a global audience and providing constant availability for customers.</li>
                        <li className='li'>2. Credibility and Professionalism: Having a professional website builds trust and credibility, showcasing your expertise and establishing you as a legitimate entity.</li>
                        <li className='li'>3. Marketing and Sales: Your website serves as the hub for digital marketing efforts, enhancing visibility through SEO and supporting e-commerce capabilities to drive sales and generate leads.</li>
                        <li className='li'>4. Customer Engagement and Support: It allows for detailed information sharing, interactive features, and improved customer support through tools like live chat, contact forms, and FAQs.</li>
                    </ul>
                    <img src='./Images/web.webp' alt="Website" />
                </div>
            </div>
            <div className='Assist'>
                <div> <h2 className='HowWeAssityou'><strong>How we assist you</strong></h2></div>
                <div className="cards-container">
                    <div className="card">

                        <h3>Design</h3>
                        <ul >
                            <li className='ld'>Logo Design</li>
                            <li className='ld'>UI Design</li>
                            <li className='ld'>UX Design</li>
                        </ul>
                    </div>
                    <div className="card">

                        <h3>Technology</h3>
                        <ul >
                            <li className='ld'>Website </li>
                            <li className='ld'>web App </li>
                            <li className='ld'>FrontEnd</li>
                            <li className='ld'>Backend</li>

                        </ul>
                    </div>
                    <div className="card">

                        <h3>Business</h3>
                        <ul >
                            <li className='ld'>Strategy </li>
                            <li className='ld'>Digital Marketing </li>
                            <li className='ld'>S.E.O</li>


                        </ul>
                    </div>
                </div>

            </div>
            <div className='SUMA'>
                <div><h2 className='WhyChooseSUMA'><strong>Why Choose SUMA</strong></h2></div>
                <div className='center-container'><img className='sumaImg' src='./Images/SUMA.png' alt=''></img></div>
                <div className='content-containerSuma'>
                    <ul>
                        <li className='ldSuma'><strong>SUMA WebMarksy will assist you in expanding your business by providing you with innovative site design and strategic digital marketing that prioritizes users and clients.</strong></li>
                        <li className='ldSuma'><strong>We Guarantee a Positive User Experience</strong> </li>
                        <li className='ldSuma'><strong>Want to Offer Our Services Globally</strong> </li>
                    </ul>
                </div>
            </div>
            <div></div>
        </div>
    )
}
