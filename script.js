/**
 * Created by pekko1215 on 2018/02/12.
 */
function starMaker(n) {
    var star = document.createElement("div");
    star.className = "star";
    star.textContent = "★";
    for (var i = 0; i < n; i++) {
        starSet(star);
    }
}
function starSet(clone) {
    var starClone = clone.cloneNode(true);
    var starStyle = starClone.style;

    starStyle.left = 100 * Math.random() + "%";
    starStyle.animationDelay = 8 * Math.random() + "s";
    starStyle.fontSize = ~~(50 * Math.random() + 20) + "px";
    document.body.appendChild(starClone);

    starClone.addEventListener("animationend", function () {
        this.parentNode.removeChild(this);
        var star = document.createElement("div");
        star.className = "star";
        star.textContent = "★";
        starSet(star);
    }, false)
}

starMaker(10)


colours = new Array('#ff0000', '#00ff00', '#3366ff', '#ff00ff', '#ffa500', '#ffffff', '#fff000');
amount = colours.length;
YgetDelay = 0, XgetDelay = 0, Ydelay = 0, Xdelay = 0, step = 0.2, currStep = 0, my = 0, mx = 0;
document.onmousemove = function Mouse(e) {
    mx = e.pageX;
    my = e.pageY;
}
function stars() {
    for (i = 0; i < amount; i++) {
        var layer = document.getElementById("iestars" + i);
        layer.style.top = Ydelay + 100 * Math.sin((5 * Math.sin((currStep - 15.99) / 10)) + i * 70) * Math.sin((currStep) / 10) * Math.cos((currStep + i * 25) / 10) + "px";
        layer.style.left = Xdelay + 180 * Math.cos((5 * Math.sin((currStep - 15.99) / 10)) + i * 70) * Math.sin((currStep) / 10) * Math.cos((currStep + i * 25) / 10) + "px";
    }
    currStep += step;
}
document.write('<div id="ie" style="position:absolute"><div style="position:relative">');
for (i = 0; i < amount; i++)
    document.write('<span id="iestars' + i + '" style="position:absolute;width:2px;height:2px;background:' + colours[i] + ';font-size:2px"></span>');
document.write('</div></div>');
document.getElementById("ie").style.top = document.body.scrollTop + "px";
function delay() {
    Ydelay = YgetDelay += (my - YgetDelay) * 1 / 20;
    Xdelay = XgetDelay += (mx - XgetDelay) * 1 / 20;
    stars();
    setTimeout('delay()', 10);
}
window.onload = delay;
