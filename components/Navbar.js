import Head from 'next/head'
import Image from 'next/image'
import { Grid, Card, Text, Link, Navbar, Dropdown } from '@nextui-org/react';
import { icons } from "./icons.js";
import { useState } from 'react';
import { useCookies } from 'react-cookie';
import LocalizationTexts from '../localization/texts.js'
export default function Home({ origin, onGoLink }) {
    const [cookies, setCookie] = useCookies(['lang']);
    const collapseItems = [
    {
        code: 'index-wwd',
        name: LocalizationTexts.MENU_WHATWEDO[cookies.lang],
        link: '#what-we-do'
    },
    {
        code: 'index-work',
        name: LocalizationTexts.MENU_WORK[cookies.lang],
        link: '#projects-and-past-work'
    },
    // {
    //     code: 'software',
    //     name: LocalizationTexts.MENU_SOFTWARE[cookies.lang],
    //     link: '#software'
    // },
    {
        code: 'index-careers',
        name: LocalizationTexts.MENU_CAREERS[cookies.lang],
        link: '#careers'
    },
    {
        code: 'index-contact',
        name: LocalizationTexts.MENU_CONTACT[cookies.lang],
        link: '#contact'
    },
    ];
  
    const changeLanguage = (langcode) => {
        setCookie('lang', langcode, { path: '/' });
        alert(LocalizationTexts.MENU_LANGUAGE_CHANGED[cookies.lang])
    }

  return (
    <>
        <Head>
            <title>{LocalizationTexts.META_TITLE[cookies.lang]}</title>
            <meta name="description" content={LocalizationTexts.META_DESCRIPTION[cookies.lang]}/>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/assets/squared_logo.png" />
        </Head>

        <header>
            <div style={{
                boxSizing: 'border-box',
                maxWidth: '100%'
            }}>
                <Navbar shouldHideOnScroll className='navbar-custom' variant='sticky'>
                <Navbar.Brand>
                    <Navbar.Toggle className='navbar-custom-toggle' aria-label="toggle navigation" css={{
                    marginRight: '20px'
                    }}/>
                    <Link href='/'><Image alt='Ginevar logo' width={200} height={30} src='/assets/logo_ginevar_hd.png'/></Link>
                </Navbar.Brand>
                <Navbar.Content  
                    // enableCursorHighlight 
                    activeColor="secondary" 
                    hideIn="sm" 
                    variant="highlight-rounded"
                    className='navbar-content-custom'
                >
                    {collapseItems.map((item, index) => (
                        <Navbar.Link className='navbarItemsLinks' onClick={() => {
                            onGoLink(item.code)
                        }} key={index} isActive={item.code == origin} href={item.link}>{item.name}</Navbar.Link>
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
                                  fontSize: '1.2em !important'
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
                                    <div style={{fontSize: '1.2em'}} onClick={() => {changeLanguage('en')}}>
                                        {LocalizationTexts.MENU_LANG_ENGLISH[cookies.lang]}
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    key="spanish"
                                    icon={icons.activity}
                                >
                                    <div style={{fontSize: '1.2em'}} onClick={() => {changeLanguage('es')}}>
                                        {LocalizationTexts.MENU_LANG_SPANISH[cookies.lang]}
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item
                                    key="italian"
                                    icon={icons.flash}
                                >
                                    <div style={{fontSize: '1.2em'}} onClick={() => {changeLanguage('it')}}>
                                        {LocalizationTexts.MENU_LANG_ITALIAN[cookies.lang]}
                                    </div>
                                </Dropdown.Item>
                                </Dropdown.Menu>
                    </Dropdown>
                </Navbar.Content>
                <Navbar.Collapse style={{
                    zIndex: '9999',
                    marginTop: '50px'
                }}>
                    {collapseItems.map((item, index) => (
                    <Navbar.CollapseItem key={index}>
                        <Link
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                        href={item.link}
                        onClick={() => {
                            onGoLink(item.code);
                            document.body.style.overflow = "";
                        }}
                        >
                        {item.name}
                        </Link>
                    </Navbar.CollapseItem>
                    ))}
                    <hr/><br/>
                    <Navbar.CollapseItem>
                        <Link
                        color="inherit"
                        css={{
                            minWidth: "100%",
                            color: 'gray'
                        }}
                        href='#'
                        >
                            {LocalizationTexts.MENU_CHANGE_LANGUAGE[cookies.lang]}:
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                        href='#'
                        onClick={() => {
                            changeLanguage('en');
                            return;
                        }}
                        >
                            {LocalizationTexts.MENU_LANG_ENGLISH[cookies.lang]}
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                        href='#'
                        onClick={() => {
                            changeLanguage('es');
                            return;
                        }}
                        >
                            {LocalizationTexts.MENU_LANG_SPANISH[cookies.lang]}
                        </Link>
                    </Navbar.CollapseItem>
                    <Navbar.CollapseItem>
                        <Link
                        color="inherit"
                        css={{
                            minWidth: "100%",
                        }}
                        href='#'
                        onClick={() => {
                            changeLanguage('it');
                            return;
                        }}
                        >
                            {LocalizationTexts.MENU_LANG_ITALIAN[cookies.lang]}
                        </Link>
                    </Navbar.CollapseItem>
                </Navbar.Collapse>
            </Navbar>
            </div>
        </header>
    </>
  )
}
