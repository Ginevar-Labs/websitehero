import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Grid, Card, Text, Link, Spacer } from '@nextui-org/react';
// import Navbar from './../components/Navbar'
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

const Navbar = dynamic(
  () => import('./../components/Navbar'),
  { ssr: false }
)

export default function Home() {
  const [cookies, setCookie] = useCookies(['lang']);
  const [origin, setOrigin] = useState('');

  useEffect(() => {
    loadInitialData();
  }, []);

  const loadInitialData = async() => {
    if(!cookies.lang) {
      var userLang = navigator.language || navigator.userLanguage; 
      if(userLang.toLowerCase().indexOf('en-') != -1 || userLang.toLowerCase() == 'en') {
        setCookie('lang', 'en', { path: '/' });
      }else if(userLang.toLowerCase().indexOf('es-') != -1 || userLang.toLowerCase() == 'es') {
        setCookie('lang', 'es', { path: '/' });
      }else if(userLang.toLowerCase().indexOf('it-') != -1 || userLang.toLowerCase() == 'it') {
        setCookie('lang', 'it', { path: '/' });
      }else{
        setCookie('lang', 'en', { path: '/' });
      }
    }
  }

  return (
    <div>
      <Navbar
        origin={origin}
        onGoLink={(code) => {
          setOrigin(code)
        }}
      />
      <div className='cubeAnimated'/>
      <div className='cubeAnimated'/>
      <div className='cubeAnimated'/>
      <div className='cubeAnimated'/>
      <div className='cubeAnimated'/>

      <main>
        <div id='page-index' className='gnvIntro'>
          <h1 className='gnvIntro-left'>Empowering businesses with technology.</h1>
          <h1 className='gnvIntro-right'>Unlocking your business full potential.</h1>
          <p className='gnvIntro-center'>Bring your software vision to life with our comprehensive development services. Trust us to deliver innovative solutions that meet your unique business needs and drive growth and efficiency.</p>
          <Spacer y={4}/>
          <p className='gnvIntro-center-big'><span className='gnvIntro-gradient-text'>Ginevar</span> is a software development company based in Monza, Italy, that is focused on delivering innovative solutions to businesses across various industries. They understand that technology is crucial in unlocking the full potential of an organization and are dedicated to helping clients achieve this goal.</p>
          <br/>
          <p className='gnvIntro-center-big'>With a team of highly skilled developers and years of experience, Ginevar is capable of bringing any software development project to life. We offer a range of services including custom software development, website design, mobile app development, and more. Our experts work closely with clients to ensure that their projects exceed expectations. We are passionate about using technology to drive progress and create growth opportunities for their clients. With their deep understanding of the latest technologies and commitment to quality, we are confident that we can help businesses reach new heights. Contact us to learn more about their services.</p>
        </div>

        <div id='what-we-do' className='gnvTitleContainer'>
          <div className='gnvTitleBox'>
            <div className='gnvTBSquare'/>
            <h1>What we do</h1>
            <div className='gnvTBline'/>
          </div>
        </div>
        
        
        <Spacer y={10}/>
        
        <div id='software' className='gnvTitleContainer'>
          <div className='gnvTitleBoxRight'>
            <div className='gnvTBSquare'/>
            <div className='gnvTBline'/>
            <h1>Software</h1>
          </div>
        </div>

        <Spacer y={10}/>

        <div id='projects-and-past-work' className='gnvTitleContainer'>
          <div className='gnvTitleBox'>
            <div className='gnvTBSquare'/>
            <h1>Projects and Past Work</h1>
            <div className='gnvTBline'/>
          </div>
        </div>
        
        
        <Spacer y={10}/>
        
        <div>
          <div id='careers' className='gnvTitleContainer'>
            <div className='gnvTitleBoxRight'>
              <div className='gnvTBSquare'/>
              <div className='gnvTBline'/>
              <h1>Careers</h1>
            </div>
          </div>
          <p className='gnvDescBox' style={{
              marginBottom: '40px',
              marginTop: '240px'
            }}>
            If you are looking for an exciting opportunity to grow your career and be a part of a dynamic and innovative team, we would like to invite you to submit your resume for consideration. Our company values hard work, creativity, and a passion for success, and we are eager to find individuals who share these values.
            </p>

          <div className='gnvOpenPos'>
            <h2>Open Positions</h2>
            <Spacer y={3}/>
            <p className='gnvOP-nopos'>No open positions at the moment</p>
            <Spacer y={3}/>
            <p className='gnvOP-random'>Whether you have experience in software development, design, marketing and sales, or you are looking to break into a new field, we encourage you to apply. We are constantly growing and expanding our business, and as a result, we take in consideration all applicants even if there are no specific open positions at the moment.</p>

            <div className='gnvOpenPosLineLeft'/>
            <div className='gnvOpenPosLineRight'/>
          </div>

          <a href='mailto:careers@ginevar.com'><button className='gnvDescBoxButton'>Apply</button></a>
        </div>

        <div className='gnvPinkBG'>
          <div id='contact' className='gnvTitleContainer'>
            <div className='gnvTitleBox'>
              <div className='gnvTBSquare'/>
              <h1>Contact</h1>
              <div className='gnvTBline'/>
            </div>
          </div>
            <Spacer y={5}/>
            <p className='gnvDescBox gnvDescBoxRight' style={{
              marginTop: '200px',
              marginBottom: '40px'
            }}>
            At Ginevar, we are dedicated to providing top-notch software development services to businesses of all sizes. Our team of experts is always available to answer any questions and help you with your software development needs. <br/> If you have any questions or would like to learn more about our services, please do not hesitate to contact us using the information below.
            </p>

            <br/>

            <a href='mailto:contact@ginevar.com'><button className='gnvDescBoxButton gnvDescBoxButtonRight'>Contact us</button></a>
        </div>

      </main>

      <footer>
        <div className='gnvFooterContainer'>
          <div className='gnvFooterBanner'>
            <img src='/assets/squared_logo.png'/>
            <p><b>Ginevar</b></p>
            <p>Monza, Italy</p>
            <p>ID</p>
          </div>
          <div className='gnvFooterLinksColumn'>
            <div className='gnvFLCLeft'>
              <a href='#'><h1>What we do</h1></a>
              <a href='#'><p>Websites</p></a>
              <a href='#'><p>Motion Graphics</p></a>
              <a href='#'><p>UX/UI</p></a>
              <a href='#'><p>Backend</p></a>
            </div>
            <div className='gnvFLCRight'>
              <div style={{height: '30px'}}/>
              <a href='#'><p>Mobile Apps</p></a>
              <a href='#'><p>Smart Contracts</p></a>
              <a href='#'><p>Games</p></a>
              <a href='#'><p>Consultancy</p></a>
            </div>
          </div>
          <div className='gnvFooterLinksColumn'>
          <div className='gnvFLCLeft'>
            <a href='#'><h1>Software</h1></a>
            <div style={{height: '30px'}}/>
            <a href='#'><h1>Work</h1></a>
              <a href='#'><p>Working Method</p></a>
              <a href='#'><p>Portfolio</p></a>
          </div>
          <div className='gnvFLCRight'>
          <a href='#'><h1>Careers</h1></a>
            <div style={{height: '30px'}}/>
            <a href='#'><h1>Contact</h1></a>
          </div>
          </div>
        </div>
        <br/>
        <Spacer y={15}/>
        <div style={{textAlign: 'center', width: '100%', marginBottom: '40px', marginTop: '40px'}}>
          <p>© Ginevar 2023</p>
        </div>
      </footer>
    </div>
  )
}
