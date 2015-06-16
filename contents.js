window.onload = function () {

    var main_items = document.getElementsByClassName("main_menu_item");
    for (var i = 0; i < main_items.length; i++) {
        main_items[i].addEventListener("mouseover", mouseAction, false);
        main_items[i].addEventListener("mouseout", mouseAction, false);
    }
    preload();
}
var fromElement = null;
var mouseAction = function (e) {
    if (e.toElement && e.fromElement) {
        if (isInChildMenuItem(e.toElement) && !isInSameChildMenu(e.fromElement, e.toElement)) {
            var childMenuItem = getChildMenuItem(e.toElement)
            if (!childMenuItem.getAttribute("color")) {
                childMenuItem.setAttribute("color", 0);
            }
            childMenuItem.setAttribute("type", "over");
            childMenuItemColorAnimation(childMenuItem);
        }
        if (isInChildMenuItem(e.fromElement) && !isInSameChildMenu(e.fromElement, e.toElement)) {
            var childMenuItem = getChildMenuItem(e.fromElement);
            if (!childMenuItem.getAttribute("color")) {
                childMenuItem.setAttribute("color", 8);
            }
            childMenuItem.setAttribute("type", "out");
            childMenuItemColorAnimation(childMenuItem);
        }

        if (isInSameMenu(e.fromElement, e.toElement)) {
            return;
        }
    } else {
        var toElement = document.elementFromPoint(e.clientX, e.clientY);
        if (isInChildMenuItem(toElement) && !isInSameChildMenu(fromElement, toElement)) {
            var childMenuItem = getChildMenuItem(toElement)
            if (!childMenuItem.getAttribute("color")) {
                childMenuItem.setAttribute("color", 0);
            }
            childMenuItem.setAttribute("type", "over");
            childMenuItemColorAnimation(childMenuItem);

        }
        if (isInChildMenuItem(fromElement) && !isInSameChildMenu(fromElement, toElement)) {
            var childMenuItem = getChildMenuItem(fromElement);
            if (!childMenuItem.getAttribute("color")) {
                childMenuItem.setAttribute("color", 8);
            }
            childMenuItem.setAttribute("type", "out");
            childMenuItemColorAnimation(childMenuItem);
        }

        if (isInSameMenu(fromElement, toElement)) {
            if (e.type == "mouseover") {
                fromElement = toElement;
            }
            return;
        }
        if (getMenuItem(toElement) == null) {
            fromElement = null;
        }
    }

    var menu = getMenuItem(e.target);
    var innerMenu = menu.getElementsByClassName("inner_main_menu_item")[0];
    var childMenu = menu.getElementsByClassName("child_menu")[0];
    if (!innerMenu.getAttribute("mouse")) {
        innerMenu.setAttribute("rotateX", (e.type == "mouseenter") || (e.type == "mouseover") ? 0 : childMenu.childElementCount * 3);
        innerMenu.setAttribute("max", childMenu.childElementCount * 3);
        innerMenu.setAttribute("mouse", e.type);
        mainMenuItemAnimation(innerMenu);
    } else {
        innerMenu.setAttribute("mouse", e.type);
    }

    if (!childMenu.getAttribute("mouse")) {
        childMenu.setAttribute("n", (e.type == "mouseenter") || (e.type == "mouseover") ? 0 : childMenu.childElementCount * 3);
        childMenu.setAttribute("mouse", e.type);
        childMenuAnimation(childMenu);
    } else {
        childMenu.setAttribute("mouse", e.type);
    }
    if (e.type == "mouseover") {
        fromElement = toElement;
    }
}

var isInSameMenu = function (element0, element1) {
    var tmp;
    return (tmp = getMenuItem(element0)) == getMenuItem(element1) && tmp;
}

var isInSameChildMenu = function (element0, element1) {
    var tmp = getChildMenuItem(element0);
    return tmp && tmp == getChildMenuItem(element1);
}

var isInChildMenuItem = function (element) {
    if (element && element.className == "child_menu_item") {
        return true;
    } else if (element) {
        return isInChildMenuItem(element.parentElement);
    } else {
        return false;
    }

}

var getMenuItem = function (element) {
    var tmp = element;
    while (tmp) {
        if (tmp.className == "main_menu_item") {
            return tmp;
        }
        tmp = tmp.parentElement;
    }
    return null;
}

var getChildMenuItem = function (element) {
    var tmp = element;
    while (tmp) {
        if (tmp.className == "child_menu_item") {
            return tmp;
        }
        tmp = tmp.parentElement;
    }
    return null;
}


var g = 1;
var positions = new Array();
for(var i=0; i<24; i++){
    positions[i] = Math.pow(i/60, 2) * g / 2;
}

