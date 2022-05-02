import getIcon from './GetIcon'

interface TechnologiesListProps {
    list: string[],
    size: number
}

const TechnologiesList = (props: TechnologiesListProps) => {
    return (
        <div>
            {props.list.map((item) => getIcon(item, props.size))}
        </div>
    )

}

export default TechnologiesList