import { useState, useEffect } from 'react'

const CurrencyPrices = () => {
    const [btc = -1, setBTC] = useState<number>()
    const [eth = -1, setETH] = useState<number>()
    const [brl = -1, setBRL] = useState<number>()
    const [ibov = -1, setIBOV] = useState<number>()

    useEffect(() => {
        fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd')
            .then(response => response.json())
            .then(response => {
                setBTC(response.bitcoin.usd)
                setETH(response.ethereum.usd)
            })

        fetch('https://api.hgbrasil.com/finance/quotations?format=JSON-CORS&key=c00d2df8')
            .then(response => response.json())
            .then(response => {
                setBRL(response.results.currencies.USD.buy)
                setIBOV(response.results.stocks.IBOVESPA.points)
            })
    }, [])

    return (
        <div className='currencyPrices topBarItem'>
            <div>
                <div>
                    1 <b>BTC</b> = US$ {Math.round(btc)}
                </div>
                <div>
                    1 <b>ETH </b>= US$ {Math.round(eth)}
                </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <div>
                <div>
                    US$ 1 = <b>R$</b> {brl}
                </div>
                <div>
                    <b>IBOV</b>: {ibov}
                </div>
            </div>
        </div>
    )
}

export default CurrencyPrices