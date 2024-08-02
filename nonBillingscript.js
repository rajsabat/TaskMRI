// Load team name from storage on page load
document.getElementById('teamInput').value = localStorage.getItem('teamName');

const includeDateCheckbox = document.getElementById('includeDate');
const savedIncludeDate = JSON.parse(localStorage.getItem('includeDate'));
includeDateCheckbox.checked = savedIncludeDate === null ? true : savedIncludeDate;

generateResolutionNB();

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
  document.getElementById('link').value = '';
  document.getElementById('soid').value = '';
  document.getElementById('soType').value = '';
  document.getElementById('errmsg').value = '';
  document.getElementById('errtrace').value = '';
  document.getElementById('errURL').value = '';
  document.getElementById('logloc').value = '';
  document.getElementById('steps').value = '';
  document.getElementById('assessment').value = '';
  document.getElementById('actual').value = '';
  document.getElementById('expected').value = '';
  document.getElementById('tbapi').value = '';
  document.getElementById('just').value = '';
  document.getElementById('manAct').value = '';
  document.getElementById('req').value = '';

  generateResolutionNB();
}

function copyToClipboard() {
  const outputText = document.getElementById('output').innerText;
  const tempTextArea = document.createElement('textarea');
  tempTextArea.value = outputText;
  document.body.appendChild(tempTextArea);
  tempTextArea.select();
  tempTextArea.setSelectionRange(0, 9999999);
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

function redirectToPage2() {
  window.location.href = 'nonBilling.html';
}

function redirectToPage1() {
  window.location.href = 'index.html';
}

function generateResolutionNB() {
  const team = document.getElementById('teamInput').value || 'Team Name';
  const can = document.getElementById('can').value || 'N/A';
  const link = document.getElementById('link').value || 'N/A';
  const soid = document.getElementById('soid').value || 'N/A';
  const soType = document.getElementById('soType').value || 'N/A';
  const errmsg = document.getElementById('errmsg').value || 'N/A';
  const errtrace = document.getElementById('errtrace').value || 'N/A';
  const errUrL = document.getElementById('errURL').value || 'N/A';
  const logloc = document.getElementById('logloc').value || 'N/A';
  const steps = document.getElementById('steps').value || 'N/A';
  const assessment = document.getElementById('assessment').value || 'N/A';
  const actual = document.getElementById('actual').value || 'N/A';
  const expected = document.getElementById('expected').value || 'N/A';
  const tbapi = document.getElementById('tbapi').value || 'N/A';
  const just = document.getElementById('just').value || 'N/A';
  const manAct = document.getElementById('manAct').value || 'N/A';
  const req = document.getElementById('req').value || 'N/A';


  const includeDate = document.getElementById('includeDate').checked;
  const formattedDate = includeDate ? formatDate(new Date()) : '';

  const teamNamePart = `${formattedDate ? formattedDate + ' ' : ''} [${team}] <br /> <br />`;
  const canPart = `CAN: ${can} <br /> <br />`;
  const linkPart = `Link: ${link} <br /> <br />`;
  const soidPart = `Sales Order Id/name ${soid} <br /> <br />`;
  const soTypePart = `Sales Order Type: ${soType} <br /> <br />`;
  const errmsgPart = `Error Message: ${errmsg} <br /> <br />`;
  const errTracePart = `Error Trace: ${errtrace} <br /> <br />`;
  const errUrlPart = `Error URL: ${errUrL} <br /> <br />`;
  const loglocPart = `Log File Location: ${logloc} <br /> <br />`;
  const stepsPart = `Steps To Reproduce: ${steps} <br /> <br />`;
  const assessmentPart = `L2 Initial Assessment: ${assessment} <br /> <br />`;
  const actualPart = `Actual Result: ${actual} <br /> <br />`;
  const expectedPart = `Expected Result: ${expected} <br /> <br />`;
  const tbapiPart = `TBAPI issues Req/Response attached?: ${tbapi} <br /> <br />`;
  const justPart = `KBA Exists (Yes/No) / Justification : ${just} <br /> <br />`;
  const manActPart = `Manual Actions Done : ${manAct} <br /> <br />`;
  const reqPart = `Request Towards NC : ${req} <br /> <br />`;


  const resolutionOutput = teamNamePart + canPart + linkPart + soidPart + soTypePart + errmsgPart + errTracePart + errUrlPart
    + loglocPart + stepsPart + assessmentPart + actualPart + expectedPart + tbapiPart + justPart + manActPart + reqPart;

  document.getElementById('output').innerHTML = resolutionOutput;
}

includeDateCheckbox.addEventListener('change', saveIncludeDate);
