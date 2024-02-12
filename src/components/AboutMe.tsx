import { ReactElement } from 'react';

import { GoCalendar, GoKeyboard, GoLocation } from 'react-icons/go';
import { BsPersonBadge } from 'react-icons/bs';
import { VscMortarBoard } from 'react-icons/vsc';

const AboutMe = (): ReactElement => {
    const calculateAge = (birthDate: string): number => Math.floor((new Date().getTime() - new Date(birthDate).getTime()) / (365.25 * 24 * 60 * 60 * 1000));
    const age = calculateAge('2000-04-17');

    return (
        <div>
            <h4 className='usernameWrapper'>
                <code className='fades'>pablofsc</code>
            </h4>

            <p className='aboutMe'>
                <GoKeyboard className='aboutMeIcon' />&nbsp;Desenvolvedor de Software<br />
                <GoCalendar className='aboutMeIcon' />&nbsp;{age} anos<br />
                <GoLocation className='aboutMeIcon' />&nbsp;Brasília, DF<br />
                <VscMortarBoard className='aboutMeIcon' />&nbsp;Engenharia de Computação<br />
                <BsPersonBadge className='aboutMeIcon' />&nbsp;DashCommerce
            </p>
        </div>
    );
};

export default AboutMe;
