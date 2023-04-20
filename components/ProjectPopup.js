import Head from 'next/head'
import Image from 'next/image'
import { Grid, Card, Text, Link, Navbar, Dropdown } from '@nextui-org/react';
import { icons } from "./icons.js";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import LocalizationTexts from '../localization/texts.js'
import { Badge, Spacer, Modal, Button } from '@nextui-org/react';
import AliceCarousel from 'react-alice-carousel';

export default function ProjectPopup({ popupProject, isProjectPopupVisible, setIsProjectPopupVisible }) {
    const [cookies, setCookie] = useCookies(['lang']);

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
    <Modal closeButton
        aria-labelledby="modal-title"
        width='90%'
        open={isProjectPopupVisible}
        onClose={() => setIsProjectPopupVisible(false)}>
          <Modal.Header>

          <div style={{textAlign: 'left'}}>
          <h2 style={{width: '100%', textAlign: 'center'}}>{popupProject?.title[cookies.lang] ?? ''}</h2>
          
          <p style={{width: '100%', fontSize: '22px'}}>{popupProject?.short[cookies.lang]} {popupProject?.description[cookies.lang]}</p>
          <br/>
          <p style={{fontSize: '22px'}}><b>Link:</b> <a href={popupProject?.link} target='_blank'>{popupProject?.link}</a></p>
          <br/>
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
                      return <div key={index} className='popupImageContainer'>
                        <a href={`/assets/projectsData/${item}`} target='_blank'><img src={`/assets/projectsData/${item}`} alt={`${popupProject?.title} ${index}`} key={index}/></a>
                      </div>
                    })
                  }
              />
          </Modal.Body>
          <Modal.Footer>
          <Button auto flat color="error" style={{
            fontSize: '20px'
          }} onPress={() => setIsProjectPopupVisible(false)}>
          {LocalizationTexts.MODAL_CLOSE[cookies.lang]}
          </Button>
        </Modal.Footer>
      </Modal>
  )
}
