const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')
const dados = JSON.parse(localStorage.getItem('Habits')) || {}

button.addEventListener('click', add)
form.addEventListener('change', save)

function add() {
    const hoje = new Date().toLocaleDateString('pt-br').slice(0, -5)
    const dayExists = nlwSetup.dayExists(hoje)

    if(dayExists) {
        alert("Volte Amanhã...")
        return
    }
    alert("Registrado: " + hoje)
    nlwSetup.addDay(hoje)
}
function save(){
    localStorage.setItem('Habits', JSON.stringify(nlwSetup.data)) 

}

nlwSetup.setData(dados)
nlwSetup.load()