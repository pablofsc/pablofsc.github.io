import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiTypescript,
    SiBootstrap,
    SiReact,
    SiJquery,
    SiC,
    SiGit,
    SiGithub,
    SiLinkedin,
    SiTelegram,
    SiMaildotru
} from 'react-icons/si'

const getIcon = (name: string, size: number) => {
    let className: string = 'technologyIcon'

    switch (name) {
        case 'html':
            return (<SiHtml5 size={size} className={className} title="HTML" />)
        case 'css':
            return (<SiCss3 size={size} className={className} title="CSS" />)
        case 'js':
            return (<SiJavascript size={size} className={className} title="JavaScript" />)
        case 'ts':
            return (<SiTypescript size={size} className={className} title="TypeScript" />)
        case 'bootstrap':
            return (<SiBootstrap size={size} className={className} title="Bootstrap" />)
        case 'react':
            return (<SiReact size={size} className={className} title="React" />)
        case 'jquery':
            return (<SiJquery size={size} className={className} title="jQuery" />)
        case 'c':
            return (<SiC size={size} className={className} title="C/C++" />)
        case 'git':
            return (<SiGit size={size} className={className} title="Git" />)
        case 'github':
            return (<SiGithub size={size} className={className} title="GitHub" />)

        case 'linkedin':
            return (<SiLinkedin size={size} className={className} />)
        case 'telegram':
            return (<SiTelegram size={size} className={className} />)
        case 'email':
            return (<SiMaildotru size={size} className={className} />)
    }
}

export default getIcon