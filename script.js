const nav = document.getElementById("nav");
const dark = document.getElementById("dark");
let start = 0;


function wallChange() {
    console.log(dark);
    if (start === 0) {
        dark.classList.remove("changeA");
        dark.classList.add("changeD");
        document.getElementById("parent").style.backgroundImage = "url(https://ibrakh.github.io/SCH/main.jpg)";
        document.getElementById("small").style.background = "linear-gradient(45deg, rgb(223, 181, 126), rgb(172, 131, 131))";
        start++
    } else {
        dark.classList.remove("changeD");
        dark.classList.add("changeA");
        document.getElementById("parent").style.backgroundImage = "url(https://ibrakh.github.io/SCH/secend.jpg)";
        document.getElementById("small").style.background = "linear-gradient(45deg, rgb(255, 0, 255), rgb(97, 95, 211))";
        start--
    }
}

let date = new Date();
var time = date.toLocaleTimeString('en-US')
console.log(time);

document.getElementById("time").innerHTML = `${time[0]}:${time[2]}${time[3]} ${time[8]}${time[9]}`