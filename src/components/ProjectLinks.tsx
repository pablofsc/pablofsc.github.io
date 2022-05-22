interface ProjectLinksProperties {
    id: string,
    backendID?: string,
    customText?: string
}

const ProjectLinks = (props: ProjectLinksProperties) => {
    const website = 'https://pablofsc.me/'
    const github = 'https://github.com/pablofsc/'

    return (
        <span className='linkGroup'>
            <a href={github + props.id} target='_blank'>
                <button className='projectLink clickable tridimensional'>
                    GitHub ↗
                </button>
            </a>

            {
                props.backendID ?
                    <a href={github + props.backendID} target='_blank'>
                        <button className='projectLink clickable tridimensional'>
                            {props.customText} ↗
                        </button>
                    </a>
                    :
                    <></>
            }

            <a href={website + props.id} target='_blank'>
                <button className='projectLink clickable tridimensional'>
                    Abrir ↗
                </button>
            </a>
        </span>
    )
}

export default ProjectLinks