import React from 'react';

const Contact = ({ items }) => {
    const { Description } = items[0]
    return (
        <div className='mt-8'>
            <p>{Description}</p>
        </div>
    );
};

export default Contact;