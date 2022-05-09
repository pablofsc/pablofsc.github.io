import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row } from 'react-bootstrap';

import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'

function App() {
    return (
        <div className="App">
            <Container>
                <Row>
                    <Sidebar />
                    <MainContent />
                </Row>
            </Container>
        </div>
    )
}

export default App
