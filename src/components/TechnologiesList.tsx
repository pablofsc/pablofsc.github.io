import { ReactElement } from 'react';

import getIcon from './GetIcon';

interface Properties {
    list: string[];
    size: number;
}

const TechnologiesList = (props: Properties): ReactElement => {
    return <>{props.list.map((item) => getIcon(item, props.size))}</>;
};

export default TechnologiesList;
