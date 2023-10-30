let sonidomar;

function preload() {
  soundFormats('wav', 'mp3', 'ogg');
  sonidomar = loadSound('sonido/mar');
}
function setup() {
  let cvn = createCanvas(windowWidth, windowheight);
  cvn.mousePressed(presionar);
}

function presionar() {
  sonidomar.play();
  circle(mouseX, mouseY, 20);
}
  
function draw() {
  
}

function mouseDragged() {
  sonidomar.play();
  circle(mouseX, mouseY, 20);
}
