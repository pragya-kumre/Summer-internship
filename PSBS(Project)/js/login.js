function loginUser(){


let username = document.getElementById("username").value;

let password = document.getElementById("password").value;



fetch("http://localhost:5000/login", {

    method:"POST",

    headers:{
        "Content-Type":"application/json"
    },

    body:JSON.stringify({

        username:username,

        password:password

    })

})

.then(response => response.json())


.then(data => {


    if(data.success){


        localStorage.setItem(
            "user",
            username
        );


        window.location.href="dashboard.html";


    }

    else{


        document.getElementById("message").innerText =
        data.message;


    }


})


.catch(error=>{


    console.log(error);

    document.getElementById("message").innerText =
    "Server not connected";


});


}

