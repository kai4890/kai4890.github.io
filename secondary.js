function switchimgA(elem) {
    if (elem.className == "off"){
        elem.src = "IDRGAF.png";
        elem.className = "on";
    } else {
        elem.src = "DILLIGAF.png";
        elem.className = "off";
    }
}
function switchimgB(elem) {
    if (elem.className == "off"){
        elem.src = "ShadedProto.png";
        elem.className = "on";
    } else {
        elem.src = "Promo-Image-5.png";
        elem.className = "off";
    }
}
function switchimgC(elem) {
    if (elem.className == "off"){
        elem.src = "ShadedWeather.png";
        elem.className = "on";
    } else {
        elem.src = "TempWeatherly.png";
        elem.className = "off";
    }
}