import {Button, Dropdown, Link, Navbar, Switch, Text} from '@nextui-org/react';
import React from 'react';
import {ModalLogin} from '../modal';
import {icons} from './icons';
import {AcmeLogo} from './logo';
import {useTheme as useNextTheme} from 'next-themes';
import {useTheme} from '@nextui-org/react';
import {GithubIcon} from '../icons/GithubIcon';

export const Nav = () => {
   const {setTheme} = useNextTheme();
   const {isDark, type} = useTheme();
   const collapseItems = [
      'Features',
      'Solutions',
      'Pricing',
      'About Us',
      'Contact',
   ];
   return (
      <Navbar
         isBordered
         css={{
            'overflow': 'hidden',
            '& .nextui-navbar-container': {
               background: '$background',
               borderBottom: 'none',
            },
         }}
      >
         <Navbar.Brand>
            <Navbar.Toggle aria-label="toggle navigation" showIn="xs" />
            <AcmeLogo />
            <Text b color="inherit" hideIn="xs">
               BoardHub
            </Text>
            <Navbar.Content
               hideIn="sm"
               css={{
                  pl: '6rem',
               }}
            >
               <Dropdown isBordered>
                  <Navbar.Item>
                     <Dropdown.Button
                        auto
                        light
                        css={{
                           px: 0,
                           dflex: 'center',
                           svg: {pe: 'none'},
                        }}
                        iconRight={icons.chevron}
                        ripple={false}
                     >
                        Features
                     </Dropdown.Button>
                  </Navbar.Item>
                  <Dropdown.Menu
                     aria-label="BoardHub features"
                     css={{
                        '$$dropdownMenuWidth': '340px',
                        '$$dropdownItemHeight': '70px',
                        '& .nextui-dropdown-item': {
                           'py': '$4',
                           'svg': {
                              color: '$secondary',
                              mr: '$4',
                           },
                           '& .nextui-dropdown-item-content': {
                              w: '100%',
                              fontWeight: '$semibold',
                           },
                        },
                     }}
                  >
                     <Dropdown.Item
                        key="agenda_management"
                        showFullDescription
                        description="Create and manage meeting agendas with automated time tracking."
                        icon={icons.scale}
                     >
                        Agenda Management
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="digital_board_packs"
                        showFullDescription
                        description="Compile and distribute secure digital board materials."
                        icon={icons.activity}
                     >
                        Digital Board Packs
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="task_tracking"
                        showFullDescription
                        description="Assign, track, and manage action items and resolutions."
                        icon={icons.flash}
                     >
                        Task Tracking
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="meeting_minutes"
                        showFullDescription
                        description="Automated minutes creation with approval workflows."
                        icon={icons.server}
                     >
                        Meeting Minutes
                     </Dropdown.Item>
                     <Dropdown.Item
                        key="advanced_security"
                        showFullDescription
                        description="Enterprise-grade encryption and access controls."
                        icon={icons.user}
                     >
                        Advanced Security
                     </Dropdown.Item>
                  </Dropdown.Menu>
               </Dropdown>
               <Navbar.Link isActive href="#">
                  Solutions
               </Navbar.Link>
               <Navbar.Link href="#">Pricing</Navbar.Link>
               <Navbar.Link href="#">About Us</Navbar.Link>
            </Navbar.Content>
         </Navbar.Brand>

         <Navbar.Collapse>
            {collapseItems.map((item, index) => (
               <Navbar.CollapseItem key={item}>
                  <Link
                     color="inherit"
                     css={{
                        minWidth: '100%',
                     }}
                     href="#"
                  >
                     {item}
                  </Link>
               </Navbar.CollapseItem>
            ))}
            <Navbar.CollapseItem>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="#"
               >
                  <GithubIcon />
               </Link>
            </Navbar.CollapseItem>
            <Navbar.CollapseItem>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.CollapseItem>
         </Navbar.Collapse>
         <Navbar.Content>
            <ModalLogin />

            <Navbar.Item>
               <Button auto flat href="#">
                  Request a Demo
               </Button>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Link
                  color="inherit"
                  css={{
                     minWidth: '100%',
                  }}
                  target="_blank"
                  href="#"
               >
                  <GithubIcon />
               </Link>
            </Navbar.Item>
            <Navbar.Item hideIn={'xs'}>
               <Switch
                  checked={isDark}
                  onChange={(e) =>
                     setTheme(e.target.checked ? 'dark' : 'light')
                  }
               />
            </Navbar.Item>
         </Navbar.Content>
      </Navbar>
   );
};
