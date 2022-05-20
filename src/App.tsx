import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row } from 'react-bootstrap';

import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'
import TopBar from './components/TopBar'

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <TopBar />
                </Row>
                <Row>
                    <h1 className='fades'>
                        pablofsc.me
                    </h1>
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
