import '../styles/MainContent.css';

import { ReactElement } from 'react';
import { Col } from 'react-bootstrap';

import ProjectList from './ProjectList';

const MainContent = (): ReactElement => {
    return (
        <Col lg='9'>
            <div className='textArea fades'>
                <h1>Pablo Felipe Santos Carneiro</h1>

                <p>
                    Formado em <b>Engenharia de Computação</b> pelo <b>Centro Universitário de Brasília.</b>
                </p>

                <p>
                    Atualmente sou desenvolvedor full stack na <a href='https://dashcommerce.app/'>DashCommerce ↗</a>,
                    onde trabalho principalmente com Angular, Ionic, NestJS, PHP e Python.

                    <br />
                    <br />

                    As minhas atividades profissionais incluem: <br />

                    <ul>
                        <li>Diversas atualizações, inclusive de features, para aplicativo mobile e web</li>
                        <li>Geração automatizada de relatórios de vendas</li>
                        <li>Integração de banco de dados próprio a sistema de ERP</li>
                        <li>Desenvolvimento de plugin para WordPress</li>
                        <li>Deploy de backend em Docker e Docker Compose</li>
                        <li>Uso das plataformas Firebase e Google Cloud Functions</li>
                        <li>Análise de performance de website com Lighthouse</li>
                    </ul>

                    <p>
                        Trabalho regularmente com Git, integração com APIs REST e bancos de dados relacionais (SQL) e não relacionais (NoSQL).
                    </p>
                </p>
            </div>

            <div className='textArea fades'>
                <h2>Projetos Pessoais</h2>
                <ProjectList />
            </div>
        </Col>
    );
};

export default MainContent;
