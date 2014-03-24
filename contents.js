var length_list = new Array();
var serial_numbers = new Array();
function mouseOverAction(c) {
    if (!length_list[c.id]) {
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
        case "apps":
            c.style.background = "#408080";
            break;
    }
    var serial = serial_numbers[c.id];
    changeWidth(c, 10, 200, serial);
}

function mouseOutAction(c) {
    c.style.background = "#aaa";
    c.getElementsByTagName("span")[0].style.display = "none";
    serial_numbers[c.id]++;
    var serial = serial_numbers[c.id];
    changeWidth(c, -10, 50, serial);
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
            setTimeout(function () {changeWidth(c, diff, to, serial) }, 6);
        } else {
            c.getElementsByTagName("span")[0].style.display = "block";
        }
    } else {
        if (length_list[c.id] > to) {
            setTimeout(function () { changeWidth(c, diff, to, serial) }, 6);
        }
    }
}

function getWidth(width) {
    return parseInt(width.substring(0, width.length - 2), 10);
};

function preload() {
}


function drawRect() {

}