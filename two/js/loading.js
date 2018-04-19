//接口http://101.201.235.230:8088/image/a.png
// let imgSrcs = [
//     'http://101.201.235.230:8088/image/a.png',
//     'http://101.201.235.230:8088/image/b.png',
//     'http://101.201.235.230:8088/image/c.png',
// ];
// let newObj = [];

function loadImageAsync(url) {
    return new Promise(function (resolve, reject) {
        const image = new Image();

        image.onload = function () {
            resolve(image);
        };

        image.onerror = function () {
            reject(new Error('Could not load image at ' + url));
        };

        image.src = url;
        document.body.appendChild(image);
    });
}
loadImageAsync('http://101.201.235.230:8088/image/a.png');