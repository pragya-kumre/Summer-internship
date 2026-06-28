let selectedSlot = "";
let selectedButton = null;
let bookingCount = 1000;

function selectSlot(button, slot){

document.querySelectorAll(".slot").forEach(btn=>{
btn.classList.remove("selected-slot");
});

button.classList.add("selected-slot");

selectedSlot = slot;
selectedButton = button;

document.getElementById("selectedSlot").innerText =
"Selected Slot : " + slot;
}

function bookSlot(){

let name = document.getElementById("name").value;
let vehicle = document.getElementById("vehicle").value;
let date = document.getElementById("date").value;
let time = document.getElementById("time").value;

if(!selectedSlot || name==="" || vehicle==="" || date==="" || time===""){
alert("Please fill all details and select a slot!");
return;
}

bookingCount++;
document.getElementById("bookingCount").innerText = bookingCount;

let bookingId = "PS" + Math.floor(Math.random()*10000);
let pin = Math.floor(1000 + Math.random()*9000);

if(selectedButton){
selectedButton.classList.remove("available","selected-slot");
selectedButton.classList.add("booked");
selectedButton.disabled = true;
}

document.getElementById("result").innerHTML = `
<div class="booking-card">
<h2>✔ Booking Confirmed</h2>
<p><b>ID:</b> ${bookingId}</p>
<p><b>Slot:</b> ${selectedSlot}</p>
<p><b>Name:</b> ${name}</p>
<p><b>Vehicle:</b> ${vehicle}</p>
<p><b>Date:</b> ${date}</p>
<p><b>Time:</b> ${time}</p>
<p><b>PIN:</b> ${pin}</p>
</div>
`;

selectedSlot = "";
selectedButton = null;

document.getElementById("selectedSlot").innerText =
"Selected Slot : None";

document.getElementById("name").value = "";
document.getElementById("vehicle").value = "";
document.getElementById("date").value = "";
document.getElementById("time").value = "";
}