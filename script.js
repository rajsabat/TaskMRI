 // Load team name from storage on page load
document.getElementById('teamInput').value = localStorage.getItem('teamName');

const includeDateCheckbox = document.getElementById('includeDate');
const savedIncludeDate = JSON.parse(localStorage.getItem('includeDate'));
includeDateCheckbox.checked = savedIncludeDate === null ? true : savedIncludeDate;

generateResolution();

function generateResolution() {
  const team = document.getElementById('teamInput').value || 'Team Name';
  const can = document.getElementById('can').value || 'N/A';
  const ba = document.getElementById('ba').value || 'N/A';
  const purpose = document.getElementById('purpose').value || 'N/A';
  const invoice = document.getElementById('invoice').value || 'N/A';
  const desc = document.getElementById('desc').value || 'N/A';

  const includeDate = document.getElementById('includeDate').checked;
  const formattedDate = includeDate ? formatDate(new Date()) : '';

  const teamNamePart = `${formattedDate ? formattedDate + ' ' : ''} [${team}] <br />`;
  const purposePart = `Purpose: ${purpose} <br />`;
  const canPart = `CAM: ${can} <br />`;
  const baPart = `Billing Account: ${ba} <br />`;
  const invoicePart = `Invoice: ${invoice} <br />`;
  const descPart = `Description: ${desc}`;

  const resolutionOutput = teamNamePart + canPart + baPart + purposePart + invoicePart + descPart;

  document.getElementById('output').innerHTML = resolutionOutput;
}

function saveTeamName() {
  const teamName = document.getElementById('teamInput').value;
  localStorage.setItem('teamName', teamName);
}
  
function formatDate(date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().slice(-0);
  return `${day}/${month}/${year}`;
}

function clearFields() {
  document.getElementById('can').value = '';
  document.getElementById('ba').value = '';
  document.getElementById('something').value = '';
  document.getElementById('anything').value = '';

  generateResolution();
}

function copyToClipboard() {
  const outputText = document.getElementById('output').innerText;
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = outputText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 99999);
  document.execCommand('copy');
  document.body.removeChild(tempTextArea);

  const statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = 'Resolution copied to clipboard!';

  setTimeout(() => {
    statusMessage.textContent = '';
  }, 1500);
}

// Theme
function toggleTheme() {
  const body = document.body;
  body.classList.toggle('dark-mode');
  const isDarkMode = body.classList.contains('dark-mode');
  localStorage.setItem('darkMode', isDarkMode);

  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle.textContent = isDarkMode ? '☀️' : '🌙';
}

const isDarkMode = JSON.parse(localStorage.getItem('darkMode'));
if (isDarkMode) {
    document.body.classList.add('dark-mode');
}

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.textContent = isDarkMode ? '☀️' : '🌙';

function saveIncludeDate() {
  const includeDateState = includeDateCheckbox.checked;
  localStorage.setItem('includeDate', JSON.stringify(includeDateState));
}

includeDateCheckbox.addEventListener('change', saveIncludeDate);
