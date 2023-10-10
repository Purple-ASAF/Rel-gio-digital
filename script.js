//ALARM
let soundOff = false;
let setHourAlarm = 0
let setMinAlarm = 0
const now1 = new Date()

const audioAlarm = new Audio('https://actions.google.com/sounds/v1/alarms/digital_watch_alarm_long.ogg');
const alarmHour = document.getElementById('hour-alarm')
const alarmMin = document.getElementById('min-alarm')
alarmHour.addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAlarm()
    alarmMin.focus();
  }
})

alarmMin.addEventListener('keypress', function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    handleAlarm()
    alarmMin.focus();
    document.getElementById("alarm").classList.remove("ativo");
    soundOff = false;
  }
})

function handleAlarm() {
  setHourAlarm = alarmHour.value * 1
  setMinAlarm = alarmMin.value * 1
  console.log(setHourAlarm)
  console.log(setMinAlarm)
}

//CLOCK
btnAlarm = document.getElementById('btnAlarm');
btnAlarm.addEventListener('click', function () { document.getElementById('alarm').classList.add('ativo'); alarmHour.focus(); soundOff = false });

function initClock() {
  const now = new Date();
  const getHour = document.getElementById('containerHora');
  const getMin = document.getElementById('containerMin');
  const getSec = document.getElementById('containerSec');

  const hour = now.getHours();
  const min = now.getMinutes();
  const sec = now.getSeconds()

  if (hour < 10) {
    getHour.innerText = '0' + hour + ':'
  }
  else { getHour.innerText = hour + ':' }

  if (min < 10) {
    getMin.innerText = '0' + min + ':'
  }
  else { getMin.innerText = min + ':' }

  if (sec < 10) {
    getSec.innerText = '0' + sec
  }
  else { getSec.innerText = sec }

  if (setHourAlarm === hour && setMinAlarm === min && soundOff === false) {
    audioAlarm.play()
  }
  window.addEventListener('click', function () { soundOff = true });
}

setInterval(() => {
  if (soundOff === true) {
    audioAlarm.pause()
  }

  initClock()

}, 1000)

// CRONÔMETRO

let control = 0
const btnCronometer = document.getElementById('btnCronometer');
const btnPause = document.getElementById('btnPause');
const btnPlay = document.getElementById('btnPlay');
const btnClear = document.getElementById('btnClear');
const btnClock = document.getElementById('btnClock');

btnClock.addEventListener('click', clock)
btnCronometer.addEventListener('click', initCronometer);
btnPause.addEventListener('click', pause);
btnPlay.addEventListener('click', play);
btnClear.addEventListener('click', clear)

function clock() {
  clear()

  btnClock.classList.remove('ativo')
  btnClear.classList.remove('ativo')
  btnPause.classList.remove('ativo')
  btnPlay.classList.remove('ativo')
  btnCronometer.classList.add('ativo')
  document.getElementById('btnVisor').classList.add('ativo')
  document.getElementById("container").classList.add("ativo")
  document.getElementById("containerCronometer").classList.remove('ativo')
}

function clear() {
  btnPlay.disabled = false
  clearInterval(control)
  h = 0
  m = 0
  s = 0
  ms = 0
  if (h < 10) {
    document.getElementById('cronometerHours').innerText = '0' + h
  }
  else { document.getElementById('cronometerHours').innerText = h }

  if (m < 10) {
    document.getElementById('cronometerMin').innerText = '0' + m
  }
  else { document.getElementById('cronometerMin').innerText = m }

  if (s < 10) {
    document.getElementById('cronometerSec').innerText = '0' + s
  }
  else { document.getElementById('cronometerSec').innerText = s }

  document.getElementById('cronometerMS').innerText = ms
}

