import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { ReactElement } from 'react';
import { Container, Row } from 'react-bootstrap';

import TopBar from './components/TopBar';
import MainContent from './components/MainContent';
import SideBar from './components/Sidebar';

const App = (): ReactElement => {
    return (
        <div className='App'>
            <Container>
                <Row>
                    <TopBar />
                </Row>
                <Row>
                    <SideBar />
                    <MainContent />
                </Row>
            </Container>
        </div>
    );
};

export default App;
