const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();


// Middleware
app.use(cors());
app.use(express.json());


// Data files
const users = require("./user.json");
let bookings = require("./bookings.json");


// Login API

app.post("/login", (req, res) => {

    let username = req.body.username;
    let password = req.body.password;


    let user = users.find(
        u => u.username === username &&
             u.password === password
    );


    if(user){

        res.json({
            success:true,
            message:"Login Successful"
        });

    }

    else{

        res.json({
            success:false,
            message:"Invalid Username or Password"
        });

    }

});



// Booking API

app.post("/booking", (req, res) => {


    let booking = req.body;


    bookings.push(booking);


    fs.writeFileSync(
        "./bookings.json",
        JSON.stringify(bookings, null, 2)
    );


    res.json({

        success:true,

        message:"Booking Saved"

    });


});

// Get all bookings

app.get("/bookings", (req,res)=>{

    res.json(bookings);

});

// Booking Count API

app.get("/booking-count",(req,res)=>{

    res.json({

        count: bookings.length

    });

});
// Get booked slots

app.get("/booked-slots",(req,res)=>{


    let bookedSlots = bookings.map(
        booking => booking.slot
    );


    res.json(bookedSlots);


});

// Server Start

app.listen(5000, () => {

    console.log("Server running on port 5000");

});


