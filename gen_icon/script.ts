
class CRC32 {

    static table = [0x00000000,0x77073096,0xEE0E612C,0x990951BA,0x076DC419,0x706AF48F,0xE963A535,0x9E6495A3,0x0EDB8832,0x79DCB8A4,0xE0D5E91E,0x97D2D988,0x09B64C2B,0x7EB17CBD,0xE7B82D07,0x90BF1D91,0x1DB71064,0x6AB020F2,0xF3B97148,0x84BE41DE,0x1ADAD47D,0x6DDDE4EB,0xF4D4B551,0x83D385C7,0x136C9856,0x646BA8C0,0xFD62F97A,0x8A65C9EC,0x14015C4F,0x63066CD9,0xFA0F3D63,0x8D080DF5,0x3B6E20C8,0x4C69105E,0xD56041E4,0xA2677172,0x3C03E4D1,0x4B04D447,0xD20D85FD,0xA50AB56B,0x35B5A8FA,0x42B2986C,0xDBBBC9D6,0xACBCF940,0x32D86CE3,0x45DF5C75,0xDCD60DCF,0xABD13D59,0x26D930AC,0x51DE003A,0xC8D75180,0xBFD06116,0x21B4F4B5,0x56B3C423,0xCFBA9599,0xB8BDA50F,0x2802B89E,0x5F058808,0xC60CD9B2,0xB10BE924,0x2F6F7C87,0x58684C11,0xC1611DAB,0xB6662D3D,0x76DC4190,0x01DB7106,0x98D220BC,0xEFD5102A,0x71B18589,0x06B6B51F,0x9FBFE4A5,0xE8B8D433,0x7807C9A2,0x0F00F934,0x9609A88E,0xE10E9818,0x7F6A0DBB,0x086D3D2D,0x91646C97,0xE6635C01,0x6B6B51F4,0x1C6C6162,0x856530D8,0xF262004E,0x6C0695ED,0x1B01A57B,0x8208F4C1,0xF50FC457,0x65B0D9C6,0x12B7E950,0x8BBEB8EA,0xFCB9887C,0x62DD1DDF,0x15DA2D49,0x8CD37CF3,0xFBD44C65,0x4DB26158,0x3AB551CE,0xA3BC0074,0xD4BB30E2,0x4ADFA541,0x3DD895D7,0xA4D1C46D,0xD3D6F4FB,0x4369E96A,0x346ED9FC,0xAD678846,0xDA60B8D0,0x44042D73,0x33031DE5,0xAA0A4C5F,0xDD0D7CC9,0x5005713C,0x270241AA,0xBE0B1010,0xC90C2086,0x5768B525,0x206F85B3,0xB966D409,0xCE61E49F,0x5EDEF90E,0x29D9C998,0xB0D09822,0xC7D7A8B4,0x59B33D17,0x2EB40D81,0xB7BD5C3B,0xC0BA6CAD,0xEDB88320,0x9ABFB3B6,0x03B6E20C,0x74B1D29A,0xEAD54739,0x9DD277AF,0x04DB2615,0x73DC1683,0xE3630B12,0x94643B84,0x0D6D6A3E,0x7A6A5AA8,0xE40ECF0B,0x9309FF9D,0x0A00AE27,0x7D079EB1,0xF00F9344,0x8708A3D2,0x1E01F268,0x6906C2FE,0xF762575D,0x806567CB,0x196C3671,0x6E6B06E7,0xFED41B76,0x89D32BE0,0x10DA7A5A,0x67DD4ACC,0xF9B9DF6F,0x8EBEEFF9,0x17B7BE43,0x60B08ED5,0xD6D6A3E8,0xA1D1937E,0x38D8C2C4,0x4FDFF252,0xD1BB67F1,0xA6BC5767,0x3FB506DD,0x48B2364B,0xD80D2BDA,0xAF0A1B4C,0x36034AF6,0x41047A60,0xDF60EFC3,0xA867DF55,0x316E8EEF,0x4669BE79,0xCB61B38C,0xBC66831A,0x256FD2A0,0x5268E236,0xCC0C7795,0xBB0B4703,0x220216B9,0x5505262F,0xC5BA3BBE,0xB2BD0B28,0x2BB45A92,0x5CB36A04,0xC2D7FFA7,0xB5D0CF31,0x2CD99E8B,0x5BDEAE1D,0x9B64C2B0,0xEC63F226,0x756AA39C,0x026D930A,0x9C0906A9,0xEB0E363F,0x72076785,0x05005713,0x95BF4A82,0xE2B87A14,0x7BB12BAE,0x0CB61B38,0x92D28E9B,0xE5D5BE0D,0x7CDCEFB7,0x0BDBDF21,0x86D3D2D4,0xF1D4E242,0x68DDB3F8,0x1FDA836E,0x81BE16CD,0xF6B9265B,0x6FB077E1,0x18B74777,0x88085AE6,0xFF0F6A70,0x66063BCA,0x11010B5C,0x8F659EFF,0xF862AE69,0x616BFFD3,0x166CCF45,0xA00AE278,0xD70DD2EE,0x4E048354,0x3903B3C2,0xA7672661,0xD06016F7,0x4969474D,0x3E6E77DB,0xAED16A4A,0xD9D65ADC,0x40DF0B66,0x37D83BF0,0xA9BCAE53,0xDEBB9EC5,0x47B2CF7F,0x30B5FFE9,0xBDBDF21C,0xCABAC28A,0x53B39330,0x24B4A3A6,0xBAD03605,0xCDD70693,0x54DE5729,0x23D967BF,0xB3667A2E,0xC4614AB8,0x5D681B02,0x2A6F2B94,0xB40BBE37,0xC30C8EA1,0x5A05DF1B,0x2D02EF8D];

