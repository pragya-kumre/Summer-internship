let selected = "";

function selectSlot(slot){
    selected = slot;

    document.getElementById("selectedSlot").innerHTML =
    "Selected Slot: " + slot;
}

function bookSlot(){

    if(selected === ""){
        alert("Please select a parking slot first.");
        return;
    }

    let pin = Math.floor(1000 + Math.random() * 9000);

    alert(
        "Booking Successful!\n\n" +
        "Slot: " + selected +
        "\nBooking PIN: " + pin
    );
}