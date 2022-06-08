const btn = document.querySelector('#one_btn');
const fillBtn = document.querySelector('#fillBtn');
const alertBtn = document.querySelector('#alertBtn');

const ctx = document.getElementById('#mycanvas');

btn.addEventListener('click', () => {
  let myDate;
  for(let i = 0; i < 10000000; i++) {
    let date = new Date();
    myDate = date
  }

  console.log(myDate);

  let pElem = document.createElement('p');
  pElem.textContent = 'This is a newly-added paragraph.';
  document.body.appendChild(pElem);
});

function expensiveOperation() {
    alert('You edrghsdrg me!')

    //#TODO

    for(let i = 0; i < 1000000; i++) {
      ctx.fillStyle = 'rgba(0,0,255, 0.2)';
      ctx.beginPath();
      ctx.arc(random(0, canvas.width), random(0, canvas.height), 10, degToRad(0), degToRad(360), false);
      ctx.fill()
    }
  }
  
  fillBtn.addEventListener('click', expensiveOperation);
  
  alertBtn.addEventListener('click', () =>
    alert('You clicked me!')
  );