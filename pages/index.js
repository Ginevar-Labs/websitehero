import Head from 'next/head'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import { Badge, Spacer, Modal, Button } from '@nextui-org/react';
// import Navbar from './../components/Navbar'
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import LocalizationTexts from '../localization/texts.js'
import CubeAnimations from '../components/CubeAnimations.js';
import ProjPreviewItem from '../components/ProjPreviewItem.js';
import AliceCarousel from 'react-alice-carousel';

import ProjectData from '../data/ProjectsData.json'

const Footer = dynamic(
  () => import('./../components/Footer'),
  { ssr: false }
)

const Navbar = dynamic(
  () => import('./../components/Navbar'),
  { ssr: false }
)

export default function Home() {
  const [cookies, setCookie] = useCookies(['lang']);
  const [origin, setOrigin] = useState('');

  const [isProjectPopupVisible, setIsProjectPopupVisible] = useState(false)
  const [popupProject, setPopupProject] = useState(null)

  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

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
        <div id='page-index' className='gnvIntro'>
          <h1 className='gnvIntro-left'>{LocalizationTexts.GNV_INTRO_LEFT[cookies.lang]}</h1>
          <h1 className='gnvIntro-right'>{LocalizationTexts.GNV_INTRO_RIGHT[cookies.lang]}</h1>
          <p className='gnvIntro-center'>{LocalizationTexts.GNV_INTRO_CENTER[cookies.lang]}</p>
          <Spacer y={4}/>
          <p className='gnvIntro-center-big'><span className='gnvIntro-gradient-text'>Ginevar</span> {LocalizationTexts.GNV_INTRO_GINEVAR_IS[cookies.lang]}</p>
          <br/>
          <p className='gnvIntro-center-big'>{LocalizationTexts.GNV_INTRO_WITH_A_TEAM[cookies.lang]}</p>
        </div>

        <div id='what-we-do' className='gnvTitleContainer'>
          <div className='gnvTitleBoxRight'>
            <div className='gnvTBSquare'/>
            <h1>{LocalizationTexts.MENU_WHATWEDO[cookies.lang]}</h1>
            <div className='gnvTBline'/>
          </div>
        </div>
        <Spacer y={10}/>
        <div className='gnvWWDBoxContainer'>
          <div className='gnvWWDBox'>
            <p className='gnvWWDBFloatingTitle'>{LocalizationTexts.WWD_WEBSITES[cookies.lang]}</p>
          </div>
          <div className='gnvWWDBox'>
            <p className='gnvWWDBFloatingTitle'>{LocalizationTexts.WWD_MOTION_GRAPHICS[cookies.lang]}</p>
          </div>
          <div className='gnvWWDBox'>
            <p className='gnvWWDBFloatingTitle'>{LocalizationTexts.WWD_UX_UI[cookies.lang]}</p>
          </div>
          <div className='gnvWWDBox'>
            <p className='gnvWWDBFloatingTitle'>{LocalizationTexts.WWD_BACKEND[cookies.lang]}</p>
          </div>
          <div className='gnvWWDBox'>
            <p className='gnvWWDBFloatingTitle'>{LocalizationTexts.WWD_MOBILE_APPS[cookies.lang]}</p>
          </div>
          <div className='gnvWWDBox'>
            <p className='gnvWWDBFloatingTitle'>{LocalizationTexts.WWD_SMART_CONTRACTS[cookies.lang]}</p>
          </div>
          <div className='gnvWWDBox'>
            <p className='gnvWWDBFloatingTitle'>{LocalizationTexts.WWD_GAMES[cookies.lang]}</p>
          </div>
          <div className='gnvWWDBox'>
            <p className='gnvWWDBFloatingTitle'>{LocalizationTexts.WWD_CONSULTANCY[cookies.lang]}</p>
          </div>
        </div>
        
        {/* <Spacer y={10}/>
        
        <div id='software' className='gnvTitleContainer'>
          <div className='gnvTitleBoxRight'>
            <div className='gnvTBSquare'/>
            <div className='gnvTBline'/>
            <h1>Software</h1>
          </div>
        </div> */}

        <Spacer y={10}/>

        <div className='gnvPinkBG'>
          <div id='projects-and-past-work' className='gnvTitleContainer'>
            <div className='gnvTitleBox'>
              <div className='gnvTBSquare'/>
              <h1>{LocalizationTexts.MENU_WORK[cookies.lang]}</h1>
              <div className='gnvTBline'/>
            </div>
            <p className='gnvTitleBoxDesc'>{LocalizationTexts.PROJECTS_SUBTITLE[cookies.lang]}</p>
          </div>

          <div className='gnvPPWCarouselContainer'>
          <AliceCarousel
                  autoPlay
                  infinite={true}
                  autoPlayDirection={'ltr'}
                  animationDuration={2500}
                  disableButtonsControls={true}
                  disableDotsControls={true}
                  // mouseTracking
                  responsive={responsive}
                  items={
                    ProjectData.map((item, index) => {
                      return <ProjPreviewItem onClick={() => {
                        setIsProjectPopupVisible(true)
                        setPopupProject(item);
                      }} data={item} key={index} />
                    })
                  }
              />
          <a href='#' className='gnvPPWCarouselLink'>{LocalizationTexts.PROJECTS_SEE_ALL[cookies.lang]}</a>
          </div>

          <div className='gnvPPWMethodBox'>
            <a href='#'><p>{LocalizationTexts.PROJECTS_LEARN_MORE_WM_PREFIX[cookies.lang]} <u>{LocalizationTexts.FOOTER_WORKING_METHOD[cookies.lang]}</u></p></a>
          </div>

        </div>
        
        <div>
          <div id='careers' className='gnvTitleContainer'>
            <div className='gnvTitleBoxRight'>
              <div className='gnvTBSquare'/>
              <div className='gnvTBline'/>
              <h1>{LocalizationTexts.MENU_CAREERS[cookies.lang]}</h1>
            </div>
          </div>
          <p className='gnvDescBox' style={{
              marginBottom: '40px',
              paddingTop: '200px'
            }}>
            {LocalizationTexts.CAREERS_INTRO_TEXT[cookies.lang]}
            </p>

          <div className='gnvOpenPos'>
            <h2>{LocalizationTexts.CAREERS_OPEN_POSITIONS[cookies.lang]}</h2>
            <Spacer y={3}/>
            <p className='gnvOP-nopos'>{LocalizationTexts.CAREERS_NOT_OP_ATM[cookies.lang]}</p>
            <Spacer y={3}/>
            <p className='gnvOP-random'>{LocalizationTexts.CAREERS_ENCOURAGE_APPLY_TEXT[cookies.lang]}</p>

            <div className='gnvOpenPosLineLeft'/>
            <div className='gnvOpenPosLineRight'/>
          </div>

          <a href='mailto:careers@ginevar.com'><button className='gnvDescBoxButton'>{LocalizationTexts.CAREERS_APPLY[cookies.lang]}</button></a>
        </div>

        <div className='gnvPinkBG'>
          <div id='contact' className='gnvTitleContainer'>
            <div className='gnvTitleBox'>
              <div className='gnvTBSquare'/>
              <h1>{LocalizationTexts.MENU_CONTACT[cookies.lang]}</h1>
              <div className='gnvTBline'/>
            </div>
          </div>
            <Spacer y={5}/>
            <p className='gnvDescBox gnvDescBoxRight' style={{
              marginTop: '140px',
              marginBottom: '40px'
            }}>
            {LocalizationTexts.CONTACT_HERO_A[cookies.lang]}
            <br/>
            {LocalizationTexts.CONTACT_HERO_B[cookies.lang]}
            </p>

            <br/>

            <a href='mailto:contact@ginevar.com'><button className='gnvDescBoxButton gnvDescBoxButtonRight'>{LocalizationTexts.CONTACT_CONTACT_US[cookies.lang]}</button></a>
        </div>

      </main>

      <Footer/>
      <Modal closeButton
        aria-labelledby="modal-title"
        width='90%'
        open={isProjectPopupVisible}
        onClose={() => setIsProjectPopupVisible(false)}>
          <Modal.Header>

          <div style={{textAlign: 'left'}}>
          <h4 style={{width: '100%', textAlign: 'center'}}>{popupProject?.title[cookies.lang] ?? ''}</h4>
          
          <p style={{width: '100%'}}>{popupProject?.short[cookies.lang]} {popupProject?.description[cookies.lang]}</p>
          <p><b>Link:</b> <a href={popupProject?.link}>{popupProject?.link}</a></p>
          {getBadge(popupProject?.category)}
          </div>
           
          </Modal.Header>
          <Modal.Body>
            
          <AliceCarousel
                  autoPlay
                  infinite={true}
                  autoPlayDirection={'ltr'}
                  animationDuration={2500}
                  disableButtonsControls={true}
                  disableDotsControls={true}
                  // mouseTracking
                  responsive={{
                    0: { items: 1 },
                    568: { items: 1 },
                    1024: { items: 2 },
                }}
                  items={
                    popupProject?.assets.map((item, index) => {
                      return <div className='popupImageContainer'>
                        <a href={`/assets/projectsData/${item}`} target='_blank'><img src={`/assets/projectsData/${item}`} alt={`${popupProject?.title} ${index}`} key={index}/></a>
                      </div>
                    })
                  }
              />
          </Modal.Body>
          <Modal.Footer>
          <Button auto flat color="error" onPress={() => setIsProjectPopupVisible(false)}>
          {LocalizationTexts.MODAL_CLOSE[cookies.lang]}
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
