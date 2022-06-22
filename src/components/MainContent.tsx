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
                    Graduando no último ano de <b>Engenharia de Computação</b> pelo <b>Centro Universitário de Brasília.</b>
                </p>
                <p>Estou me especializando na área de desenvolvimento web.</p>
            </div>

            <div className='textArea fades'>
                <h2>Projetos</h2>
                <ProjectList />
            </div>
        </Col>
    );
};

export default MainContent;