    static getCRC32(buffer: Int16Array, crc32_start: number): number {
        var crc = crc32_start;
        for (var i = 0; i < buffer.length; i++) {
            crc = (crc >>> 8) ^ this.table[(crc ^ buffer[i]) & 0xFF];
        }

        return (crc ^ (-1)) >>> 0;
    }
}

window.onload = () => {
    document.getElementById("file").addEventListener("change", start, false);
    document.getElementById("color_type").addEventListener("change", changeColorType, false);
    document.getElementById("icon_type").addEventListener("change", changeIconType, false);
    document.getElementById("color").addEventListener("change", startColor, false);
    document.getElementById("alpha").addEventListener("change", startColor, false);
    document.getElementById("size_x").addEventListener("change", startSize, false);
    document.getElementById("size_y").addEventListener("change", startSize, false);
    start();
}

var startColor = () => {

    (<HTMLSelectElement>document.getElementById("color_type")).value = "custom";
    start();
}

var startSize = () => {

    (<HTMLSelectElement>document.getElementById("icon_type")).value = "custom";
    start();
}

var start = () => {
    loadImage(setupCanvas);
}

var loadImage = (callback: Function) => {
    var fileInput:HTMLInputElement = <HTMLInputElement>document.getElementById("file");
    var file = fileInput.files[0];
    if (file) {
        var fileReader = new FileReader();
        fileReader.addEventListener("load", function (e: ProgressEvent) {
            callback((<FileReader>e.target).result);
        }, false);
    fileReader.readAsDataURL(file);
    } else {
        callback("./sample.png");
    }
};

