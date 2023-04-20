import Head from 'next/head'
import Image from 'next/image'
import { Grid, Card, Text, Link, Navbar, Dropdown } from '@nextui-org/react';
import { icons } from "./icons.js";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import LocalizationTexts from '../localization/texts.js'

export default function BigProjPreviewItem({ onClick, data }) {
    const [cookies, setCookie] = useCookies(['lang']);

  return (
    <div className='bigProjPrevItemContainer'>
        <div onClick={() => {
          onClick();
        }} className='bigProjPrevItem'>
          <h1 className='pPIvistitle'>{data.title[cookies.lang]}</h1>
          <p className='pPIvisdesc'>{data.short[cookies.lang]} {data.description[cookies.lang]}</p>
          <img className='pPIimage' src={'/assets/projectsData/'+data.assets[0]}/>
        </div>
    </div>
  )
}
