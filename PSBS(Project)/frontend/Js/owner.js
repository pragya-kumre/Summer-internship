fetch("http://localhost:5000/bookings")

.then(response=>response.json())

.then(data=>{


let total = data.length;


let occupied = data.length;


let capacity = 8;


let available = capacity - occupied;



let revenue = 0;


data.forEach(booking=>{

    revenue += 100;

});



document.getElementById("totalBookings").innerText = total;


document.getElementById("occupiedSlots").innerText = occupied;


document.getElementById("availableSlots").innerText = available;


document.getElementById("revenue").innerText =
"₹" + revenue;



})

.catch(error=>{

console.log(error);

});
