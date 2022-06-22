import { ReactElement } from 'react';
import { ListGroup } from 'react-bootstrap';

import getIcon from './GetIcon';

interface Properties {
    description: string;
    website: string;
    icon: string;
}

const SocialNetworkAnchor = (props: Properties): ReactElement => {
    return (
        <ListGroup.Item className='networkItem clickable tridimensional' action href={props.website} target='_blank'>
            {getIcon(props.icon, 20)} <span className='hideOnMobile'>{props.description}</span>
        </ListGroup.Item>
    );
};

export default SocialNetworkAnchor;
