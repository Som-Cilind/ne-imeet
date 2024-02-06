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
 {
prof:"povar",
fobia:"spider",
hobby:"beysball",
weakness:"ice-cream",
 } ,
 {
  prof:"office-manager",
  fobia:"spider",
  hobby:"beysball",
  weakness:"ice-cream",
   } ,
 {
  prof:"major in police",
  fobia:"spider",
  hobby:"beysball",
  weakness:"ice-cream",
   } ,
 {
  prof:"arbuz",
  fobia:"spider",
  hobby:"beysball",
  weakness:"ice-cream",
   } ,
 {
  prof:"ufolog",
  fobia:"spider",
  hobby:"beysball",
  weakness:"ice-cream",
   } ,
 {
  prof:"bobr curva",
  fobia:"spider",
  hobby:"beysball",
  weakness:"ice-cream",
   } ,
 {
  prof:"kapibara",
  fobia:"spider",
  hobby:"beysball",
  weakness:"ice-cream",
   } ,
 {
  prof:"braaaaaaaaaaah",
  fobia:"spider",
  hobby:"beysball",
  weakness:"ice-cream",
   } ,
]

players1.forEach((element,i) => {
  element.onclick = function () {
    players2.innerHTML = `
    <div class="prof">      <h2 class="profession">Профессия ${mas_player[i].prof}</h2>
      <img class="вопрос" src="./assets/images/гласоване/question-mark.svg" alt="" /></div>
      <div class="prof">      <h2 class="profession">Слабости</h2>
        <img class="вопрос" src="./assets/images/гласоване/question-mark.svg" alt="" /></div>
        <div class="prof">      <h2 class="profession">Страхи</h2>
          <img class="вопрос" src="./assets/images/гласоване/check-mark.svg" alt="" /></div>
          <div class="prof">      <h2 class="profession">Навыки</h2>
            <img class="вопрос" src="./assets/images/гласоване/question-mark.svg" alt="" /></div>
`
  }
});