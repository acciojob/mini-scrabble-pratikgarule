//your code here
let input = document.getElementById("evaluatedText");
let count = document.getElementById("letterCount");



input.addEventListener("keyup", updatecounter);
function updatecounter() {
    let str = input.value;
    let c = str.length;
    count.innerText = c;
}