var setupCanvas = (imageData: string) => {
    var image: HTMLImageElement = new Image();
    image.src = imageData;
    image.addEventListener("load", function(){
        var size_x: number = (<HTMLInputElement>document.getElementById("size_x")).valueAsNumber;
        var size_y: number = (<HTMLInputElement>document.getElementById("size_y")).valueAsNumber;
        var color: string = (<HTMLInputElement>document.getElementById("color")).value;
        var alpha: number = (<HTMLInputElement>document.getElementById("alpha")).valueAsNumber;
        var size_x_e = size_x, size_y_e = size_y, size_x_o = size_x * 3 / 4, size_y_o = size_y * 3 / 4;
        var types = ["xxxhdpi", "xxhdpi", "xhdpi", "hdpi", "mdpi"];
        var padding = 16;
        for (var i = 0; i < types.length; i++) {
            var canvas: HTMLCanvasElement = <HTMLCanvasElement>document.getElementById(types[i]);
            if (i % 2 == 0) {
                resize(image, canvas, size_x_e, size_y_e, padding * 2 / (i + 2), color, alpha);
                size_x_e /= 2;
                size_y_e /= 2;
            } else {
                    resize(image, canvas, size_x_o, size_y_o, padding * 3 / 2 / (i + 1), color, alpha);
                    size_x_o /= 2;
                    size_y_o /= 2;
            }
        }
    }, false);
}

var resize = (image: HTMLImageElement, canvas: HTMLCanvasElement, size_x: number, size_y: number, padding: number, color?: string, alpha?: number) => {
    canvas.width = size_x;
    canvas.height = size_y;
    var context: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext("2d");
    context.drawImage(image, padding, padding, size_x - 2 * padding, size_y - 2 * padding);
    if (!color) {
        color = "#000000";
    }
    if (!alpha) {
        alpha = 255;
    }
    var imageData = context.getImageData(0, 0, size_x, size_y);
    monochromeFilter(imageData, color, alpha);
    context.putImageData(imageData, 0, 0);
}

var bicubic = () => {

}

var monochromeFilter = function (imageData: ImageData, color: string, alpha: number) {
    var rgb = getRGB(color);
    if (!rgb) {
        return;
    }
    var r = rgb[0];
    var g = rgb[1];
    var b = rgb[2];
    for (var i = 0; i < imageData.data.length; i = i + 4) {
        imageData.data[i] = r;
        imageData.data[i + 1] = g;
        imageData.data[i + 2] = b;
        imageData.data[i + 3] = alpha * imageData.data[i + 3] / 255;
    }
};

var getRGB = (color: string): Array<number> =>  {
    if (color.length == 4) {
        return [parseInt("0x" + color.substring(1, 2)), parseInt("0x" + color.substring(2, 3)), parseInt("0x" + color.substring(3, 4))];
    }

    if (color.length == 7) {
        return [parseInt("0x" + color.substring(1, 3)), parseInt("0x" + color.substring(3, 5)), parseInt("0x" + color.substring(5, 7))];
    }

    return null;
}

var changeColorType = (e: Event) => {
    var value = (<HTMLInputElement>e.target).value;
    var color: HTMLInputElement = <HTMLInputElement>document.getElementById("color");
    var alpha: HTMLInputElement = <HTMLInputElement>document.getElementById("alpha");
    switch (value) {
        case "holo_dark":
            color.value = "#FFFFFF"
            alpha.value = "220";
            break;
        case "holo_light":
            color.value = "#343434"
            alpha.value = "181";
            break;
        case "custom":
            break;
    }
    start();
}

var changeIconType = (e: Event) => {
    var value = (<HTMLInputElement>e.target).value;
    var x: HTMLInputElement = <HTMLInputElement>document.getElementById("size_x");
    var y: HTMLInputElement = <HTMLInputElement>document.getElementById("size_y");
    switch (value) {
        case "actionbar":
        x.value = "128"
        y.value = "128";
        break;
        case "custom":

    }
    start();
}

var outputZip = () => {
    var data = createZip();
    var a = <HTMLAnchorElement>document.createElement("a");
    a.href = "data:application/zip;base64,"+data;
    var file_name = (<HTMLInputElement>document.getElementById("file_name")).value + ".zip";
    if (file_name.length == 4) {
        file_name = "ic_menu_icon.zip";
    }
    a.setAttribute("download", file_name);
    a.click();
}

