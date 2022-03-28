import React from 'react';
import './Profile.css';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className='profile-parent'>
            <div className='profile-details'>
                <div className='colz'>
                    <div className='colz-icon'>
                        <a href='https://twitter.com/IzzyCapNFT' target="_blank">
                            <i className='fa fa-twitter profile-icon'></i>
                        </a>
                        <a href='https://discord.gg/WhZAX8uv' target="_blank">
                            <i class="fa-brands fa-discord profile-icon"></i>
                        </a>
                    </div>
                </div>
                <div className="profile-details-name">
                    <span className='primary-text'>
                        {" "}
                        Hello, I'm <span className='highlighted-text'>IzzyCap</span>
                    </span>
                </div>
                <div className='profile-details-role'>
                    <span className='primary-text'>
                        {" "}
                        <span className='profile-role-tagline'>
                            Building an Algorand NFT universe.
                        </span>
                    </span>
                </div>
                <div className='profile-options'>
                    <a href='https://www.randgallery.com/algo-collection/?address=BHABHR3TB5RQOTM43ASTTIKBV4HM4Q673DYBDKI3R6NWBYZIVZ56XLRHZQ' target="_blank">
                        <button className='btn highlighted-btn'>Support Project</button>
                    </a>
                </div>
            </div>
            <div className='profile-picture'>
                <div className='profile-picture-background'></div>
            </div>
        </div>
    </div>
  )
}
