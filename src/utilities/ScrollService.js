import {TOTAL_SCREENS} from './commonUtils';
import {Subject} from 'rxjs';

export default class ScrollService {
    static scrollHandler = new ScrollService();

    static currentScreenBroadCaster = new Subject();
    static currentScreenFadeIn = new Subject();

    constructor(){
        window.addEventListener('scroll', this.checkCurrentScreenUnderViewport)
    }

    // Smooth scroll to HireMe
    scrollToHireMe = () => {
        let contactMeScreen = document.getElementById("Contact Me");
        if(!contactMeScreen) return;
        contactMeScreen.scrollIntoView({behavior: 'smooth'});
    }    
    
    // Smooth scroll to Home page
    scrollToHome = () => {
        let homeScreen = document.getElementById("Home");    
        if(!homeScreen) return;
        homeScreen.scrollIntoView({behavior: 'smooth'});
    }

    // Check current page in View
    isElementInView = (elem, type) => {
        let rec = elem.getBoundingClientRect();
        let elementTop = rec.top;
        let elemenBottom = rec.bottom;

        let partiallyVisible = elementTop < window.innerHeight && elemenBottom >=0;
        let completelyVisible = elementTop >= 0 && elemenBottom <= window.innerHeight;

        switch(type){
            case 'partial':
                return partiallyVisible;
            case 'complete':
                return completelyVisible;
            default:
                return false
        }
    }

    checkCurrentScreenUnderViewport = (event) => {
        if(!event || Object.keys(event).length < 1)
        return;
        for(let screen of TOTAL_SCREENS) {
            let screenFromDOM = document.getElementById(screen.screen_name);
            if(!screenFromDOM)
            continue;

            let fullyVisible = this.isElementInView(screenFromDOM, 'complete');
            let partiallyVisible = this.isElementInView(screenFromDOM, 'partial');

            if(fullyVisible || partiallyVisible) {
                if(partiallyVisible && !screen.alreadyRendered) {
                    ScrollService.currentScreenFadeIn.next({
                        fadeInScreen: screen.screen_name,
                    });
                    screen['alreadyRendered'] = true;
                    break;
                }

                if(fullyVisible) {
                    ScrollService.currentScreenBroadCaster.next({
                        screenInView: screen.screen_name,
                    });
                    break;
                }
            }
        }
    }
}