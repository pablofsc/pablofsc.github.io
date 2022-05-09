import ProjectCard from './ProjectCard';
import ttt from '/src/imgs/tic-tac-toe.png'
import conway from '/src/imgs/conway.png'
import portfolio from '/src/imgs/portfolio.png'
import reverse from '/src/imgs/reverse.png'

const ProjectList = () => {
    return (
        <div className='projectList'>
            <ProjectCard
                title="Jogo da Velha"
                description="Com IA para jogar contra. Meu primeiro projeto Web."
                imgsrc={ttt}
                link="https://pablofsc.me/tic-tac-toe"
                technologies={['html', 'css', 'js']}
            />
            <ProjectCard
                title="Conway's Game"
                description="Implementação do Conway's Game of Life para navegador."
                imgsrc={conway}
                link="https://pablofsc.me/conway"
                technologies={['html', 'css', 'js', 'bootstrap', 'jquery']}
            />
            <ProjectCard
                title="Busca Reversa por Imagem"
                description='Busca reversa nos principais buscadores.'
                imgsrc={reverse}
                link="https://pablofsc.me/reverse-image-search"
                technologies={['react', 'css', 'ts']}
            />
            <ProjectCard
                title="Esta página :)"
                description='Meu primeiro projeto em React e Typescript.'
                imgsrc={portfolio}
                technologies={['react', 'css', 'ts', 'bootstrap']}
            />
        </div>
    )
}

export default ProjectList