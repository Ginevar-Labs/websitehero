import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Badge, Spacer, Modal, Button } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import LocalizationTexts from '../localization/texts.js'
import CubeAnimations from '../components/CubeAnimations.js';

import ProjectPopup from '../components/ProjectPopup.js';
import ProjectData from '../data/ProjectsData.json'
import BigProjPreviewItem from '../components/BigProjPreviewItem.js';

const Footer = dynamic(
  () => import('./../components/Footer'),
  { ssr: false }
)

const Navbar = dynamic(
  () => import('./../components/Navbar'),
  { ssr: false }
)

export default function Portfolio() {
  const [cookies, setCookie] = useCookies(['lang']);
  const [origin, setOrigin] = useState('');

  const [isProjectPopupVisible, setIsProjectPopupVisible] = useState(false)
  const [popupProject, setPopupProject] = useState(null)

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};


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
  useEffect(() => {
    loadInitialData();
  });

  const changeLanguage = (langcode) => {
    setCookie('lang', langcode, { path: '/' });
    alert(LocalizationTexts.MENU_LANGUAGE_CHANGED[cookies.lang])
}

const getBadge = (categoryId) => {
  switch(categoryId) {
    case 1: return <Badge color="secondary">{LocalizationTexts.WWD_MOTION_GRAPHICS[cookies.lang]}</Badge>
    case 2: return <Badge color="success">{LocalizationTexts.WWD_UX_UI[cookies.lang]}</Badge>
    case 3: return <Badge color="primary">{LocalizationTexts.WWD_BACKEND[cookies.lang]}</Badge>
    case 4: return <Badge color="warning">{LocalizationTexts.WWD_MOBILE_APPS[cookies.lang]}</Badge>
    case 5: return <Badge color="secondary">{LocalizationTexts.WWD_SMART_CONTRACTS[cookies.lang]}</Badge>
    case 6: return <Badge color="success">{LocalizationTexts.WWD_GAMES[cookies.lang]}</Badge>
    case 7: return <Badge color="warning">{LocalizationTexts.WWD_CONSULTANCY[cookies.lang]}</Badge>
    default: return <Badge color="primary">{LocalizationTexts.WWD_WEBSITES[cookies.lang]}</Badge>
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
      <CubeAnimations/>

      <main>
        <div className='gnvPinkBG'>
          <div id='projects-and-past-work' className='gnvTitleContainer'>
            <div className='gnvTitleBox'>
              <div className='gnvTBSquare'/>
              <h1>{LocalizationTexts.MENU_WORK[cookies.lang]}</h1>
              <div className='gnvTBline'/>
            </div>
            <p className='gnvTitleBoxDesc'>{LocalizationTexts.PROJECTS_SUBTITLE[cookies.lang]}</p>
          </div>

          {
            ProjectData.map((item, index) => {
                return <BigProjPreviewItem onClick={() => {
                  setIsProjectPopupVisible(true)
                  setPopupProject(item);
                }} data={item} key={index} />
              })
          }

        </div>

      </main>

      <Footer/>
      <ProjectPopup
        popupProject={popupProject}
        isProjectPopupVisible={isProjectPopupVisible}
        setIsProjectPopupVisible={setIsProjectPopupVisible}
      />
    </div>
  )
}
