import React from 'react';

const Profile = ({ items }) => {
    const { Description, Title, img } = items[0]
    return (
        <div className=' md:flex gap-10  mt-8'>
            <div className="avatar mb-5 md:mb-0">
                <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                    <img src={img} />
                </div>
            </div>
            <div>
                <h2 className='text-xl font-semibold mb-2'>{Title}</h2>
                <p>{Description}</p>
            </div>
        </div>
    );
};

export default Profile;