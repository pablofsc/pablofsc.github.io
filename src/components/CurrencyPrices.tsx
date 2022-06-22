import { useState, useEffect, ReactElement } from 'react';

const CurrencyPrices = (): ReactElement => {
    const [btc = -1, setBTC] = useState<number>();
    const [eth = -1, setETH] = useState<number>();
    const [brl = -1, setBRL] = useState<number>();
    const [eur = -1, setEUR] = useState<number>();
    const [ibov = -1, setIBOV] = useState<number>();
    const [ifix = -1, setIFIX] = useState<number>();

    useEffect((): void => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
            .then((response) => response.json())
            .then((response) => {
                setBTC(response.bitcoin.usd);
                setETH(response.ethereum.usd);
            });

        fetch('https://api.hgbrasil.com/finance/quotations?format=json-cors&key=c00d2df8')
            .then((response) => response.json())
            .then((response) => {
                setBRL(response.results.currencies.USD.buy);
                setEUR(response.results.currencies.EUR.buy);
                setIBOV(response.results.stocks.IBOVESPA.points);
                setIFIX(response.results.stocks.IFIX.points);
            });
    }, []);

    return (
        <>
            <div>
                <div>
                    <b>$</b> 1 = <b>R$</b> {brl.toFixed(2)}
                </div>
                <div>
                    <b>€</b> 1 = <b>R$</b> {eur.toFixed(2)}
                </div>
            </div>
            <div>
                <div>
                    1 <b>BTC</b> = $ {Math.round(btc)}
                </div>
                <div>
                    1 <b>ETH </b>= $ {Math.round(eth)}
                </div>
            </div>
            <div>
                <div>
                    <b>IBOV</b>: {Math.round(ibov)}
                </div>
                <div>
                    <b>IFIX</b>: {Math.round(ifix)}
                </div>
            </div>
        </>
    );
};

export default CurrencyPrices;
