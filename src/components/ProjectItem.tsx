import { ReactElement } from 'react';

import TechnologiesList from './TechnologiesList';
import ProjectLinks from './ProjectLinks';

interface Properties {
    title: string;
    description: string;
    imgsrc: string;
    technologies: string[];
    id: string;

    backendID?: string;
    backendTitle?: string;
}

const ProjectItem = (props: Properties): ReactElement => {
    return (
        <div className='personalProject'>
            <a className='imageWrapper' href={props.id}>
                <img className='personalProjectPicture tridimensional' src={props.imgsrc} />
            </a>
            <div className='personalProjectDetails'>
                <h3>{props.title}</h3>
                <p>{props.description}</p>
                <div className='expandSeparator' />
                <div className='personalProjectBottomPart'>
                    <div style={{ minWidth: '300px' }}>
                        <TechnologiesList list={props.technologies} size={20} />
                    </div>
                    <ProjectLinks id={props.id} backendID={props.backendID} customText={props.backendTitle} />
                </div>
            </div>
        </div>
    );
};

export default ProjectItem;
