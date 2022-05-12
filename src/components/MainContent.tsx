import { Col, Row } from 'react-bootstrap';
import ProjectList from './ProjectList';
import TechnologiesList from './TechnologiesList';
import Weather from './Weather'
import DarkMode from './DarkMode'
import CurrencyPrices from './CurrencyPrices'

const MainContent = () => {
    return (
        <Col lg="9">
            <div className='topBar' style={{ marginTop: 0 }}>
                <Weather />
                <CurrencyPrices />
                <DarkMode />
            </div>

            <div>
                <div className='textArea fades'>
                    <h2>
                        Bem vindo ao meu portfólio
                    </h2>

                    <p>
                        Meu nome é Pablo, estou cursando o último ano de Engenharia de Computação no Centro Universitário de Brasília.
                        <br />
                        Busco adquirir experiência na área de <b>Desenvolvimento Web</b>, front e back.
                    </p>

                    Estas são as tecnologias com que tenho alguma familiaridade:

                    <div className='knowledge'>
                        <TechnologiesList list={[
                            'html',
                            'css',
                            'js',
                            'ts',
                            'bootstrap',
                            'react',
                            'github',
                            'c']} size={40} />
                    </div>
                    Este portfolio foi feito com React e Bootstrap.
                </div>

                <div className='textArea fades'>
                    <h2>Meus projetos</h2>
                    <p>Tenho feito alguns projetos pequenos para estudar e conhecer tecnologias que me interessam. Estes são os mais legais:</p>
                    <ProjectList />
                </div>
            </div>
        </Col >
    )
}

export default MainContent