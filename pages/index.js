import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Grid, Card, Text, Link, Spacer } from '@nextui-org/react';
// import Navbar from './../components/Navbar'
import { useEffect } from 'react';
import { useCookies } from 'react-cookie';

const Navbar = dynamic(
  () => import('./../components/Navbar'),
  { ssr: false }
)

export default function Home() {
  const [cookies, setCookie] = useCookies(['lang']);

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
        origin={'index-wwd'}
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
        
        <div id='careers' className='gnvTitleContainer'>
          <div className='gnvTitleBoxRight'>
            <div className='gnvTBSquare'/>
            <div className='gnvTBline'/>
            <h1>Careers</h1>
          </div>
        </div>

        <Spacer y={10}/>

        <div id='contact' className='gnvTitleContainer'>
          <div className='gnvTitleBox'>
            <div className='gnvTBSquare'/>
            <h1>Contact</h1>
            <div className='gnvTBline'/>
          </div>
        </div>

      </main>

      <footer>
      </footer>
    </div>
  )
}
