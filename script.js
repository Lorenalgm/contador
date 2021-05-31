const daysContainer = document.getElementById('dias')
const hoursContainer = document.getElementById('horas')
const minutesContainer = document.getElementById('minutos')
const secondsContainer = document.getElementById('segundos')
const spinnerLoading = document.getElementById('spinner')
const countdownContainer = document.getElementById('countdown')

const dataInserida =  document.getElementById('data')
alert(dataInserida)
const botaoIniciar = document.getElementById('botaoCronometro')


const nextYear = new Date().getFullYear() + 1
const newDate = new Date(`January 01 ${nextYear} 00:00:00`)

//const getTimeUnit = unit => unit < 10 ? '0'+ unit : unit "AINDA NÃO SEI ESTE MODO DE CRIAÇÃO DE FUNÇÃO"

function unit(unidade){
  return unidade < 10 ? '0'+ unidade : unidade
}

const insertCountdownValues = ({days, hours, minutes, seconds}) => {
  daysContainer.textContent = unit(days)
  hoursContainer.textContent = unit(hours)
  minutesContainer.textContent = unit(minutes)
  secondsContainer.textContent = unit(seconds)
}

const updateCountdown = () => {
  const currentTime = new Date()
  const difference = newDate - currentTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  const minutes = Math.floor(difference / 1000 / 60) % 60
  const seconds = Math.floor(difference / 1000) % 60
  
  insertCountdownValues({days, hours, minutes, seconds})
  // Passando um OBJ
}

const handleCountdownDisplay = () => {
  spinnerLoading.remove()
  countdownContainer.style.display = 'flex'
}

setTimeout(handleCountdownDisplay, 1000) //Remover o spinner depois de 1s.

setInterval(updateCountdown, 1000) //Invoca a função a cada 1s

botaoIniciar.addEventListener('click', function(){
  const dataSelecionada = new Date(dataInserida.value) //pegar a data inserida
  alert(dataSelecionada)
})