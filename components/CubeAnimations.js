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
      <div className='cubeAnimated cubeAnimatedAlpha' style={{
        top: '62%'
      }}/>
      <div className='cubeAnimated cubeAnimatedLogo'/>
      <div className='cubeAnimated cubeAnimatedAlpha' style={{
        left: '50vw',
        top: '21%',
        animationDelay: '3.5s'
      }}/>
      <div className='cubeAnimated cubeAnimatedGamma' style={{
        left: '35vw',
        top: '29%',
        animationDelay: '0.9s'
      }}/>
      <div className='cubeAnimated cubeAnimatedDelta' style={{
        left: '80vw',
        top: '45%',
        animationDelay: '3.1s'
      }}/>
      <div className='cubeAnimated cubeAnimatedDelta' style={{
        left: '10vw',
        top: '50%'
      }}/>
      <div className='cubeAnimated cubeAnimatedLogo' style={{
        left: '20vw',
        top: '45%'
      }}/>
      <div className='cubeAnimated cubeAnimatedLogo' style={{
        left: '60vw',
        top: '49%'
      }}/>
      <div className='cubeAnimated cubeAnimatedDelta' style={{
        left: '20vw',
        top: '55%',
        animationDelay: '0.6s'
      }}/>
      <div className='cubeAnimated cubeAnimatedGamma' style={{
        left: '70vw',
        top: '59%',
        animationDelay: '4.5s'
      }}/>
      <div className='cubeAnimated cubeAnimatedDelta' style={{
        left: '40vw',
        top: '69%',
        animationDelay: '2.2s'
      }}/>
      <div className='cubeAnimated cubeAnimatedAlpha' style={{
        left: '75vw',
        top: '72%',
        animationDelay: '1.5s'
      }}/>
      <div className='cubeAnimated cubeAnimatedDelta' style={{
        left: '20vw',
        top: '79%',
        animationDelay: '0.9s'
      }}/>
      <div className='cubeAnimated cubeAnimatedLogo' style={{
        left: '40vw',
        top: '85%'
      }}/>
      <div className='cubeAnimated cubeAnimatedBeta' style={{
        left: '80vw',
        top: '88%',
        animationDelay: '0s'
      }}/>
      <div className='cubeAnimated cubeAnimatedBeta' style={{
        left: '20vw',
        top: '90%',
        animationDelay: '1.1s'
      }}/>
    </>
  )
}
