let audio = null;

export function playSound(audioName) {
  if (audio && !audio.paused) {
    audio.pause();
  } else {
    audio = new Audio(audioName);
    audio.loop = true;
    audio.play();
  }
}
