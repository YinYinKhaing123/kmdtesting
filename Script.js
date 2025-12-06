                                                        //0      1      2       3
const btns=document.querySelectorAll(".buttons button")  //All , shoes , shirt ,pant
const cards=document.querySelectorAll(".card")//12 cards

for(let i=1;i<btns.length;i++){
    btns[i].addEventListener("click",filterCards)
}

function filterCards(e){
    cards.forEach(card=>{
        card.style.display="block";
        const cardType=card.dataset.info;
        const btnType=e.target.dataset.btn;
        if(cardType!==btnType){
            card.style.display="none";
        }

    })
}
btns[0].addEventListener("click",(e)=>{
    cards.forEach(card=>{
        card.style.display="block";
    })
})