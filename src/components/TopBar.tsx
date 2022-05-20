import { Col } from 'react-bootstrap';

import Weather from './Weather'
import DarkMode from './DarkMode'
import CurrencyPrices from './CurrencyPrices'

const TopBar = () => {
    return (
        <Col className='topBar'>
            <Weather />
            <CurrencyPrices />
            <DarkMode />
        </Col>
    )
}

export default TopBar