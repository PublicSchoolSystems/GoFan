alert("Please refer to the actual GoFan page before filling in the prompts!");

const teamInput1 = prompt("What is the first team?");
const teamInput2 = prompt("What is the second team?");
const month = prompt("What month is the game on? (give 3 letter abriviation)");
const day = prompt("What day is the game on? (give the day as a number)");
const dayOw = prompt(
  "What day is the game on? (give the day of the week as a 3 letter abriviation)"
);
const year = prompt("What is the current year?");
const JVstartingTime = prompt(
  "When does JV start? (give time in form of '_:__ PM/AM')"
);
const VstartingTime = prompt(
  "When does Varsity start? (give time in form of '_:__ PM/AM')"
);

document.querySelector(
  ".field1"
).textContent = `${teamInput1} vs ${teamInput2}`;
document.querySelector(
  ".field2"
).textContent = `${teamInput1} vs ${teamInput2}`;
document.querySelector(
  ".field3"
).textContent = `${dayOw}, ${month} ${day}, ${year} at ${JVstartingTime}`;
document.querySelector(
  ".field4"
).textContent = `EVENT ALERT: JV starts at ${JVstartingTime}. Varsity at ${VstartingTime}. One Ticket`;

const useTicketDiv = document.querySelector(".useTicketDiv");
const authStaffMainDiv = document.querySelector(".authStaffMainDiv");
const useTicket = document.querySelector(".useTicket");
const ticketRedeemedModal = document.querySelector(".ticketRedeemedModal");
const FDIN = document.querySelector(".FDIN");
const cancelBTN = document.querySelector(".cancel");
const continueBTN = document.querySelector(".continue");

function nextPageAuth() {
  authStaffMainDiv.classList.remove("hidden");
  useTicketDiv.classList.add("hidden");
  FDIN.classList.add("fadeIn");
}

function cancelPress() {
  authStaffMainDiv.classList.add("hidden");
  useTicketDiv.classList.remove("hidden");
  FDIN.classList.remove("fadeIn");
}

function continuePress() {
  ticketRedeemedModal.classList.toggle("hidden");
}

useTicket.addEventListener("click", nextPageAuth);
cancelBTN.addEventListener("click", cancelPress);
continueBTN.addEventListener("click", continuePress);
