import React from 'react';
import SocialLogin from '../SocialLogin';
import FindUs from '../FindUs';
import QZone from '../Qzone';

const RightSideBar = () => {
    return (
        <div className='space-y-5'>
            <SocialLogin></SocialLogin>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightSideBar;