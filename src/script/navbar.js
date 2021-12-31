const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event){
    if(event.type === "tapStart") 
    event.preventDefault()
    const nav = document.getElementById("nav");
    nav.classList.toggle("active");
    const active = nav.classList.contains("active");
    event.currentTarget.setAtribute("arial-label", active);
    if(active){
        event.currentTarget.setAtribute("arial-label", "Close Menu")
    }else{
        event.currentTarget.setAtribute("arial-label", "Start Menu")
    }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("tapStart", toggleMenu);