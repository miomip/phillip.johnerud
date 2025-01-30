function onLoad(){
    stuff()
    console.log( getWindowWidth())
}

function onResize(){
    stuff()
}

function stuff(){

    document.documentElement.style.width = `${getWindowWidth()}px`;
    document.documentElement.style.height = `${getWindowHeight()}px`;
    document.getElementById("header-text").innerHTML = `Phillip Johnerud - ${getWindowWidth()}px`;


    if (getWindowWidth() < 370) {
        document.getElementById("header-left").style.height = "50%";
        document.getElementById("header-c-area").style.height = "50%";

        document.getElementById("header-left").style.transform = "translateX(5.5rem)";
        document.getElementById("header-c-area").style.transform = "translateY(5.5rem) translateX(-4rem)";

        document.getElementById("main-bottom-text-r").style.marginTop = "0rem";

        document.getElementById("knowledge").style.width = "15rem";
        document.getElementById("main-text").style.marginBottom = "15rem";

        document.getElementById("github").style.height = "50px"; //height="32" width="32"
        document.getElementById("linkedin").style.height = "60px"; //height="40" width="40"
        document.getElementById("mail").style.height = "78px"; //height="48" width="48"

        document.getElementById("kotlin-logo").style.height = "1.7rem";
        document.getElementById("android-logo").style.height = "1.7rem";
        document.getElementById("android-logo").style.transform = "translateX(-1rem)";
        document.getElementById("ktor-logo").style.height = "2.5rem";
    }
    if (getWindowWidth() < 330) {
        document.getElementById("header-left").style.height = "50%";
        document.getElementById("header-c-area").style.height = "50%";

        document.getElementById("header-left").style.transform = "translateX(5.5rem)";
        document.getElementById("header-c-area").style.transform = "translateY(5.5rem) translateX(-4rem)";

        document.getElementById("main-bottom-text-r").style.marginTop = "0rem";

        document.getElementById("knowledge").style.width = "15rem";
        document.getElementById("main-text").style.marginBottom = "15rem";

        document.getElementById("github").style.height = "50px"; //height="32" width="32"
        document.getElementById("linkedin").style.height = "60px"; //height="40" width="40"
        document.getElementById("mail").style.height = "78px"; //height="48" width="48"

        document.getElementById("kotlin-logo").style.height = "1.7rem";
        document.getElementById("android-logo").style.height = "1.7rem";
        document.getElementById("android-logo").style.transform = "translateX(-1rem)";
        document.getElementById("ktor-logo").style.height = "2.5rem";

        document.querySelectorAll('.python-logo').forEach(element => {
            element.style.setProperty('height', '3.5rem', 'important');
        });
        document.getElementsByClassName("python-logo")[1].style.transform = "translateX(2.5rem)" ;
        document.getElementById("android-logo").style.marginRight = "4rem";
    }

    if (getWindowWidth() < 715 && getWindowWidth() > 370) {
        document.getElementById("header-left").style.height = "100%";
        document.getElementById("header-c-area").style.height = "100%";

        document.getElementById("header-left").style.transform = null;
        document.getElementById("header-c-area").style.transform = null;



        document.getElementById("main-bottom-text-r").style.marginTop = "0rem";
        document.getElementById("knowledge").style.width = "25rem";
        document.getElementById("main-text").style.marginBottom = "15rem";

        document.getElementById("github").style.height = "50px"; //height="32" width="32"

        document.getElementById("linkedin").style.height = "60px"; //height="40" width="40"

        document.getElementById("mail").style.height = "78px"; //height="48" width="48"
    }
    if ( getWindowWidth() < 1370 && getWindowWidth() > 715) {
        document.getElementById("main-top-text").style.width = "40rem";
        document.getElementById("knowledge").style.width = "40rem";
        document.getElementById("sleepy-time").style.width = "30rem";
        document.getElementById("main-bottom-text-r").style.marginTop = "0rem";

        document.getElementById("github").style.height = "50px"; //height="32" width="32"

        document.getElementById("linkedin").style.height = "60px"; //height="40" width="40"

        document.getElementById("mail").style.height = "78px"; //height="48" width="48"
    }
    if ( getWindowWidth() > 1370) {
        document.getElementById("main-top-text").style.width = "20rem";
        document.getElementById("code-example").style.width = "20rem";
        document.getElementById("sleepy-time").style.width = "20rem";
        document.getElementById("knowledge").style.width = null;
        document.getElementById("main-bottom-text-r").style.marginTop = "30rem";

        document.getElementById("github").style.height = "32px"; //height="32" width="32"

        document.getElementById("linkedin").style.height = "40px"; //height="40" width="40"

        document.getElementById("mail").style.height = "48px"; //height="48" width="48"
    }
}


function somethingChange(){
    let x = getById("blue-code");
    let y = getById("green-code");
    let f = getById("orange-code");
    let g = getById("magenta-code");
    x.id = "white-code";
    y.id = "white-code";
    f.id = "white-code";
    g.id = "white-code";
}

function getById(text){
    return document.getElementById(text);
}

function getWindowWidth(){
    return window.innerWidth;
}

function getWindowHeight(){
    return window.innerHeight;
}
