var length_list = new Array();
var serial_numbers = new Array();
var VELOCITY = 10;
var MAX_WIDTH = 200;
var MIN_WIDTH = 50;
var animation_available = true;
var flag_smartphone = false;
function mouseOverAction(c) {
    if (!length_list[c.id]&&!flag_smartphone&&animation_available) {
        length_list[c.id] = 50;
        c.style.width = "50px";
        serial_numbers[c.id] = 0;
    } else {
        serial_numbers[c.id]++;
    }
    switch (c.id) {
        case "twitter":
            c.style.background = "#5ea9dd";
            break;
        case "github":
            c.style.background = "#000";
            break;
        case "hatena":
            c.style.background = "#2f2f2f";
            break;
        case "apps":
            c.style.background = "#408080";
            break;
    }
    if (flag_smartphone || !animation_available) return;
    var serial = serial_numbers[c.id];
    changeWidth(c, VELOCITY, MAX_WIDTH, serial);
}

function mouseOutAction(c) {
    c.style.background = "#aaa";
    if (flag_smartphone || !animation_available) return;
    c.getElementsByTagName("span")[0].style.display = "none";
    serial_numbers[c.id]++;
    var serial = serial_numbers[c.id];
    changeWidth(c, -VELOCITY, MIN_WIDTH, serial);
}

function mouseClickAction(id) {
    var url;
    switch (id) {
        case "twitter":
            url = "https://twitter.com/oboenikui";
            break;

        case "github":
            url = "https://github.com/oboenikui";
            break;

        case "hatena":
            url = "http://oboenikui.hatenablog.com";
            break;

        case "apps":
            url = "https://play.google.com/store/apps/developer?id=oboenikui";
            break;
    }
    window.open(url, "_blank");
}

function changeWidth(c, diff, to, serial) {
    if (serial != serial_numbers[c.id]) {
        return;
    }
    length_list[c.id] = getWidth(c.style.width) + diff;
    c.style.width = length_list[c.id] + "px";
    if (diff > 0) {
        if (length_list[c.id] < to) {
            setTimeout(function () {changeWidth(c, diff, to, serial) }, 10);
        } else {
            c.getElementsByTagName("span")[0].style.display = "block";
        }
    } else {
        if (length_list[c.id] > to) {
            setTimeout(function () { changeWidth(c, diff, to, serial) }, 10);
        }
    }
}

function getWidth(width) {
    return parseInt(width.substring(0, width.length - 2), 10);
};

function setAnimate(available) {
    if(flag_smartphone) return;
    animation_available = available;
    if (animation_available) {
        var childs = document.getElementById("side_bar").getElementsByClassName("sidebar_div");
        for (var i = 0; i < childs.length; i++) {
            childs[i].getElementsByTagName("span")[0].style.display = "none";
            childs[i].style.width = "50px";
        }
    } else {
        var childs = document.getElementById("side_bar").getElementsByClassName("sidebar_div");
        for (var i = 0; i < childs.length; i++) {
            childs[i].style.width = "200px";
            childs[i].getElementsByTagName("span")[0].style.display = "block";
        }
    }
}

function onResized() {
    if (screen.availWidth <= 320) {
        setAnimate(false);
    } else {
        setAnimate(true);
    }
}

function preload() {
    if ((navigator.userAgent.indexOf('iPhone') > 0 && navigator.userAgent.indexOf('iPad') == -1) ||
        navigator.userAgent.indexOf('iPod') > 0 ||
        navigator.userAgent.indexOf('Android') > 0 ||
        navigatot.userAgent.indexOf('Windows Phone') > 0) {
        setAnimate(false);
        flag_smartphone = true;
        var head = document.getElementsByTagName("head")[0];
        var meta = document.createElement("meta");
        meta.setAttribute("name", "viewport");
        meta.setAttribute("content", "width=device-width");
        head.appendChild(meta);
    }

}


function drawRect() {

}