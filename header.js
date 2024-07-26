const Body = document.getElementById('bodyid');
const Menu = document.getElementById('subheadmenucont');
const JSMenu = document.getElementById('jsmenu');
const LeftAnimation = document.querySelectorAll('.left');
const RightAnimation = document.querySelectorAll('.right');
const JSMenuTitleLogo = document.getElementById('jsmenutitlelogocont');
const SocialMedias = document.querySelectorAll('.socialmedias');
const CloseJSMenu = document.getElementById('jsmenuclose');
const Header = document.getElementById('headercont');

Menu.addEventListener('click', openJSMenu);

//                    When Menu Bar Is Clicked
function openJSMenu(){
    JSMenu.classList.remove('hide')
    Body.style.overflow = 'hidden';

    // animate menu
    setTimeout(()=> {
        
        Menu.style.transition = 'transform .3s ease-in-out';
        Menu.style.transform = 'scaleY(0) rotate(90deg)';
        JSMenu.style.transition = 'transform 0.5s ease-in-out'; 
        JSMenu.style.transform = 'translateY(0)';
    },50);

    // animate all the elements
    setTimeout(()=> {
        CloseJSMenu.style.transition = 'transform .8s ease';
        CloseJSMenu.style.transform = 'scaleX(1) rotate(0deg)';
        JSMenuTitleLogo.style.transition = 'transform .8s ease';
        JSMenuTitleLogo.style.transform = 'scale(1)';
        JSMenuTitleLogo.style.animation = 'fade-in 1s ease-out';
        
        SocialMedias.forEach(Icons=> {
            Icons.style.animation = 'fade-in 1.5s';
        });
    }, 200);

    // animate tabs
    setTimeout(()=> {
        LeftAnimation.forEach(left=> {
            left.style.transform = 'translateX(0)';
            left.style.transition = 'transform .7s';
        });
        RightAnimation.forEach(right=> {
            right.style.transform = 'translateX(0)';
            right.style.transition = 'transform .7s';
        }); 
    },420);

    console.log('opened menu')
}




//                     When Close Menu Is Clicked
CloseJSMenu.addEventListener('click', closeJSMenu);

function closeJSMenu(){
    Header.style.opacity = '0'
    JSMenu.style.transition = 'transform 0.5s ease-in-out';
    JSMenu.style.transform = 'translateY(-100vh)';
    CloseJSMenu.style.transition = 'transform .8s ease';
    CloseJSMenu.style.transform = 'scaleX(0) rotate(-90deg)';

    // animate elements
    setTimeout(()=> {
        
        // tabs unimation
        LeftAnimation.forEach(left=> {
            left.style.transform = 'translateX(-200px)';
            left.style.transition = 'transform .7s';
        });
        RightAnimation.forEach(right=> {
            right.style.transform = 'translateX(200px)';
            right.style.transition = 'transform .7s';
        }); 
        
        // title unimation
        JSMenuTitleLogo.style.transition = 'transform .8s ease';
        JSMenuTitleLogo.style.transform = 'scale(0)';
        JSMenuTitleLogo.style.animation = 'fade-out 1s ease-out';
        
        // social media icons unimation
        SocialMedias.forEach(Icons=> {
            Icons.style.animation = 'fade-out 1.5s';
        });
        
        // menu bars animation
        Menu.style.transition = 'transform 1.1s ease';
        Menu.style.transform = 'scaleY(1) rotate(0deg)';
    },200);

    // unhide scrollbar
    setTimeout(()=>{
        Body.style.overflow = 'auto';
        JSMenu.classList.add('hide')
        Header.style.animation = 'fade-in2 .7s forwards'
    },450);

    console.log('closed menu')
}

// Light And Dark Mode
const Lightmode = document.getElementById('lightmode');
const Darkmode = document.getElementById('darkmode');

Lightmode.addEventListener('click', lightMode);
Darkmode.addEventListener('click', darkMode);

function lightMode(){
    Body.style.animation = 'anilightmode 1s forwards';
    console.log('lightmode')
}

function darkMode(){
    Body.style.animation = 'anidarkmode 1s forwards';
    console.log('darkmode')
}
