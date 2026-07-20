let selectedFacility = "";

let selectedSlot = "";
let selectedButton = null;
let bookingCount = 1000;



// Select Parking Slot

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




// Select Parking Facility

function selectFacility(facility){

    selectedFacility = facility;


    alert("Selected Facility: " + facility);


    document
    .getElementById("slots")
    .scrollIntoView({
        behavior:"smooth"
    });

}




// Book Parking Slot

function bookSlot(){

    let name = document.getElementById("name").value;

    let vehicle = document.getElementById("vehicle").value;

    let date = document.getElementById("date").value;

    let time = document.getElementById("time").value;



    if(!selectedFacility || !selectedSlot || name==="" || vehicle==="" || date==="" || time===""){

        alert("Please select facility, slot and fill all details!");

        return;

    }



    bookingCount++;


    document.getElementById("bookingCount").innerText =
    bookingCount;




    let bookingId = "PS" + Math.floor(Math.random()*10000);


    let pin = Math.floor(1000 + Math.random()*9000);




    // Change slot status

    if(selectedButton){

        selectedButton.classList.remove(
            "available",
            "selected-slot"
        );


        selectedButton.classList.add("booked");


        selectedButton.disabled = true;

    }




    // Show Booking Confirmation

    document.getElementById("result").innerHTML = `

    <div class="booking-card">

        <h2>✔ Booking Confirmed</h2>


        <p><b>Booking ID:</b> ${bookingId}</p>


        <p><b>Facility:</b> ${selectedFacility}</p>


        <p><b>Slot:</b> ${selectedSlot}</p>


        <p><b>Name:</b> ${name}</p>


        <p><b>Vehicle:</b> ${vehicle}</p>


        <p><b>Date:</b> ${date}</p>


        <p><b>Time:</b> ${time}</p>


        <p><b>Entry PIN:</b> ${pin}</p>


    </div>

    `;
// Save booking data for dashboard

let bookingData = {

    bookingId: bookingId,

    facility: selectedFacility,

    slot: selectedSlot,

    name: name,

    vehicle: vehicle,

    date: date,

    time: time,

    pin: pin

};


localStorage.setItem(
    "parkingBooking",
    JSON.stringify(bookingData)
);

// Send booking data to backend

fetch("http://localhost:5000/booking", {

    method:"POST",

    headers:{
        "Content-Type":"application/json"
    },

    body:JSON.stringify(bookingData)

})

.then(response => response.json())

.then(data => {

    console.log(data.message);

})

.catch(error => {

    console.log("Backend Error:", error);

});



    // Reset Form

    selectedFacility = "";

    selectedSlot = "";

    selectedButton = null;



    document.getElementById("selectedSlot").innerText =
    "Selected Slot : None";


    document.getElementById("name").value = "";

    document.getElementById("vehicle").value = "";

    document.getElementById("date").value = "";

    document.getElementById("time").value = "";

}

// Load booking count from backend

fetch("http://localhost:5000/booking-count")

.then(response => response.json())

.then(data => {

    document.getElementById("bookingCount").innerText =
    data.count + "+";

})

.catch(error => {

    console.log("Booking count error:", error);

});

// Load booked slots from backend

fetch("http://localhost:5000/booked-slots")

.then(response => response.json())

.then(bookedSlots => {


    document.querySelectorAll(".slot").forEach(slotButton => {


        if(bookedSlots.includes(slotButton.innerText)){


            slotButton.classList.remove("available");

            slotButton.classList.add("booked");

            slotButton.disabled = true;


        }


    });


})

.catch(error => {

    console.log("Slot loading error:", error);

});