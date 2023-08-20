import React from 'react';
import Member from './Menber/Member';

const Team = () => {
    return (
        <div className='my-28'>
            <h6 className='text-orange-500 font-bold'>Team</h6>
            <h2 className='font-bold text-4xl'>Meet Our Team</h2>
            <p className='mt-3 text-whit font-thin my-10 lg:px-72'>The majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
            <Member></Member>
        </div>
    );
};

export default Team;