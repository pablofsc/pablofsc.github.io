import { ReactElement } from 'react';

import { GoCalendar, GoLocation } from 'react-icons/go';
import { BsPersonBadge } from 'react-icons/bs';
import { VscMortarBoard } from 'react-icons/vsc';

const AboutMe = (): ReactElement => {
    return (
        <div>
            <h4 className='usernameWrapper'>
                <code className='fades'>pablofsc</code>
            </h4>

            <p className='aboutMe'>
                <GoCalendar className='aboutMeIcon' />
                &nbsp;22 anos
                <br />
                <GoLocation className='aboutMeIcon' />
                &nbsp;Brasília, DF
                <br />
                <VscMortarBoard className='aboutMeIcon' />
                &nbsp;Engenharia de Computação
                <br />
                <BsPersonBadge className='aboutMeIcon' />
                &nbsp;Estagiário na Ebserh
            </p>
        </div>
    );
};

export default AboutMe;
