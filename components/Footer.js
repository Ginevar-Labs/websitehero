import Head from 'next/head'
import Image from 'next/image'
import { Grid, Card, Text, Link, Navbar, Dropdown, Spacer } from '@nextui-org/react';
import { icons } from "./icons.js";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import LocalizationTexts from '../localization/texts.js'

export default function Footer({  }) {
    const [cookies, setCookie] = useCookies(['lang']);

    const changeLanguage = (langcode) => {
        setCookie('lang', langcode, { path: '/' });
        alert(LocalizationTexts.MENU_LANGUAGE_CHANGED[cookies.lang])
    }

  return (
    <footer>
    <div className='gnvFooterContainer'>
      <div className='gnvFooterBanner'>
        <img src='/assets/squared_logo.png'/>
        <p><b>Ginevar</b></p>
        <p>{LocalizationTexts.LOCATION[cookies.lang]}</p>
        {/* <p>ID</p> */}
      </div>
      <div className='gnvFooterLinksColumn'>
        <div className='gnvFLCLeft'>
          <a href='#'><h1>{LocalizationTexts.MENU_WHATWEDO[cookies.lang]}</h1></a>
          <a href='#'><p>{LocalizationTexts.WWD_WEBSITES[cookies.lang]}</p></a>
          <a href='#'><p>{LocalizationTexts.WWD_MOTION_GRAPHICS[cookies.lang]}</p></a>
          <a href='#'><p>{LocalizationTexts.WWD_UX_UI[cookies.lang]}</p></a>
          <a href='#'><p>{LocalizationTexts.WWD_BACKEND[cookies.lang]}</p></a>
        </div>
        <div className='gnvFLCRight'>
          <div style={{height: '30px'}}/>
          <a href='#'><p>{LocalizationTexts.WWD_MOBILE_APPS[cookies.lang]}</p></a>
          <a href='#'><p>{LocalizationTexts.WWD_SMART_CONTRACTS[cookies.lang]}</p></a>
          <a href='#'><p>{LocalizationTexts.WWD_GAMES[cookies.lang]}</p></a>
          <a href='#'><p>{LocalizationTexts.WWD_CONSULTANCY[cookies.lang]}</p></a>
        </div>
      </div>
      <div className='gnvFooterLinksColumn'>
      <div className='gnvFLCLeft'>
        {/* <a href='#'><h1>{LocalizationTexts.MENU_SOFTWARE[cookies.lang]}</h1></a> */}
        {/* <div style={{height: '30px'}}/> */}
        <a href='#'><h1>{LocalizationTexts.MENU_WORK[cookies.lang]}</h1></a>
          <a href='#'><p>{LocalizationTexts.FOOTER_WORKING_METHOD[cookies.lang]}</p></a>
          <a href='#'><p>{LocalizationTexts.FOOTER_WORK_PORTFOLIO[cookies.lang]}</p></a>
        <div style={{height: '30px'}}/>
          <a href='#'><h1>{LocalizationTexts.MENU_CAREERS[cookies.lang]}</h1></a>
      </div>
      <div className='gnvFLCRight'>
      
        <a href='#'><h1>{LocalizationTexts.MENU_CONTACT[cookies.lang]}</h1></a>
        <div style={{height: '30px'}}/>
        <a onClick={() => changeLanguage('en')}><p>{LocalizationTexts.MENU_LANG_ENGLISH[cookies.lang]}</p></a>
        <a onClick={() => changeLanguage('es')}><p>{LocalizationTexts.MENU_LANG_SPANISH[cookies.lang]}</p></a>
        <a onClick={() => changeLanguage('it')}><p>{LocalizationTexts.MENU_LANG_ITALIAN[cookies.lang]}</p></a>
      </div>
      </div>
    </div>
    <br/>
    <Spacer y={15}/>
    <br/>
    <div style={{textAlign: 'center',float:'left', width: '100%',marginBottom: '40px', marginTop: '0px', opacity: '0.6'}}>
      <p>© Ginevar 2023</p>
    </div>
  </footer>
  )
}
