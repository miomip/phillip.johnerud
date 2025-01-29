function onLoad(){
    stuff()
    console.log( getWindowWidth())
}

function onResize(){

    stuff()
    console.log( getWindowWidth())
}

function stuff(){

    document.documentElement.style.width = `${getWindowWidth()}px`;
    document.documentElement.style.height = `${getWindowHeight()}px`;
    document.getElementById("header-text").innerHTML = `Phillip Johnerud - ${getWindowWidth()}px`;

    if ( getWindowWidth() < 1370) {
        document.getElementById("main-top-text").style.width = "40rem";
        document.getElementById("knowledge").style.width = "40rem";
        document.getElementById("sleepy-time").style.width = "30rem";
        document.getElementById("main-bottom-text-r").style.marginTop = "0rem";

        document.getElementById("github").style.width = "50";
        document.getElementById("github").style.height = "50"; //height="32" width="32"

        document.getElementById("linkedin").style.width = "60";
        document.getElementById("linkedin").style.height = "60"; //height="40" width="40"

        document.getElementById("mail").style.width = "78";
        document.getElementById("mail").style.height = "78"; //height="48" width="48"
    }
    if ( getWindowWidth() > 1370) {
        document.getElementById("main-top-text").style.width = "20rem";
        document.getElementById("code-example").style.width = "20rem";
        document.getElementById("sleepy-time").style.width = "20rem";
        document.getElementById("knowledge").style.width = null;
        document.getElementById("main-bottom-text-r").style.marginTop = "30rem";


        document.getElementById("github").style.width = "32";
        document.getElementById("github").style.height = "32"; //height="32" width="32"

        document.getElementById("linkedin").style.width = "40";
        document.getElementById("linkedin").style.height = "40"; //height="40" width="40"

        document.getElementById("mail").style.width = "48";
        document.getElementById("mail").style.height = "48"; //height="48" width="48"
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

function getCSSVariable(name, r) {
    const rs = getComputedStyle(r);
    return rs.getPropertyValue(name);
}

function setCSSVariable(name, color, r) {
    r.style.setProperty(name, color)
}