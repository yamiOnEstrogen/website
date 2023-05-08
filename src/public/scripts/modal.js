function createErrorModal(err) {
    console.warn(`Modals are not yet implemented. Error: ${err}`)

    const input = document.getElementById("input")
    

    input.value = err
    input.setAttribute("disabled", true)
    input.style.color = "red"
    input.style.fontWeight = "bold"
    input.style.textAlign = "center"

    
}