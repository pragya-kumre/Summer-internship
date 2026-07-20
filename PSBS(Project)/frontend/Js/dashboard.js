let bookingBox = document.getElementById("bookingDetails");


// Get bookings from backend

fetch("http://localhost:5000/bookings")

.then(response => response.json())

.then(data => {


    if(data.length > 0){


        // Show latest booking

        let booking = data[data.length - 1];


        bookingBox.innerHTML = `


        <h2>Welcome, ${localStorage.getItem("user")} 👋</h2>

        <p>Your upcoming parking reservation</p>


        <div class="booking-card">


            <h2>Upcoming Booking</h2>


            <p><b>Booking ID:</b> ${booking.bookingId}</p>


            <p><b>Facility:</b> ${booking.facility}</p>


            <p><b>Slot:</b> ${booking.slot}</p>


            <p><b>Name:</b> ${booking.name}</p>


            <p><b>Vehicle:</b> ${booking.vehicle}</p>


            <p><b>Date:</b> ${booking.date}</p>


            <p><b>Time:</b> ${booking.time}</p>


            <p><b>Entry PIN:</b> ${booking.pin}</p>


        </div>


        `;


    }


    else{


        bookingBox.innerHTML = `

        <h2>Welcome, ${localStorage.getItem("user")} 👋</h2>

        <h3>No Booking Found</h3>

        <p>You have not made any parking reservation yet.</p>

        `;


    }


})


.catch(error => {


    console.log("Backend Connection Error:", error);


    bookingBox.innerHTML = `

    <h3>Server not connected</h3>

    `;


});

