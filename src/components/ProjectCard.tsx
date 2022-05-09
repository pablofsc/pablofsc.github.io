import { Card, Button } from 'react-bootstrap';
import getIcon from './GetIcon';
import TechnologiesList from './TechnologiesList';

interface ProjectCardProps {
    title: string,
    description?: string,
    imgsrc: string,
    technologies: string[]
    link?: string,
}

const ProjectCard = (props: ProjectCardProps) => {
    let cursorOnHover: string = 'pointer'

    if (!props.link) {
        cursorOnHover = 'not-allowed'
    }

    return (
        <Card className="projectCard clickable tridimensional">
            <a className='cardLink' href={props.link} style={{ cursor: cursorOnHover }}>
                <div className='imageWrapper'>
                    <Card.Img className="cardPicture" src={props.imgsrc} />
                </div>
                <Card.Body>
                    <Card.Title style={{ fontSize: '20px' }}>{props.title}</Card.Title>
                    <Card.Text>
                        {props.description}
                    </Card.Text>

                    <TechnologiesList list={props.technologies} size={20} />
                </Card.Body>
            </a>
        </Card >
    )
}

export default ProjectCard

const createButton = (label?: string, link?: string) => {
    if (label && link) {
        return (
            <Button className='linkButton' variant="dark" href={link}>{label}{getIcon("github", 20)}</Button>
        )
    }

    return
}