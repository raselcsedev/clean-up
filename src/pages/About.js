import React from 'react';
import BucketGirl from "../assets/image/bucketgirl.png";

const About = () => {
    return (
        <div className='mt-32'>
            <h2>About</h2>
            <div className='h-[60vh] shrink-0'>
            <img src={BucketGirl} class='h-full' alt='' />
          </div>
            
        </div>
    );
};

export default About;