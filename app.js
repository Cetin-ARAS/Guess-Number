

let random = Math.floor(Math.random() * 100 +1 );
let  chk = document.querySelector("#chk");
let  won = document.querySelector('#won');
let  reset = document.querySelector('#reset');
let  life = document.querySelector('#life');
let input = document.querySelector("#input");
let remaining = document.querySelector('.remaining');
input.focus();

console.log(random)
console.log(life.innerText)
const guess = () =>  {

if(life.innerText > 1){
    if (input.value > 100 || input.value < 0){
        won.innerText = "Please Make A Valid Guess";
    } 
    else if (input.value > random){
        won.innerText ='Reduce your guess ↓↓↓';
            life.innerText--;
            input.value = ""
          
             } 
    else if (input.value < random){
        won.innerText ='İncrease your guess ↑↑↑';
            life.innerText--;
            input.value = ""
            
                 }          

    else if (input.value == random){
        won.innerText ='Congratulations you know';
             life.innerText--;
             input.value = "" 
             
             input.style.display = 'none'
             chk.style.display = 'none'
             life.innerText = random
             remaining.style.display = 'none'

        }
    }
    else {
        won.innerText ='oyunu kaybettin';
        input.value = ""
    }
}

chk.addEventListener('click', guess)

const restart = () => {
    location.reload();
}
reset.addEventListener('click', restart)

// // input.addEventListener('keydown', (e) =>{
// //     if (e.key === "Enter"){
// //         guess()
// //     }
// // }  
// )
input.addEventListener("keydown", (e) => {
    if (e.keyCode === 13) {
      guess();
    }
  });
 
  
