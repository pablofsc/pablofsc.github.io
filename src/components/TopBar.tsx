import '../styles/TopBar.css';

import { ReactElement } from 'react';
import { Col } from 'react-bootstrap';

import Weather from './Weather';
import DarkMode from './DarkMode';
import CurrencyPrices from './CurrencyPrices';

const TopBar = (): ReactElement => {
    return (
        <div>
            <Col className='topBar hideOnMobile'>
                <div className='topBarItem hasDefaultBackground fades tridimensional'>
                    <Weather />
                </div>
                <div className='topBarItem currencyPrices hasDefaultBackground fades tridimensional'>
                    <CurrencyPrices />
                </div>
                <div className='topBarItem hasDefaultBackground fades tridimensional'>
                    <DarkMode />
                </div>
            </Col>

            <Col className='topBar showOnlyOnMobile'>
                <div className='topBarItem currencyPrices hasDefaultBackground fades tridimensional'>
                    <CurrencyPrices />
                </div>
                <div className='topBarItem hasDefaultBackground fades tridimensional'>
                    <Weather />
                    <div className='expandSeparator' />
                    <DarkMode />
                </div>
            </Col>
        </div>
    );
};

export default TopBar;
