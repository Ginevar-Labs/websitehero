import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Grid, Card, Text, Link } from '@nextui-org/react';
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

      <main>
        
      </main>

      <footer>
      </footer>
    </div>
  )
}
