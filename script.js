const nav = document.getElementById("nav");

let start = 0;


function wallChange() {
    if (start === 0) {
        document.getElementById("parent").style.backgroundImage = "url(/main.jpg)";
        document.getElementById("small").style.background = "linear-gradient(45deg, rgb(223, 181, 126), rgb(172, 131, 131))";
        start++
    } else {
        document.getElementById("parent").style.backgroundImage = "url(/secend.jpg)";
        document.getElementById("small").style.background = "linear-gradient(45deg, rgb(255, 0, 255), rgb(97, 95, 211))";
        start--
    }
}

let date = new Date();
var time = date.toLocaleTimeString('en-US')
console.log(time);

document.getElementById("time").innerHTML = `${time[0]}:${time[2]}${time[3]} ${time[8]}${time[9]}`