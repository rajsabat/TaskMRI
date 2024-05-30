 // Load team name from storage on page load
document.getElementById('teamInput').value = localStorage.getItem('teamName');

const includeDateCheckbox = document.getElementById('includeDate');
const savedIncludeDate = JSON.parse(localStorage.getItem('includeDate'));
includeDateCheckbox.checked = savedIncludeDate === null ? true : savedIncludeDate;

generateResolution();

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

function generateResolution() {
   const team = document.getElementById('teamInput').value || 'Team Name';
    const can = document.getElementById('can').value || 'N/A';
    const link = document.getElementById('cseg').value || 'N/A';
    const soid = document.getElementById('impacted').value || 'N/A';
    const soType = document.getElementById('job').value || 'N/A';
    const errmsg = document.getElementById('fmsg').value || 'N/A';
      const errtrace = document.getElementById('errtrace').value || 'N/A';
    const errUrL = document.getElementById('gmffile').value || 'Yes';
    const logloc = document.getElementById('logloc').value || 'N/A';
    const steps = document.getElementById('kba').value || 'N/A';
       const assessment = document.getElementById('assessment').value || 'N/A';
    const just = document.getElementById('just').value || 'N/A';
    const manAct = document.getElementById('manAct').value || 'N/A';
    const req = document.getElementById('req').value || 'N/A';


    const includeDate = document.getElementById('includeDate').checked;
    const formattedDate = includeDate ? formatDate(new Date()) : '';

    const teamNamePart = `${formattedDate ? formattedDate + ' ' : ''} [${team}] <br /> <br />`;
    const canPart = `CAN: ${can} <br /> <br />`;
    const linkPart = `Customer Segment: ${link} <br /> <br />`;
    const soidPart = `Accounts Impacted ${soid} <br /> <br />`;
    const soTypePart = `Failed Job Name: ${soType} <br /> <br />`;
    const errmsgPart = `Failure Message: ${errmsg} <br /> <br />`;
     const errTracePart = `Error Stack Trace: ${errtrace} <br /> <br />`;
    const errUrlPart = `XML & GMF File Attched : ${errUrL} <br /> <br />`;
    const loglocPart = `Log File Location: ${logloc} <br /> <br />`;
    const stepsPart = `KBA Followed For FLA : ${steps} <br /> <br />`;
    const assessmentPart = `L2 Initial Assessment: ${assessment} <br /> <br />`;
     const justPart = `KBA Exists (Yes/No) / Justification : ${just} <br /> <br />`;
    const manActPart = `Manual Actions Done : ${manAct} <br /> <br />`;
    const reqPart = `Request Towards NC : ${req} <br /> <br />`;


    const resolutionOutput = teamNamePart + canPart + linkPart + soidPart + soTypePart + errmsgPart + errTracePart + errUrlPart
    + loglocPart + stepsPart + assessmentPart + justPart +manActPart + reqPart;

    document.getElementById('output').innerHTML = resolutionOutput;

}
includeDateCheckbox.addEventListener('change', saveIncludeDate);
