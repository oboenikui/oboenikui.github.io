var start = function () {
    loadImage(asMonochrome);
};

var loadImage = function (callback) {
    var fileInput = document.getElementById("file");
    var file = fileInput.files[0];
    if (file) {
        var fileReader = new FileReader();
        fileReader.addEventListener("load", function (e) {
            callback(e.target.result);
        }, false);
        fileReader.readAsDataURL(file);
    }
};

var context;
var width;
var height;

var asMonochrome = function (imgData) {
    var canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    var img = document.createElement("img");
    img.src = imgData;
    width = img.width;
    height = img.height;
    canvas.width = width;
    canvas.height = height;
    context.drawImage(img, 0, 0);
    var imageData = context.getImageData(0, 0, width, height);
    monochromeFilter(imageData);
    context.clearRect(0, 0, width, height);

    //context.putImageData(edgeFilter(imageData), 0, 0);
    drawRandom(edgeFilter(imageData));
};

var monochromeFilter = function (imageData) {
    for (var i = 0; i < imageData.data.length; i = i + 4) {
        var r = imageData.data[i];
        var g = imageData.data[i + 1];
        var b = imageData.data[i + 2];
        var color = (r + g + b) / 3 + 0xff - imageData.data[i + 3];
        imageData.data[i] = color;
        imageData.data[i + 1] = color;
        imageData.data[i + 2] = color;
        imageData.data[i + 3] = 0xff;
    }
};

var edgeFilter = function (imageData) {
    var newImage = context.createImageData(imageData.width, imageData.height);
    var filterX = [-1, 0, 1, -2, 0, 2, -1, 0, 1];
    var filterY = [-1, -2, -1, 0, 0, 0, 1, 2, 1];
    var diff = [-imageData.width - 1, -imageData.width, -imageData.width + 1, -1, 0, 1, imageData.width - 1, imageData.width, imageData.width + 1];
    for (var i = 1; i < imageData.height - 1; i++) {
        for (var j = 1; j < imageData.width - 1; j++) {
            var index = (imageData.width * i + j) * 4;
            for (var offset = 0; offset < 3; offset++) {
                var fx = 0;
                var fy = 0;
                for (var k = 0; k < 9; k++) {
                    fx += filterX[k] * imageData.data[index + diff[k] * 4 + offset];
                    fy += filterY[k] * imageData.data[index + diff[k] * 4 + offset];
                }
                newImage.data[index + offset] = 0xff - Math.sqrt(fx * fx + fy * fy);
            }
            newImage.data[index + 3] = 0xff;
        }
    }
    return newImage;
};

var drawRandom = function (imageData) {
    var x, y, w, h;
    var max = height / 10;
    var tmp_canvas = document.getElementById("tmp_canvas");
    var tmp_ctx = tmp_canvas.getContext("2d");
    tmp_canvas.width = width;
    tmp_canvas.height = height;
    tmp_ctx.lineWidth = 0.8;

    //tmp_ctx.strokeStyle = "#55ffffff";
    context.lineWidth = 0.3;
    context.strokeStyle = "#55ffffff";
    var draw = function () {
        x = Math.random() * width;
        y = Math.random() * height;
        w = Math.random() * max - max / 2;
        h = Math.random() * max - max / 2;

        /*if (w * w + h * h < 9) {
        return;
        }*/
        tmp_ctx.clearRect(0, 0, width, height);
        tmp_ctx.beginPath();
        tmp_ctx.moveTo(x, y);
        tmp_ctx.lineTo(x + w, y + h);
        tmp_ctx.stroke();
        var x_prefix = Math.floor(w < 0 ? x + w : x);
        var y_prefix = Math.floor(h < 0 ? y + h : y);
        var w_prefix = Math.abs(w);
        var h_prefix = Math.abs(h);
        var tmpData = tmp_ctx.getImageData(x_prefix, y_prefix, w_prefix + 1, h_prefix + 1);
        var mainData = context.getImageData(x_prefix, y_prefix, w_prefix + 1, h_prefix + 1);
        var diff1 = 0;
        var diff2 = 0;
        for (var dx = 0; dx < tmpData.width; dx++) {
            for (var dy = 0; dy < h_prefix; dy++) {
                var sum = mainData.data[(dx + dy * tmpData.width) * 4 + 3] + tmpData.data[(dx + dy * tmpData.width) * 4 + 3];

                //console.log((sum > 255 ? 255 : sum) - imageData.data[(dx + x_prefix + (dy + y_prefix) * width) * 4]);
                diff1 += Math.abs((sum > 255 ? 255 : sum) - 0xff + imageData.data[(dx + x_prefix + (dy + y_prefix) * width) * 4]);
                diff2 += Math.abs(mainData.data[(dx + dy * tmpData.width) * 4 + 3] - 0xff + imageData.data[(dx + x_prefix + (dy + y_prefix) * width) * 4]);
            }
        }
        if (diff1 < diff2) {
            context.beginPath();
            context.moveTo(x, y);
            context.lineTo(x + w, y + h);
            context.stroke();
        }
    };
    setInterval(draw, 1);
};

var outputPNG = function () {
    var imageData = context.getImageData(0, 0, width, height);
    for (var i = 0; i < imageData.width * imageData.height; i++) {
        var color = 0xff - imageData.data[i * 4 + 3];
        imageData.data[i * 4] = imageData.data[i * 4 + 1] = imageData.data[i * 4 + 2] = color;
        imageData.data[i * 4 + 3] = 0xff;
    }
    var tmp_canvas = document.createElement("canvas");
    var tmp_context = tmp_canvas.getContext("2d");
    tmp_canvas.width = width;
    tmp_canvas.height = height;
    tmp_context.putImageData(imageData, 0, 0);
    var a = document.createElement("a");
    open(tmp_canvas.toDataURL());
};
//# sourceMappingURL=app.js.map
