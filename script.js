let text = decodeURIComponent((location.search + '').replace(/\+/g, '%20').replace(/input=/, "").substring(1).toLowerCase());

let i = 0;
let textAnimation = "* ";
let delay = 35;

(() => {
  console.log(text + " | " + text.length);
  if(text == "" || text == null){
    text = "type in the text box in the bottom right corner";
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
      console.log(i)
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
