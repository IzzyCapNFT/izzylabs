import React, { useState } from 'react';
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';
import ScrollService from '../../utilities/ScrollService';
import Animations from '../../utilities/Animations';
import './Resume.css'
import algoparrot from "../../assets/Collections/algoparrot.gif";
import pixelparrots from "../../assets/Collections/pixelparrots.gif";
import goldenalienbugs from "../../assets/Collections/goldenalienbugs.gif";
import ballheadalienbugs from "../../assets/Collections/ballheadalienbugs.gif";
import algofighters from "../../assets/Collections/algofighters.gif";

export default function Resume(props) {
    const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
    const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

    let fadeInScreenHandler = (screen) => {
        if(screen.fadeScreen !== props.id) return;

        Animations.animations.fadeInScreen(props.id);
    };

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

    const CollectionPage = (props) => {
        return (
            <div className='collection-page'>
                <div className='collection-info'>
                    <div className='collection-info-title'>
                        <span>{props.title ? props.title : ''}</span>   
                    </div>
                    <div className='collection-main-heading'>
                        <div className='heading-bullet'></div>
                        <div className='collection-info-item'>
                            <b>Max Supply: </b>  
                            <span>{props.supply ? props.supply : ''}</span>   
                        </div>
                    </div>
                    <div className='collection-main-heading'>
                        <div className='heading-bullet'></div>
                        <div className='collection-info-item'>
                            <b>Status: </b>  
                            <span>{props.status ? props.status : ''}</span>   
                        </div>
                    </div>
                    <div className='collection-info-text'>
                        <span className='collection-info-description'>{props.description}</span>
                    </div>
                    <div className='collection-info-btn'>
                        <a href={props.link} target="_blank" rel="noreferrer">
                            <button className='btn highlighted-btn'>NFT Explorer</button>
                        </a>
                    </div>
                </div>
                <div className='collection-image-container'>
                    <img className='collection-image' src={props.src} alt="no internet connection"></img>
                </div>

            </div>
        )
    }

    const collectionBullets = [
        {label: 'Algoparrots'},
        {label: 'Pixel Parrots'},
        {label: 'Golden Alien Bugs'},
        {label: 'Ball Head Alien Bugs'},
        {label: 'Algo Fighters'},
    ];

    const AlgoparrotsPage = [
        <div className='collection-screen-container' key='algoparrots'>
            <CollectionPage
            title={'Algoparrots'}
            supply={'1000'}
            status={'Active'}
            description={'1000 unique handmade Algoparrots.'}
            link={'https://www.nftexplorer.app/collection/algoparrots'}
            src={algoparrot}
            />
        </div>
    ];

    const PixelparrotsPage = [
        <div className='collection-screen-container' key='pixelparrots'>
            <CollectionPage
            title={'Pixel Parrots'}
            supply={'500'}
            status={'Sold Out'}
            link={'https://www.nftexplorer.app/collection/pixel-parrots'}
            src={pixelparrots}
            />
        </div>
    ];

    const GoldenAlienBugsPage = [
        <div className='collection-screen-container' key='goldenalienbugs'>
            <CollectionPage
            title={'Golden Alien Bugs'}
            supply={'1000'}
            status={'Sold Out'}
            description={'Golden Alien Bugs travel the galaxy in search of gold (Gold Feve). 1000 unique BUGS with rarity.'}
            link={'https://www.nftexplorer.app/collection/goldenalienbugs'}
            src={goldenalienbugs}
            />
        </div>
    ];

    const BallHeadAlienBugsPage = [
        <div className='collection-screen-container' key='ballheadalienbugs'>
            <CollectionPage
            title={'Ball Head Alien Bugs'}
            supply={'1000'}
            status={'Active'}
            description={'Ball Head Alien Bugs travel the galaxy in search of gold (Gold Fever discord game). 1000 unique BHAB with rarity.'}
            link={'https://www.nftexplorer.app/collection/ball-head-alien-bugs'}
            src={ballheadalienbugs}
            />
        </div>
    ];

    const AlgoFightersPage = [
        <div className='collection-screen-container' key='algofighters'>
            <CollectionPage
            title={'Algo Fighters'}
            supply={'300'}
            status={'Active'}
            description={'Algo Fighters Gen 1 300 unique Algo Fighters autogenerated. With random names and random stats! You can train them on the discord game.'}
            link={'https://www.nftexplorer.app/collection/algo-fighters'}
            src={algofighters}
            />
        </div>
    ];

    const handleCarousal = (index) => {
        console.log(document.body.offsetWidth);
        let offsetHeight = 360;

        if (document.body.offsetWidth <= 898)
            offsetHeight = 720;

        let newCarousalOffset = {
            style: {transform: 'translateY(' + index * offsetHeight * - 1 + 'px)'}
        };
        setCarousalOffSetStyle(newCarousalOffset);
        setSelectedBulletIndex(index);
    };

    const getBullets = () => {       

        return collectionBullets.map((bullet, index) => (
            <div
            onClick={() => handleCarousal(index)}
            className={index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'}
            key={index}>
                <i className={'bullet-logo fa-solid fa-' + (index + 1)}></i>
                <span className='bullet-label'>{bullet.label}</span>
            </div>
        ))
    }

    const getCollectionPage = () => {
        return (
            <div
            style={carousalOffSetStyle.style}
            className='collection-details-carousal'>
                {AlgoparrotsPage}
                {PixelparrotsPage}
                {GoldenAlienBugsPage}
                {BallHeadAlienBugsPage}
                {AlgoFightersPage}
            </div>
        )
    }

    return (
        <div className='collection-container screen-container' id={props.id || ''}>
            <div className='collection-content'>
                <ScreenHeading title={'Collections'} subHeading={'All IzzyLabs NFT collections'}/>
                <div className='collection-card'>
                    <div className='collection-bullets'>
                        <div className='bullet-container'>
                            <div className='bullet-icons'></div>
                            <div className='bullets'>{getBullets()}</div>
                        </div>
                    </div>
                    <div className='collection-bullets-details'>{getCollectionPage()}</div>
                </div>
            </div>
        </div>
    )
}
