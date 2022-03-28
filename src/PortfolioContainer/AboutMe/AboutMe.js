import React, {useEffect} from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './AboutMe.css';

export default function AboutMe(props) {
    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id);
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const SCREEN_CONSTANTS = {
        description: `I'm IzzyCap, and I am working on a personal Algorand NFT universe. I have studied a university degree in Video Game Design and Production, and I currently work as a full-time software developer. However, whenever I can, I find time to work on my personal project to give more utilities and value to my NFTs collections. SI created many NFTs series like Pixel Parrots, Algo Fighters or Golden Bugs.

Now I am focused to create new utilities and value to the projects, improving a Discord Bot Game that connects all the collections. Currently, Algo Fighters and Golden Bugs can be used on Discord to win Gold (The discord game currency). Little by little, new features are being added to grow as a project`,
        highlights: {
            bullets:[
                "Sold out Pixel Parrots",
                "Sold out Golden Alien Bugs.",
                "Release Algo Fighters Discord game",         
                "Release Gold fevear Discord game",
                "Release Ball Head Alien Bugs",
            ],
            heading: 'Here are a Few Highlights:'
        }
    }

    const renderHighlight = () => {
        return(
            SCREEN_CONSTANTS.highlights.bullets.map((value, i) => (
                <div className='highlight' key={i}>
                    <div className='highlight-blob'></div>
                    <span>{value}</span>
                </div>
            ))
        )
    }

    return (
        <div className='about-me-container screen-container' id={props.id || ''}>
            <div className='about-me-parent'>
                <ScreenHeading title={'About the Project'} subHeading={'Why Choose IzzyLabs?'}/>
                <div className='about-me-card'>
                    <div className='about-me-profile'></div>
                    <div className='about-me-details'>
                        <span className='about-me-description'>{SCREEN_CONSTANTS.description}</span>
                        <div className='about-me-highlights'>
                            <div className='highlight-heading'>
                                <span>{SCREEN_CONSTANTS.highlights.heading}</span>
                            </div>
                            {renderHighlight()}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
