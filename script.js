const nomeDaTarefa = document.getElementById("nova-tarefa")
const buttonAddItem = document.getElementById("btn-adicionar")
const lista = document.querySelector("ul")

buttonAddItem.addEventListener("click", (event) => {
    event.preventDefault()
    const input = document.createElement("input")
    input.type = "checkbox"
    const span = document.createElement("span")
    span.textContent = (nomeDaTarefa).value
    const botao = document.createElement("button")
    botao.id = "btn-deletar"
    const img = document.createElement("img")
    img.src = "assets/icons/frame.svg"
    const li = document.createElement("li")
    li.id = "tarefa"
    const alerta = document.getElementById("alert")
    const fechar = document.getElementById("btn-fechar")
    li.append(input)
    li.append(span)
    li.append(botao)
    botao.append(img)
    lista.append(li)

    botao.addEventListener("click", (event) => {
        event.preventDefault()
        li.remove()
        alerta.style.display = "flex"
        fechar.addEventListener("click", (event) => {
            alerta.style.display = "none"
        })
        
    })      
})

