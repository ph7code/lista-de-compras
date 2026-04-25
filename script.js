const addTarefa = document.getElementById("nova-tarefa")
const btnAddTarefa = document.getElementById("btn-adicionar")
const deletarTarefa = document.getElementById("btn-deletar")
const alert = document.getElementById("alert")
const btnFechar = document.getElementById("btn-fechar")


const listaDeCompras = document.getElementById("lista-de-compras")

btnAddTarefa.addEventListener("click", (event) => {
    event.preventDefault()
    const li = document.createElement("li")
    li.id = "tarefa"
    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"

    const span = document.createElement("span")
    span.textContent = addTarefa.value
    const button = document.createElement("button")
    button.id = "btn-deletar"
    const img = document.createElement("img")
    img.src = "/assets/icons/frame.svg"
    
    button.addEventListener("click", () => {
        li.remove()

        alert.style.display = "flex"
        setTimeout(() => {
            alert.style.display = "none"
        },
        3000)
    })
    button.append(img)
    li.append(checkbox)
    li.append(span)
    li.append(button)
    listaDeCompras.append(li)

    addTarefa.value = ""

 console.log("escutado")
})

btnFechar.addEventListener("click", () => {
    alert.style.display = "none"
})

