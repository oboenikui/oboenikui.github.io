function preload() {
    if (navigator.userAgent.indexOf('iPhone') > 0 ||
        navigator.userAgent.indexOf('iPad') > 0 ||
        navigator.userAgent.indexOf('iPod') > 0 ||
        navigator.userAgent.indexOf('Android') > 0 ||
        navigatot.userAgent.indexOf('Windows Phone') > 0) {
        loadSmartphone();
    }
}

function loadSmartphone() {
    var head = document.getElementsByTagName("head")[0];
    var meta = document.createElement("meta");
    meta.setAttribute("name", "viewport");
    meta.setAttribute("content", "width=573px");
    head.appendChild(meta);
    var cr = document.getElementsByClassName("copyright")[0];
    cr.textContent = cr.textContent.substring(cr.textContent.indexOf("Copyright") + 10, cr.textContent.indexOf("All Right") - 1);
    /*var childs = document.getElementsByClassName("sidebar_div");
    for (var i = 0; i < childs.length; i++) {
        childs[i].onmouseover = null;
        childs[i].onmouseout = null;
        childs[i].onclick = null;
        childs[i].addEventListener("touchstart", function (event) { onTouchMoved(event); mouseOverAction(event.currentTarget) }, false);
        childs[i].addEventListener("touchmove", onTouchMoved, false);
        childs[i].addEventListener("touchend", onTouchEnd, false);
        childs[i].addEventListener("touchcancel", function (event) { mouseOutAction(event.currentTarget) }, false);
    }*/
    window.addEventListener("resize", function () {
        if (window.innerWidth > window.innerHeight) {
            var width = parseInt(530 / window.innerHeight * window.innerWidth);
            meta.setAttribute("content", "width="+width+"px");
        } else {

            meta.setAttribute("content", "width=573px");
        }
    }, false);
}

var touchX;
var touchY;

function onTouchMoved(event) {
    if (event.type = "touchstart") {
        event.preventDefault();
    }
    touchX = event.touches[0].pageX;
    touchY = event.touches[0].pageY;
}

function onTouchEnd(event) {
    mouseOutAction(event.currentTarget);
    var bounds = event.currentTarget.getBoundingClientRect();
    if (touchX >= bounds.left && touchX <= bounds.right && touchY >= bounds.top && touchY <= bounds.bottom) {
        mouseClickAction(event.currentTarget.id);
    }
}