window.onload = function () {

    var main_items = document.getElementsByClassName("main_menu_item");
    for (var i = 0; i < main_items.length; i++) {
        main_items[i].addEventListener("mouseover", mouseAction, false);
        main_items[i].addEventListener("mouseout", mouseAction, false);
    }
    preload();
}

var mouseAction = function (e) {

    if (isInSameMenu(e.fromElement, e.toElement)) {
        return;
    }
    var menu = getMenuItem(e.target);
    var innerMenu = menu.getElementsByClassName("inner_main_menu_item")[0];
    var childMenu = menu.getElementsByClassName("child_menu")[0];
    if (!innerMenu.getAttribute("mouse")) {
        innerMenu.setAttribute("rotateX", (e.type == "mouseenter") || (e.type == "mouseover") ? 0 : childMenu.childElementCount * 2);
        innerMenu.setAttribute("max", childMenu.childElementCount * 2);
        innerMenu.setAttribute("mouse", e.type);
        mainMenuItemAnimation(innerMenu);
    } else {
        innerMenu.setAttribute("mouse", e.type);
    }

    if (!childMenu.getAttribute("mouse")) {
        childMenu.setAttribute("n", (e.type == "mouseenter") || (e.type == "mouseover") ? 0 : childMenu.childElementCount * 2);
        childMenu.setAttribute("mouse", e.type);
        childMenuAnimation(childMenu);
    } else {
        childMenu.setAttribute("mouse", e.type);
    }
}

var isInSameMenu = function (element0, element1) {
    return getMenuItem(element0) == getMenuItem(element1);
}

var getMenuItem = function(element){
    var tmp = element;
    while (tmp) {
        if (tmp.className == "main_menu_item") {
            return tmp;
        }
        tmp = tmp.parentElement;
    }
    return null;
}

var mainMenuItemAnimation = function (element) {
    var n = parseInt(element.getAttribute("rotateX"));
    var max = parseInt(element.getAttribute("max"));
    switch (element.getAttribute("mouse")) {
        case "mouseenter":
        case "mouseover":
            n ++;
            if (n < max) {
                element.setAttribute("rotateX", n);
                setTimeout(function () { mainMenuItemAnimation(element) }, 17);
            } else {
                element.removeAttribute("mouse");
                element.removeAttribute("rotateX");
                element.removeAttribute("max");
            }
            element.style.transform = "rotateX(" + 8 * n / max + "deg)";
            element.style.boxShadow = "0 " + n / 2 + "px " + n + "px rgba(0,0,0,0.5)";
            break;
        case "mouseleave":
        case "mouseout":
            n --;
            if (n > 0) {
                element.setAttribute("rotateX", n);
                element.style.transform = "rotateX(" + 8 * n / max + "deg)";
                element.style.boxShadow = "0 " + n / 2 + "px " + n + "px rgba(0,0,0,0.5)"
                setTimeout(function () { mainMenuItemAnimation(element) }, 17);

            } else {
                element.removeAttribute("mouse");
                element.removeAttribute("rotateX");
                element.removeAttribute("max");
                element.style.transform = null;
                element.style.boxShadow = null;

            }

            break;
    }

}

var childMenuAnimation = function (element) {
    var n = parseInt(element.getAttribute("n"));
    var children = element.getElementsByClassName("child_menu_item");
    switch (element.getAttribute("mouse")) {
        case "mouseenter":
        case "mouseover":
            if (n < children.length * 2) {
                element.setAttribute("n", ++n);
                setTimeout(function () { childMenuAnimation(element) }, 17);
            } else {
                element.removeAttribute("mouse");
                element.removeAttribute("n");
            }
            if (n % 2 == 0) {
                element.style.top = "100%";
            } else {
                children[children.length - (n + 1) / 2].parentElement.style.display = "block";
                element.style.top = "90px";
            }
             
            break;
        case "mouseleave":
        case "mouseout":
            if (n > 0) {
                setTimeout(function () { childMenuAnimation(element) }, 17);
                element.setAttribute("n", --n);

            } else {
                element.removeAttribute("mouse");
                element.removeAttribute("n");
                element.style.bottom = null;
            }
            if (n % 2 == 0) {
                element.style.top = "100%";
                children[children.length - n/2 - 1].parentElement.style.display = null;
            } else {
                element.style.top = "90px";
            }

            break;
    }
}