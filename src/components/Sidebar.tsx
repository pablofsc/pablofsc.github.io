import '../styles/SideBar.css';

import { ReactElement } from 'react';
import { Col, ListGroup, Image } from 'react-bootstrap';

import AboutMe from './AboutMe';
import SocialNetworkAnchor from './SocialNetworkAnchor';
import profilePicture from '/src/imgs/me.jpg';

const SideBar = (): ReactElement => {
    return (
        <Col lg='3'>
            <Image className='sidebarItem photo hideOnMobile' src={profilePicture} />

            <div className='sidebarItem hasDefaultBackground fades tridimensional aboutMeWrapper'>
                <div>
                    <Image className='sidebarItem photo showOnlyOnMobile' src={profilePicture} />
                </div>
                <AboutMe />
            </div>

            <div className='sidebarItem hasDefaultBackground fades tridimensional'>
                <ListGroup className='networksList'>
                    <SocialNetworkAnchor description='LinkedIn' website='https://www.linkedin.com/in/pablofsc' icon='linkedin' />
                    <SocialNetworkAnchor description='GitHub' website='https://github.com/pablofsc' icon='github' />
                    <SocialNetworkAnchor description='Telegram' website='https://t.me/pablofsc' icon='telegram' />
                    <SocialNetworkAnchor description='Email' website='mailto:pablofsc@outlook.com' icon='email' />
                </ListGroup>
            </div>
        </Col>
    );
};

export default SideBar;
