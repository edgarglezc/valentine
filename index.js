function openLetter() {
  const container = document.querySelector('.container');
  container.classList.toggle('open');

  document.getElementById("bgMusic").play();

  const elements = document.querySelectorAll('.hidden');

  setTimeout(() => {
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('show');
      }, index * 200);
    });
  }, 500);
}

function yes(e){
  e.stopPropagation();
  alert("Muchas gracias por aceptar, te quiero mucho 💖✨\n\nExtráñame poquito ✨");
}

function moveNo(e){
  e.stopPropagation();
  let x=Math.random()*200-100;
  let y=Math.random()*200-100;
  document.getElementById("noBtn").style.transform=`translate(${x}px,${y}px)`;
}

// Lluvia de corazones
setInterval(()=>{
  let h=document.createElement("div");
  h.className="heart";
  h.innerHTML="💖";
  h.style.left=Math.random()*100+"vw";
  h.style.animationDuration=(Math.random()*3+2)+"s";
  document.body.appendChild(h);
  setTimeout(()=>h.remove(),5000);
},300);
