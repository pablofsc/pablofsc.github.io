import { Col, ListGroup, Image } from 'react-bootstrap';
import AboutMe from './AboutMe';
import SocialNetworkAnchor from './SocialNetworkAnchor';
import profilePicture from '/src/imgs/me.jpg'

const Sidebar = () => {
    return (
        <Col lg='3'>
            <div className='area Sidebar' style={{ marginTop: 0 }}>
                <Image className='photo' src={profilePicture}></Image>
                <h5>Pablo Felipe Santos Carneiro</h5>
                <p><code><b>pablofsc</b></code></p>

                <AboutMe />
            </div>

            <div className='area Sidebar'>
                <ListGroup className='networksList'>
                    <SocialNetworkAnchor description='LinkedIn' website='https://www.linkedin.com/in/pablofsc' icon='linkedin' />
                    <SocialNetworkAnchor description='GitHub' website='https://github.com/pablofsc' icon='github' />
                    <SocialNetworkAnchor description='Telegram' website='https://t.me/pablofsc' icon='telegram' />
                    <SocialNetworkAnchor description='Email' website='mailto:mail@pablofsc.me' icon='email' />
                </ListGroup>
            </div>
        </Col>
    )
}

export default Sidebar