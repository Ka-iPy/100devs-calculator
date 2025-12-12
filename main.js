const screenEl = document.querySelector('span');       // or better: document.getElementById('screen')
const equalsBtn = document.getElementById('equals');     // <button id="equals">=</button>
const btns = document.getElementsByClassName('btn');              // <button id="btn">1</button>
let result = false
// attach handlers (make sure elements exist)
equalsBtn.addEventListener('click', calculate);
for (let btn of btns) {
    
  btn.addEventListener('click', () =>{
    if(result === true){
        screenEl.innerText = ''
        result = false
    }
    screenEl.innerText = screenEl.innerText + btn.innerText;
  });
}

function calculate(){
    console.log(eval(screenEl.innerText))
    console.log(result)
    screenEl.innerText = eval(screenEl.innerText)
    result = true
}