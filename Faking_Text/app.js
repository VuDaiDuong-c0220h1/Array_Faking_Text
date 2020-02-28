let a = "Tôi là một thằng ngố";
let array = a.split("");
let html = "";
let i = 0;
function showMess() {
    if (i == 20) {
        i= 0;
        html = "";
        document.getElementById("text").value = html;
    } else {
        html += array[i];
        i++;
        document.getElementById("text").value = html;
    }
}
