

let random = Math.floor(Math.random() * 100 +1 );
let  chk = document.querySelector("#chk");
let  won = document.querySelector('#won');
let  reset = document.querySelector('#reset');
let  life = document.querySelector('#life');
let input = document.querySelector("#input");
let remaining = document.querySelector('.remaining');
let sandwatch = document.querySelector('#sandwatch')
let container = document.querySelector('.container')
let picture = document.querySelector('#picture')
input.focus();
console.log(random)
console.log(life.innerText)
const guess = () =>  {

if(life.innerText > 1){
    if (input.value > 100 || input.value < 0){
        won.innerText = "Please Make A Valid Guess";
    } 
    else if (input.value > random){
        won.innerText ='Reduce Your Guess ↓↓↓';
            life.innerText--;
            input.value = ""
          
             } 
    else if (input.value < random){
        won.innerText ='İncrease Your Guess ↑↑↑';
            life.innerText--;
            input.value = ""
            
                 }          

    else if (input.value == random){
        won.innerText ='Congratulations You Know🥳🥳🥳';
             life.innerText--;
             input.value = "" 
             input.style.display = 'none'
             chk.style.display = 'none'
             life.innerText = random
             remaining.style.display = 'none'
             sandwatch.style.display ='none'
             container.style.background ="#ffff00";
             picture.style.background ="#ffff00";
            
        }
    }
    else {
        won.innerText ='You Lost The Game😭😭😭';
        input.value = ""
        input.style.display = 'none'
        chk.style.display = 'none'
        life.innerText = random
        remaining.style.display = 'none'
        sandwatch.style.display ='none'
        container.style.background ="#ff0000";
        picture.style.background ="#ff0000";
        
    }
}

chk.addEventListener('click', guess)

const restart = () => {
    location.reload();
}
reset.addEventListener('click', restart)

input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      guess();
    }
  });
 
  
