import { ListGroup } from 'react-bootstrap';
import getIcon from './GetIcon'

interface SocialNetworkAnchorProps {
    description: string,
    website: string,
    icon: string
}

const SocialNetworkAnchor = (props: SocialNetworkAnchorProps) => {
    return (
        <ListGroup.Item className='networkItem shouldHighlight' action href={props.website} target="_blank">
            {getIcon(props.icon, 20)}  <span className="hideOnMobile">{props.description}</span>
        </ListGroup.Item>
    )
}

export default SocialNetworkAnchor