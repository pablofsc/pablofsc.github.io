import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row } from 'react-bootstrap';

import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import TopBar from './components/TopBar'
import TechnologiesList from './components/TechnologiesList';

function App() {
    const knowledge = [
        'html',
        'css',
        'js',
        'ts',
        'bootstrap',
        'react',
        'express',
        'heroku',
        'github'
    ]

    return (
        <div className="App">
            <Container>
                <Row>
                    <TopBar />
                </Row>
                <Row>
                    <div className='knowledge textArea fades hideOnMobile'>
                        <TechnologiesList list={knowledge} size={40} />
                    </div>

                    <div className='knowledge textArea fades showOnlyOnMobile'>
                        <TechnologiesList list={knowledge} size={30} />
                    </div>
                </Row>
                <Row>
                    <Sidebar />
                    <MainContent />
                </Row>
            </Container>
        </div>
    )
}

export default App
