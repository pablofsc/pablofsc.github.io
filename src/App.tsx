import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { Container, Row } from 'react-bootstrap';

import Sidebar from './components/Sidebar'
import MainContent from './components/MainContent'


function App() {
    const [count, setCount] = useState(0)

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
