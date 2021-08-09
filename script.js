document.onkeydown = animateKeys;

function animateKeys(event) {
  var keyCode = event.keyCode;
  var c = String.fromCharCode(keyCode)

  var color = ["#444", '#555', '#333', '#fcb', '#00FF00']

  var key = document.createElement('div');
  document.body.appendChild(key);

  key.style.position = "absolute";

  var randX = Math.round(Math.random() * window.innerWidth);
  var randY = Math.round(Math.random() * window.innerHeight);

  key.style.left = randX + "px";
  key.style.top = randY + "px";

  key.innerText = c;
  key.textContent = c;

  var color = color[Math.floor(Math.random() * color.length)];
  key.style.color = color;

  key.style.transition = "all 0.5s linear 0s";
  key.style.left = key.offsetLeft - 30 + 'px';
  key.style.top = key.offsetTop - 30 + 'px';
  key.style.fontSize = "100px";
  key.style.opacity = 0;

  var sound = new Audio();
  sound.src = "bosca_brogai.mp3"
  sound.play();
}


