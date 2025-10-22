const displayBox = document.getElementById('display-box');
const currentKey = document.getElementById('current-key');
const keyLog = document.getElementById('key-log');
const clearBtn = document.getElementById('clear-btn');

document.addEventListener('keydown', (event) => {
  currentKey.textContent = event.key === ' ' ? 'Space' : event.key;
  displayBox.classList.add('active');

  const keyElement = document.createElement('span');
  keyElement.classList.add('key-item');
  keyElement.textContent = event.key === ' ' ? 'Space' : event.key;

  keyLog.appendChild(keyElement);
  keyLog.scrollTop = keyLog.scrollHeight;
});

document.addEventListener('keyup', () => {
  displayBox.classList.remove('active');
});

clearBtn.addEventListener('click', () => {
  keyLog.innerHTML = '';
  currentKey.textContent = '-';
});
