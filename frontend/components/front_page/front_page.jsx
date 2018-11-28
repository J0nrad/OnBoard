import React from 'react';
import { Link } from 'react-router-dom';

export const FrontPage = () => {
  return (
    <div className="front-page-wrapper">
      <div className="front-stack">
        <h1 className="front-page-header">Onboard your boards!</h1>
        <h4 className="front-page-mid">A place to sell your old boards and find your next one.</h4>
        <Link className='login-link' to='/signup'>Join the Community</Link>
      </div>
    </div>
  );
};
