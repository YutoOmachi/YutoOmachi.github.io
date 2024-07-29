var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('I am a software developer and a passionate leraner with a big love for Football ⚽') //Add your own tagline
  .pauseFor(5000)
  .start()
