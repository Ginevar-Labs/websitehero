import Head from 'next/head'
import Image from 'next/image'
import { Grid, Card, Text, Link, Navbar, Dropdown } from '@nextui-org/react';
import { icons } from "./icons.js";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import LocalizationTexts from '../localization/texts.js'

export default function Home({ origin }) {
    const [cookies, setCookie] = useCookies(['lang']);
    const collapseItems = [
    {
        code: 'index-wwd',
        name: LocalizationTexts.MENU_WHATWEDO[cookies.lang],
        link: '#'
    },
    {
        code: 'software',
        name: 'Software',
        link: '#'
    },
    {
        code: 'index-work',
        name: LocalizationTexts.MENU_WORK[cookies.lang],
        link: '#'
    },
    {
        code: 'index-careers',
        name: LocalizationTexts.MENU_CAREERS[cookies.lang],
        link: '#'
    },
    {
        code: 'index-contact',
        name: LocalizationTexts.MENU_CONTACT[cookies.lang],
        link: '#'
    },
    ];
  
    const changeLanguage = (langcode) => {
        setCookie('lang', langcode, { path: '/' });
        alert(LocalizationTexts.MENU_LANGUAGE_CHANGED[cookies.lang])
    }

  return (
    <>
        <Head>
            <title>Ginevar - Empowering businesses with technology</title>
            <meta name="description" content="Ginevar - Empowering businesses with technology" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <header>
            <Navbar className='navbar-custom' variant='sticky'>
                <Navbar.Brand>
                    <Navbar.Toggle className='navbar-custom-toggle' aria-label="toggle navigation" css={{
                    marginRight: '20px'
                    }}/>
                    <Image width={200} height={30} src='/assets/logo_ginevar_hd.png'/>
                </Navbar.Brand>
                <Navbar.Content  
                    // enableCursorHighlight 
                    activeColor="secondary" 
                    hideIn="sm" 
                    variant="highlight-rounded"
                >
                    {collapseItems.map((item, index) => (
                        <Navbar.Link key={index} isActive={item.code == origin} href={item.link}>{item.name}</Navbar.Link>
                        ))}
                    <Dropdown isBordered>
                            <Navbar.Item>
                                <Dropdown.Button
                                auto
                                light
                                css={{
                                  px: 0,
                                  dflex: "center",
                                  svg: { pe: "none" },
                                }}
                                iconRight={icons.chevron}
                                ripple={false}
                                >
                                    {LocalizationTexts.MENU_LANGUAGE[cookies.lang]}
                                </Dropdown.Button>
                            </Navbar.Item>
                            <Dropdown.Menu
                                aria-label="ACME features"
                                css={{
                                    $$dropdownMenuWidth: "100px",
                                    $$dropdownItemHeight: "50px",
                                    "& .nextui-dropdown-item": {
                                    py: "$4",
                                    // dropdown item left icon
                                    svg: {
                                        color: "$secondary",
                                        mr: "$4",
                                    },
                                    // dropdown item title
                                    "& .nextui-dropdown-item-content": {
                                        w: "100%",
                                        fontWeight: "$semibold",
                                    },
                                    },
                                }}
                                
                                >
                                <Dropdown.Item
                                    key="english"
                                    icon={icons.scale}
                                >
                                    <div onClick={() => {changeLanguage('en')}}>
                                        {LocalizationTexts.MENU_LANG_ENGLISH[cookies.lang]}
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    key="spanish"
                                    icon={icons.activity}
                                >
                                    <div onClick={() => {changeLanguage('es')}}>
                                        {LocalizationTexts.MENU_LANG_SPANISH[cookies.lang]}
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    key="italian"
                                    icon={icons.flash}
                                >
                                    <div onClick={() => {changeLanguage('it')}}>
                                        {LocalizationTexts.MENU_LANG_ITALIAN[cookies.lang]}
                                    </div>
                                </Dropdown.Item>
                                </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>
                <Navbar.Collapse style={{
                    zIndex: '9999',
                    marginTop: '20px'
                }}>
                    {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={index}>
                        <Link
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                        href={item.link}
                        >
                        {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                    ))}
                    <Navbar.CollapseItem>
                        <Link
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                        href='#'
                        >
                            {LocalizationTexts.MENU_CHANGE_LANGUAGE[cookies.lang]}
                        </Link>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>
            </Navbar>
        </header>
    </>
  )
}
