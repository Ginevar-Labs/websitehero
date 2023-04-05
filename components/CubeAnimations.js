import Head from 'next/head'
import Image from 'next/image'
import { Grid, Card, Text, Link, Navbar, Dropdown } from '@nextui-org/react';
import { icons } from "./icons.js";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import LocalizationTexts from '../localization/texts.js'

export default function CubeAnimations({  }) {
    
  return (
    <>
        <div className='cubeAnimated cubeAnimatedLogo'/>
      <div className='cubeAnimated cubeAnimatedGamma'/>
      <div className='cubeAnimated cubeAnimatedBeta'/>
      <div className='cubeAnimated cubeAnimatedAlpha'/>
      <div className='cubeAnimated cubeAnimatedLogo'/>
      <div className='cubeAnimated cubeAnimatedAlpha' style={{
        left: '50vw',
        top: '180vh',
        animationDelay: '3.5s'
      }}/>
      <div className='cubeAnimated cubeAnimatedGamma' style={{
        left: '35vw',
        top: '280vh'
      }}/>
      <div className='cubeAnimated cubeAnimatedDelta' style={{
        left: '80vw',
        top: '260vh'
      }}/>
      <div className='cubeAnimated cubeAnimatedDelta' style={{
        left: '10vw',
        top: '330vh'
      }}/>
      <div className='cubeAnimated cubeAnimatedLogo' style={{
        left: '20vw',
        top: '220vh'
      }}/>
      <div className='cubeAnimated cubeAnimatedLogo' style={{
        left: '60vw',
        top: '370vh'
      }}/>
      <div className='cubeAnimated cubeAnimatedDelta' style={{
        left: '20vw',
        top: '400vh'
      }}/>
      <div className='cubeAnimated cubeAnimatedGamma' style={{
        left: '70vw',
        top: '440vh'
      }}/>
      <div className='cubeAnimated cubeAnimatedDelta' style={{
        left: '40vw',
        top: '470vh'
      }}/>
      <div className='cubeAnimated cubeAnimatedAlpha' style={{
        left: '75vw',
        top: '510vh',
        animationDelay: '1.5s'
      }}/>
      <div className='cubeAnimated cubeAnimatedDelta' style={{
        left: '20vw',
        top: '520vh'
      }}/>
      <div className='cubeAnimated cubeAnimatedLogo' style={{
        left: '40vw',
        top: '560vh'
      }}/>
      <div className='cubeAnimated cubeAnimatedBeta' style={{
        left: '80vw',
        top: '590vh',
        animationDelay: '0s'
      }}/>
      <div className='cubeAnimated cubeAnimatedBeta' style={{
        left: '20vw',
        top: '630vh',
        animationDelay: '1.1s'
      }}/>
    </>
  )
}
