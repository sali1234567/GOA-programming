let pos = 0;
let box = document.getElementById("box");
let plusForPos = 1; 
function move() {
    pos += plusForPos;
    box.style.left = pos + "px";
    if (pos == 150 || pos == 0) {
        plusForPos *= -1;
    }
}
      
setInterval(move, 10);