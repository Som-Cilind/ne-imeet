import prof from './massivs/profession.js'
import { diseas } from './massivs/disease.js';
import { fobia } from './massivs/fobia.js';

function Random(max) {
    return Math.floor(Math.random()*max)
}
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
//.
let игроки = document.querySelector('.players')

let widthLine = 90

let widthMen = 120

let widthMicro = 90

for (let i = 0; i < 4; i++) {
  
  игроки.insertAdjacentHTML("beforeend",       `<div style="width:${widthLine}%" class="players_little">
  <div class="left_player_little dop_class">
  <img 
  style="width:${widthMen}px"
  class="чиловек"
  src="./assets/images/гласоване/просточел.png"
  alt=""
  />
  <img style="width:${widthMicro}px" class="mic" src="./assets/images/гласоване/вкл.png" alt="" />
  </div>
  <div class="right_player_little dop_class">
  <img style="width:${widthMicro}px" class="mic" src="./assets/images/гласоване/вкл.png" alt="" />
  <img
  style="width:${widthMen}px"
  
  class="чиловек"
  src="./assets/images/гласоване/просточел.png"
  alt=""
  />
  </div>
  </div>`)
  widthLine = widthLine - 10
  widthMen = widthMen - 10
  widthMicro = widthMicro - 10
}

let players1 = document.querySelectorAll(".dop_class")

let players2 = document.querySelector(".menu")

console.log(players1);

let mas_player = [
]

for (let i = 0; i < 8; i++) {
mas_player.push( {
  prof:prof[Random(prof.length)],
  fobia:(Random(4)!=1)? fobia[Random(fobia.length)]:"да как так то а",
  hobby:"beysnmjkll",
  weakness: (Random(4)!=3)? diseas[Random(diseas.length)]:"боги милосердны😒",
   },)  
}

players1.forEach((element,i) => {
  element.onclick = function () {
    players2.innerHTML = `
    <div class="prof">      <h2 class="profession">Профессия ${mas_player[i].prof}</h2>
      <img class="вопрос" src="./assets/images/гласоване/question-mark.svg" alt="" /></div>
      <div class="prof">      <h2 class="profession">Болезни ${mas_player[i].weakness}</h2>
        <img class="вопрос" src="./assets/images/гласоване/question-mark.svg" alt="" /></div>
        <div class="prof">      <h2 class="profession">Страхи ${mas_player[i].fobia}</h2>
          <img class="вопрос" src="./assets/images/гласоване/check-mark.svg" alt="" /></div>
          <div class="prof">      <h2 class="profession">Навыки ${mas_player[i].hobby}</h2>
            <img class="вопрос" src="./assets/images/гласоване/question-mark.svg" alt="" /></div>
`
  }
});