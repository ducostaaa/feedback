let botoes = document.querySelectorAll(".botoes button")
.botes.forEach(botao => {
    botao.addEventListener("click", guardarNota )
})

function guardarNota(){
        let nota = evento.target.innerText

localStorage.setItem("nota", nota)
}