import ProjectCard from './ProjectCard';
import ttt from '/src/imgs/tic-tac-toe.png'
import conway from '/src/imgs/conway.png'
import portfolio from '/src/imgs/portfolio.png'

const ProjectList = () => {
    return (
        <div className='projectList'>
            <ProjectCard
                id="tic-tac-toe"
                title="Jogo da Velha"
                description="Com IA para jogar contra. Meu primeiro projeto Web."
                imgsrc={ttt}
                btn="Jogar"
                link="https://pablofsc.github.io/tic-tac-toe"
                technologies={['html', 'css', 'js']}
            />
            <ProjectCard
                id="conway"
                title="Conway's Game"
                description="Implementação do Conway's Game of Life para navegador."
                imgsrc={conway}
                btn="Abrir"
                link="https://pablofsc.github.io/conway"
                technologies={['html', 'css', 'js', 'bootstrap', 'jquery']}
            />
            <ProjectCard
                id="portfolio"
                title="Esta página :)"
                description='Meu primeiro projeto em React e Typescript.'
                imgsrc={portfolio}
                technologies={['react', 'ts', 'bootstrap']}
            />
        </div>
    )
}

export default ProjectList