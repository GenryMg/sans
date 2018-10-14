let text = decodeURIComponent((location.search + '').replace(/\+/g, '%20').replace(/input=/, "").replace(/[^\x00-\x7F]/g, "").substring(1).toLowerCase());

let i = 0;
let textAnimation = "* ";
let delay = 40;

(() => {let face = "faces/face_" + Math.floor(Math.random() * 9) + ".png";
  document.getElementById("face").src = face;

  if(text == "" || text == null){
    text = "type in the text box at the bottom to make me say anything";
  }else{
    document.getElementById("input").placeholder = text;
  }

  loop();
})();

function loop(){
  setTimeout(() => {
    delay = 40;
    if(i < text.length){
      textAnimation += text.charAt(i);
      if(text.charAt(i) == ',' || text.charAt(i) == ';') {
        delay = 500;
      }else if(text.charAt(i) == '.' || text.charAt(i) == '!' || text.charAt(i) == '?') {
        delay = 1000;
      }else{
        play();
      }

      document.getElementById("text").innerHTML = textAnimation;
      i++;
      loop();
    }
  }, delay);
}

function play(){
    let clone = new Audio("sans.wav").cloneNode(true);
    clone.volume = 1;
    clone.play();
}
