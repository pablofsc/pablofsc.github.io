import ProjectItem from './ProjectItem';

import ttt from '/src/imgs/tic-tac-toe.png'
import conway from '/src/imgs/conway.png'
import reverse from '/src/imgs/reverse.png'

const ProjectList = () => {
    return (
        <div>
            <ProjectItem
                title="Agregador de Busca Reversa por Imagem"
                description="Junta os principais motores de busca reversa em uma única página. Faz uso de uma API restless feita por mim, hospedada em um servidor Heroku. As imagens carregadas do computador ficam salvas neste servidor de forma temporária, para que os buscadores possam acessar a imagem através da internet."
                imgsrc={reverse}
                id="reverse-image-search"
                technologies={['react', 'css', 'ts', 'heroku', 'express', 'js']}
                backendID="image-store"
                backendTitle="API"
            />
            <ProjectItem
                title="Conway's Game of Life"
                description="Implementação do Jogo da Vida de Conway para navegador. Trata-se de um autômato celular, em que as células na matriz interagem obedecendo a um conjunto pequeno de regras, gerando comportamentos aparentemente ensaiados."
                imgsrc={conway}
                id="conway"
                technologies={['html', 'css', 'js', 'bootstrap', 'jquery']}
            />
            <ProjectItem
                title="Jogo da Velha"
                description="Simples jogo da velha com IA para jogar contra o usuário. A IA, feita por mim, é puramente estatística e não é invencível. Este foi o meu primeiro projeto Web. Também desenvolvi uma versão em C, disponível no meu GitHub."
                imgsrc={ttt}
                id="tic-tac-toe"
                technologies={['html', 'css', 'js']}
            />
        </div>
    )
}

export default ProjectList