function play() {
  btnPlay.disabled = true;

  function setCronometer() {
    if (h < 10) {
      document.getElementById('cronometerHours').innerText = '0' + h
    }
    else { document.getElementById('cronometerHours').innerText = h }

    if (m < 10) {
      document.getElementById('cronometerMin').innerText = '0' + m
    }
    else { document.getElementById('cronometerMin').innerText = m }

    if (s < 10) {
      document.getElementById('cronometerSec').innerText = '0' + s
    }
    else { document.getElementById('cronometerSec').innerText = s }
    document.getElementById('cronometerMS').innerText = ms
  }

  control = setInterval(() => {
    setCronometer()
    if (ms <= 99) {
      ms = ms + 1
    }
    else { ms = 0 }

    if (ms === 0) {
      if (s < 59) {
        s++
      }
      else { s = 0 }
    }

    if (ms === 0 && s === 0) {
      if (m < 59) {
        m++
      }
      else { m = 0 }
    }

    if (ms === 0 && s === 0 && m === 0) {
      if (h < 59) {
        h++
      }
      else { h = 0 }
    }

  }, 10);
}

function pause() {
  btnPlay.disabled = false;
  clearInterval(control)
  h = h
  m = m
  s = s
  ms = ms
}

function initCronometer() {

  document.getElementById("container").classList.remove("ativo")
  document.getElementById("containerCronometer").classList.add('ativo')
  document.getElementById("btnClock").classList.add('ativo')
  document.getElementById("btnVisor").classList.remove('ativo')
  btnCronometer.classList.remove("ativo")

  btnClear.classList.add("ativo")
  btnPause.classList.add("ativo")
  btnPlay.classList.add("ativo")

  h = 0
  m = 0
  s = 0
  ms = 0

  function setCronometer() {
    if (h < 10) {
      document.getElementById('cronometerHours').innerText = '0' + h
    }
    else { document.getElementById('cronometerHours').innerText = h }

    if (m < 10) {
      document.getElementById('cronometerMin').innerText = '0' + m
    }
    else { document.getElementById('cronometerMin').innerText = m }

    if (s < 10) {
      document.getElementById('cronometerSec').innerText = '0' + s
    }
    else { document.getElementById('cronometerSec').innerText = s }
    document.getElementById('cronometerMS').innerText = ms
  }

  control = setInterval(() => {
    setCronometer()
    if (ms <= 99) {
      ms = ms + 1
    }
    else { ms = 0 }

    if (ms === 0) {
      if (s < 59) {
        s++
      }
      else { s = 0 }
    }

    if (ms === 0 && s === 0) {
      if (m < 59) {
        m++
      }
      else { m = 0 }
    }

    if (ms === 0 && s === 0 && m === 0) {
      if (h < 59) {
        h++
      }
      else { h = 0 }
    }
  }, 10);
}

// VISOR

const btnVisor = document.getElementById('btnVisor');
btnVisor.addEventListener('click', handleVisor);

function handleVisor() {
  if (document.getElementById('containerCronometer2').classList.contains('red') && document.getElementById('container2').classList.contains('red')) {
    document.getElementById('containerCronometer2').classList.remove('red');
    document.getElementById('container2').classList.remove('red');
    document.getElementById('container2').classList.add('yellow');
    document.getElementById('containerCronometer2').classList.add('yellow');
  }
  else if (document.getElementById('containerCronometer2').classList.contains('yellow') && document.getElementById('container2').classList.contains('yellow')) {
    document.getElementById('containerCronometer2').classList.remove('yellow');
    document.getElementById('container2').classList.remove('yellow');
    document.getElementById('container2').classList.add('white');
    document.getElementById('containerCronometer2').classList.add('white');
  }

  else if (
    document.getElementById('containerCronometer2').classList.contains('white') && document.getElementById('container2').classList.contains('white')) {
    document.getElementById('containerCronometer2').classList.remove('white');
    document.getElementById('container2').classList.remove('white');
    document.getElementById('container2').classList.add('red');
    document.getElementById('containerCronometer2').classList.add('red');
  }
}