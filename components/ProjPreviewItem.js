import Head from 'next/head'
import Image from 'next/image'
import { Grid, Card, Text, Link, Navbar, Dropdown } from '@nextui-org/react';
import { icons } from "./icons.js";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import LocalizationTexts from '../localization/texts.js'

export default function ProjPreviewItem({  }) {
    const [cookies, setCookie] = useCookies(['lang']);

  return (
    <div className='projPrevItemContainer'>
        <div className='projPrevItem'>
          <h1 className='pPIvistitle'>ICAO for Pilots</h1>
          <p className='pPIvisdesc'>English-learning application for pilots, developed under IATA standards.</p>
          <div className='pPIhidden'>
            <p>Here it goes more text.</p>
            <p>Click here to find out more</p>
          </div>
          <img className='pPIimage' src='/assets/testScreenshot.png'/>
        </div>
    </div>
  )
}
