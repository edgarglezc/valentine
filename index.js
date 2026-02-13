const container = document.querySelector('.container');
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const music = document.getElementById('bgMusic');

container.addEventListener('click', openLetter);

function openLetter() {
  container.classList.toggle('open');
  music.play();

  const elements = document.querySelectorAll('.hidden');

  setTimeout(() => {
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('show');
      }, index * 200);
    });
  }, 500);
}

yesBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  alert("Muchas gracias por aceptar, te quiero mucho 💖✨\n\nExtráñame poquito ✨");
});

noBtn.addEventListener('click', function(e) {
  e.stopPropagation();

  let x = Math.random()*200 - 100;
  let y = Math.random()*200 - 100;

  noBtn.style.transform = `translate(${x}px, ${y}px)`;
});
