import getIcon from './GetIcon'

interface TechnologiesListProps {
    list: string[],
    size: number
}

const TechnologiesList = (props: TechnologiesListProps) => {
    return (
        <>
            {props.list.map((item) => getIcon(item, props.size))}
        </>
    )
}

export default TechnologiesList