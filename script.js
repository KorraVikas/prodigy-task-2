let timer; 
let startTime; 
let elapsedTime = 0; 
let running = false; 


function formatTime(milliseconds) {
  let date = new Date(milliseconds);
  let hours = date.getUTCHours().toString().padStart(2, '0');
  let minutes = date.getMinutes().toString().padStart(2, '0');
  let seconds = date.getSeconds().toString().padStart(2, '0');
  let millis = date.getMilliseconds().toString().padStart(3, '0');
  return `${hours}:${minutes}:${seconds}.${millis}`;
}


function updateDisplay() {
  document.getElementById('time').textContent = formatTime(elapsedTime);
}


function startStop() {
  if (running) {
    clearInterval(timer);
    running = false;
    document.getElementById('startStopBtn').textContent = 'Start';
  } else {
    startTime = Date.now() - elapsedTime;
    timer = setInterval(function() {
      elapsedTime = Date.now() - startTime;
      updateDisplay();
    }, 10);
    running = true;
    document.getElementById('startStopBtn').textContent = 'Stop';
  }
}

function reset() {
  clearInterval(timer);
  elapsedTime = 0;
  updateDisplay();
  running = false;
  document.getElementById('startStopBtn').textContent = 'Start';
  document.getElementById('laps').textContent = '';
}

function lap() {
  if (running) {
    let lapTime = formatTime(elapsedTime);
    let lapItem = document.createElement('div');
    lapItem.textContent = lapTime;
    document.getElementById('laps').appendChild(lapItem);
  }
}