var mainMenuItemAnimation = function (element) {
    var n = parseInt(element.getAttribute("rotateX"));
    var max = parseInt(element.getAttribute("max"));
    switch (element.getAttribute("mouse")) {
        case "mouseenter":
        case "mouseover":
            n++;
            if (n < max) {
                element.setAttribute("rotateX", n);
                setTimeout(function () { mainMenuItemAnimation(element) }, 20);
            } else {
                element.removeAttribute("mouse");
                element.removeAttribute("rotateX");
                element.removeAttribute("max");
            }
            element.style.transform = "rotateX(" + 8 / positions[max] * (positions[max] - positions[max-n]) + "deg)";
            element.style.webkitTransform = "rotateX(" + 8 / positions[max] * (positions[max] - positions[max-n]) + "deg)";
            element.style.boxShadow = "0 " + (4 * (positions[max] - positions[max-n]) / positions[max] / 2 + 1) + "px " + (4 * (positions[max] - positions[max-n]) / positions[max] + 2) + "px rgba(0,0,0,0.5)";

            break;
        case "mouseleave":
        case "mouseout":
            n--;
            if (n > 0) {
                element.setAttribute("rotateX", n);
                element.style.transform = "rotateX(" + 8 / positions[max] * (positions[max] - positions[max-n]) + "deg)";
                element.style.webkitTransform = "rotateX(" + 8 / positions[max] * (positions[max] - positions[max-n]) + "deg)";
                element.style.boxShadow = "0 " + (4 * (positions[max] - positions[max-n]) / positions[max] / 2 + 1) + "px " + (4 * (positions[max] - positions[max-n]) / positions[max] + 2) + "px rgba(0,0,0,0.5)";
                setTimeout(function () { mainMenuItemAnimation(element) }, 20);

            } else {
                element.removeAttribute("mouse");
                element.removeAttribute("rotateX");
                element.removeAttribute("max");
                element.style.transform = null;
                element.style.webkitTransform = null;
                element.style.boxShadow = null;

            }

            break;
    }

}

var childMenuAnimation = function (element) {
    var n = parseInt(element.getAttribute("n"));
    var children = element.getElementsByClassName("child_menu_item");
    var max = children.length * 3;
    switch (element.getAttribute("mouse")) {
        case "mouseenter":
        case "mouseover":
            if (n < max) {
                element.setAttribute("n", ++n);
                setTimeout(function () { childMenuAnimation(element) }, 20);
            } else {
                element.removeAttribute("mouse");
                element.removeAttribute("n");
            }

            children[children.length - 1].parentElement.style.display = "block";
            var childHeight = getAbsoluteHeight(children[children.length - 1]);
            var topMargin = children[0].parentElement.parentElement.parentElement.offsetHeight;
            var nextHeight = childHeight * children.length * (positions[max] - positions[max-n]) / positions[max];
            var currentCount = Math.ceil(nextHeight/childHeight);
            element.style.top = (nextHeight - currentCount * childHeight + topMargin) + "px";
            for(var i=0; i<currentCount; i++) {
                children[children.length - i - 1].parentElement.style.display = "block";
            }
            children[0].parentElement.parentElement.style.height = currentCount * childHeight + "px";

            break;
        case "mouseleave":
        case "mouseout":
            if (n > 0) {
                setTimeout(function () { childMenuAnimation(element) }, 20);
                element.setAttribute("n", --n);

            } else {
                element.removeAttribute("mouse");
                element.removeAttribute("n");
                element.style.top = null;
            }
            var childHeight = getAbsoluteHeight(children[children.length - 1]);
            var topMargin = children[0].parentElement.parentElement.parentElement.offsetHeight;
            var nextHeight = childHeight * children.length * (positions[max] - positions[max-n]) / positions[max];
            var currentCount = Math.ceil(nextHeight/childHeight);
            element.style.top = (nextHeight - currentCount * childHeight + topMargin) + "px";
            for(var i=0; i<children.length-currentCount; i++) {
                children[i].parentElement.style.display = "none";
            }
            children[0].parentElement.parentElement.style.height = currentCount * childHeight + "px";


            break;
    }
}

var childMenuItemColorAnimation = function (element) {
    var n = element.getAttribute("color");
    var type = element.getAttribute("type");
    switch (type) {
        case "over":
            element.style.background = "rgb(" + (0xAA - ++n * 10) + "," + (0xAA - n * 8) + "," + 0xAA + ")";
            element.style.boxShadow = "0 " + (n / 8 * 2 + 2) + "px " + (n / 8 * 4 + 2)  + "px " + n / 8 * 2 + "px rgba(0, 0, 0, 0.5)";
            element.style.zIndex = "1";
            if (n < 8) {
                setTimeout(function () { childMenuItemColorAnimation(element) }, 30);
                element.setAttribute("color", n);
            } else {
                element.removeAttribute("color");
                element.removeAttribute("type");
            }
            break;
        case "out":
            --n;
            if (n <= 0) {
                element.style.background = null;
                element.removeAttribute("color");
                element.removeAttribute("type");
                element.style.boxShadow = null;
                element.style.zIndex = null;
            } else {
                element.style.background = "rgb(" + (0xAA - n * 10) + "," + (0xAA - n * 8) + "," + 0xAA + ")";
                element.style.boxShadow = "0 " + (n / 8 * 2 + 2) + "px " + (n / 8 * 4 + 2)  + "px " + n / 8 * 2 + "px rgba(0, 0, 0, 0.5)";
                setTimeout(function () { childMenuItemColorAnimation(element) }, 30);
                element.setAttribute("color", n);
            }
            break;
    }
}

function getAbsoluteHeight(el) {
  el = (typeof el === 'string') ? document.querySelector(el) : el; 

  var styles = window.getComputedStyle(el);
  var margin = parseFloat(styles['marginTop']) +
               parseFloat(styles['marginBottom']);

  return Math.ceil(el.offsetHeight + margin);
}