var createZip = (): string => {
    var date: Date = new Date();
    var dir_head = "PK\x03\x04\x14\0\0\0\0\0";
    var file_head = "PK\x03\x04\x0A\0\0\0\0\0";
    var dir_middle = "PK\x01\x02\x3f\0\x14\0\0\0\0\0";
    var file_middle = "PK\x01\x02\x3f\0\x0A\0\0\0\0\0";
    var day_of_month = date.getDate();
    var month = date.getMonth() + 1;
    var year = date.getFullYear() - 1980;
    var sec = date.getSeconds();
    var min = date.getMinutes();
    var hour = date.getHours();
    var hd_time = ((hour << 11) | (min << 5) | (sec >> 1)) | ((year << 9) | (month << 5) | day_of_month) << 16;
    var tmp = itob(hd_time, 4);
    dir_head += tmp + "\0\0\0\0\0\0\0\0\0\0\0\0";
    file_head += tmp;
    dir_middle += tmp + "\0\0\0\0\0\0\0\0\0\0\0\0";
    file_middle += tmp;
    var head = "";
    var middle = "";
    var prev_crc = 0xffffffff;
    var file_name = (<HTMLInputElement>document.getElementById("file_name")).value + ".png";
    if (file_name.length == 4) {
        file_name = "ic_menu_icon.png";
    }
    var ntfs_time_hex = (date.getTime() * 10000 + 116444736000000000).toString(16);
    var ntfs_time = itob(parseInt("0x" + ntfs_time_hex.substring(Math.floor(ntfs_time_hex.length / 2), ntfs_time_hex.length)), 4) + itob(parseInt("0x" + ntfs_time_hex.substring(0, Math.floor(ntfs_time_hex.length / 2))), 4);
    var extra = "\x0A\x00\x20\x00\x00\x00\x00\x00\x01\x00\x18\x00" + ntfs_time + ntfs_time + ntfs_time;
    var types = ["hdpi", "mdpi", "xhdpi", "xxhdpi", "xxxhdpi"];
    for (var i = 0; i < types.length; i++) {
        var dir_name = "drawable-" + types[i] + "/";
        var dir_pos = head.length;
        head += dir_head + itob(dir_name.length, 2) + "\0\0" + dir_name;
        var file_pos = head.length;
        head += file_head;
        middle += dir_middle + itob(dir_name.length, 2) + "\x24\0\0\0\0\0\0\0\x10\0\0\0" + itob(dir_pos, 4) + dir_name + extra + file_middle;

        var file = atob((<HTMLCanvasElement>document.getElementById(types[i])).toDataURL().split(",")[1]);
        var dataArray = stoInt16Array(file);
        prev_crc = CRC32.getCRC32(dataArray, 0xFFFFFFFF);
        head += itob(prev_crc, 4);
        middle += itob(prev_crc, 4);
        var size = itob(dataArray.length, 4);
        head += size + "" + size + itob((dir_name + file_name).length, 2) + "\0\0" + dir_name + file_name + file;
        middle += size + "" + size + itob((dir_name + file_name).length, 2) + "\x24\0\0\0\0\0\0\0\x20\0\0\0" + itob(file_pos, 4) + dir_name + file_name + extra;
    }
    var foot = "PK\x05\x06\0\0\0\0\x0a\0\x0a\0" + itob(middle.length, 4) + "" + itob(head.length, 4) + "\0\0";
    return btoa(head + middle + foot);
}


var stoInt16Array = (data: string): Int16Array => {
    var array = new Int16Array(data.length);
    var index = 0;
    for (var i = 0; i < data.length; i++) {
        var bytes = data.charCodeAt(i);
        if (bytes == 0) {
            array[index++] = 0;
        }
        for (var j = 0; bytes >> (8 * j) != 0; j++) {
            array[index++] = (bytes >> (8 * j) & 0xFF);
        }
    }
    return array;
}

var itob = (num: number, digit: number): string => {
    var str = "";
    for (var i = 0; i < digit; i++) {
        str += String.fromCharCode((num >> (i * 8)) & 0xFF);
    }
    return str;
}