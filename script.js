//// Functions ////
// PlayAudio() will play the Sound matching a specific Key pressed down
function playAudio(e) {
      const audio = document.querySelector(`audio[data-code="${e.code}"]`); // get the audio source based on the data-code attribute
      const key = document.querySelector(`.key[data-code="${e.code}"]`); // get the key value based on the data-code attribute

      // console.log(e.code);
      // console.log(audio);
      // console.log(key);

      if (!audio) return; // stop the fn if no audio

      audio.currentTime = 0; // rewind to start

      audio.play(); // to play the audio 

      key.classList.add("playing"); // add Key Playing Class Style for the transform effect 
}

// removeTransition() will the transform property
function removeTransition(e) {
      if (e.propertyName !== "transform") return; // to skip execution if its not transform property
      // console.log(e.propertyName); 

      this.classList.remove("playing"); // remove the transform effect applied to the playAudio() execution phase
}
////////////////////////////////////////////////////////////////

////Event Listeners////
// listen for a keydown event to apply the audioPlay()
window.addEventListener("keydown", playAudio);

const keys = document.querySelectorAll('.key'); // get all keys as a NodeList
// listen for keydown events on each key to remove the transform effect
keys.forEach(key => key.addEventListener('transitionend', removeTransition));