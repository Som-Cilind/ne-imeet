let search_room = [
    {
        nameRoom :"Siba",
        password :"чебумень",
        people : 3.2,
        isOpen :true
    },
        {
        nameRoom :"Riba",
        password :"арбуз",
        people : 5,
        isOpen :true
    },   {
        nameRoom :"Ziba",
        password : "менячиб",
        people :78,
        isOpen : true
    },
    {
        nameRoom :"piba",
        password : "менячиб",
        people : 4,
        isOpen : false
    },{
        nameRoom :"tiba",
        password : "менячиб",
        people : 1,
        isOpen : false
    },
]

let searchList = document.querySelector('.search-room_main_list')

search_room.forEach((element, ikaka) => {
searchList.insertAdjacentHTML("beforeend", `<div class="search-room_item">
<h1>№${ikaka+1}</h1>
          <h1>${element.nameRoom}</h1>
          <div class="info">
            <h1>${element.people}/8</h1>
            <img src= ${element.isOpen ? "./assets/images/icons/zamok_open.svg" : "./assets/images/icons/zamok_close.svg"} alt="" />
          </div>
        </div>`

    )
});