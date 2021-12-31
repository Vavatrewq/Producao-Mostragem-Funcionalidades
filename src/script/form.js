function cancelarEnvio(){
    const form = document.querySelector(".form");

    form.addEventListener("submit", (evento)=>{
        evento.preventDefault();

        const name = form.querySelector("#name");
        const nameSecond = form.querySelector("#secondName");
        const email = form.querySelector("#email");

        name.value = "";
        nameSecond.value = "";
        email.value = "";
    })
}

cancelarEnvio();