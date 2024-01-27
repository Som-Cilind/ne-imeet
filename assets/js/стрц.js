let игроки = document.querySelector('.players')

let widthLine = 90

let widthMen = 120

let widthMicro = 90

for (let i = 0; i < 4; i++) {
    
    игроки.insertAdjacentHTML("beforeend",       `<div style="width:${widthLine}%" class="players_little">
        <div class="left_player_little">
          <img 
          style="width:${widthMen}px"
            class="чиловек"
            src="./assets/images/гласоване/просточел.png"
            alt=""
          />
          <img style="width:${widthMicro}px" class="mic" src="./assets/images/гласоване/вкл.png" alt="" />
        </div>
        <div class="right_player_little">
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
