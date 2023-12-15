import React from 'react';
import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading';

const Newsletter = () => (
  <div className='app__newslatter'>
    <div className='app__newslatter-heading'>
      <SubHeading title="Newslatter" />
      <h1 className='headtext__cormorant'>Subscribe To Our Newslatter</h1>
      <p className='p__opensans'>And never miss Latest Updates!</p>
    </div>

    <div className='app__newslatter-input flex__center'>
      <input type='email' placeholder='Enter your Email Address'/>
      <button className='custom__button'>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
