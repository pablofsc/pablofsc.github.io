import '../styles/ProjectList.css';

import { ReactElement } from 'react';

import ProjectItem from './ProjectItem';
import ttt from '/src/imgs/tic-tac-toe.png';
import conway from '/src/imgs/conway.png';
import reverse from '/src/imgs/reverse.png';
import inventory from '/src/imgs/inventory.png';
import ans from '/src/imgs/ans.png';
import quatro from '/src/imgs/quatro.png'

const ProjectList = (): ReactElement => {
    return (
        <div>
            <ProjectItem
                title='Quatro'
                description='Quatro é uma recriação do familiar jogo de cartas que tem quatro cores e números de 1 a 9. Por enquanto, o jogo só pode ser jogado localmente, mas estou trabalhando em uma versão online.'
                imgsrc={quatro}
                id='quatro'
                technologies={['angular', 'ts']}
            />
            {/* <ProjectItem
                title='Lista de Operadoras ANS'
                description='Lista as operadoras de planos de saúdes brasileiras, com informações da Agência Nacional de Saúde Suplementar. Os dados ficam armazenados em um banco PostgreSQL hospedado no Heroku.'
                imgsrc={ans}
                id='operadoras-ans'
                technologies={['vue', 'bootstrap', 'js', 'heroku', 'node', 'postgres']}
                backendID='operadoras-ans-db'
                backendTitle='API'
            />
            <ProjectItem
                title='Sistema de Controle de Estoque'
                description='Simples sistema de controle de inventário conectado a um banco de dados PostgreSQL no Heroku. Possui sistema de cadastro de clientes e produtos, com funções de criação, edição e remoção de cadastros.'
                imgsrc={inventory}
                id='inventory-manager'
                technologies={['react', 'mui', 'ts', 'heroku', 'node', 'postgres']}
                backendID='inventory-db-node'
                backendTitle='API'
            />*/}
            <ProjectItem
                title='Agregador de Busca Reversa por Imagem'
                description='Junta os principais motores de busca reversa em uma única página. Faz uso de uma API restless feita por mim, hospedada em um servidor Heroku. As imagens carregadas do computador ficam salvas neste servidor de forma temporária, para que os buscadores possam acessar a imagem através da internet.'
                imgsrc={reverse}
                id='reverse-image-search'
                technologies={['react', 'css', 'ts', 'heroku', 'node']}
                backendID='image-store'
                backendTitle='API'
            /> 
            <ProjectItem
                title="Conway's Game of Life"
                description='Implementação do Jogo da Vida de Conway para navegador. Trata-se de um autômato celular, em que as células na matriz interagem obedecendo a um conjunto pequeno de regras, gerando comportamentos aparentemente ensaiados.'
                imgsrc={conway}
                id='conway'
                technologies={['html', 'bootstrap', 'js', 'jquery']}
            />
            <ProjectItem
                title='Jogo da Velha'
                description='Simples jogo da velha com IA para jogar contra o usuário. A IA, feita por mim, é puramente estatística e não é invencível. Este foi o meu primeiro projeto Web. Também desenvolvi uma versão em C, disponível no meu GitHub.'
                imgsrc={ttt}
                id='tic-tac-toe'
                technologies={['html', 'css', 'js']}
            />
        </div>
    );
};

export default ProjectList;
