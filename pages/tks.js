function pegarNota(){
    let nota = localStorage.getItem("nota")
let paragrafoNota = document.querySelector(".p_nota")
paragrafoNota.innerHTML = `Você solecionou ${nota} de 5`
}
pegarNota()