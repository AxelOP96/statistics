const d = document;

const $search = d.getElementById("search"),
$cards = d.querySelectorAll(".card");

d.addEventListener("keyup", (e)=>{
    if(e.target === $search){
        
        $cards.forEach( (card) =>{
            
            if(!card.firstElementChild.textContent.toLowerCase().includes($search.value)){
                card.classList.add("none");
            }else{
                card.classList.remove("none");
            }
        })
    }
})