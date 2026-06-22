// function downloadFile(url,callback){
//     console.log("Starting download...")
//     callback();
// }
// setTimeout(()=>{
//  console.log("Download completed"),2000
// });
// downloadFile("file.pdf",()=>{
//     console.log("Opening file...");
// });

/*******Q2******/
// function login(callback) {setTimeout(() => {
// console.log("User authenticated");
//        callback();
//      }, 1000);
// }
// function getProfile(callback) {setTimeout(() => {
//  console.log("Profile fetched");        callback();
//    }, 1000); }
// login(() => {getProfile(() => {     
//        console.log("Displaying profile");
//    });
// });

/*******Q3******/
// function placeOrder(callback) {
//      setTimeout(() => {
//      console.log("Order placed"); callback(); }, 1000);
// }
// function prepareFood(callback) {
//      setTimeout(() => { 
// console.log("Food prepared");
//  callback(); }, 2000);
// }
// function deliverFood(callback) {
//      setTimeout(() => {
//          console.log("Food delivered"); callback(); }, 1000);
// }
// placeOrder(() => {
//      prepareFood(() => {
//      deliverFood(() => {
// console.log("Enjoy your meal!");
// });
// });
// }); 

/*******Q4******/
// function download(cb) { 
//     setTimeout(() => {
//     console.log("Download Complete");
//     cb(); }, 1000);
// }
// function compress(cb) {     
//     setTimeout(() => {
//     console.log("Compression Complete");
//         cb(); }, 1000);
// }
// function upload(cb) { 
//     setTimeout(() => {
//     console.log("Upload Complete");
//         cb();}, 1000);
// }
// console.log("Start Download");
// download(() => {     
//     console.log("Compressing File");
//     compress(() => {        
//      console.log("Uploading File");
//     upload(() => { 
//     console.log("Process Finished");
//         });
//     });
// });


/*******Q5******/
// function downloadFile() { 
//     return new Promise((resolve) => { console.log("Starting download...");
// setTimeout(() => {
//  resolve("Download completed");
// }, 2000);
// });
// }
// downloadFile()
// .then(result => { console.log(result);
// }); 


/*******Q6******/
function check(num){
    return new Promise((resolve,reject)=>{
        if(num%2==0)
            resolve("Even num");
        else
            reject("Odd num");
    });
}
check(8)
.then(msg => console.log(msg))
.catch(err => console.log(err)); 


/*******Q7******/
function withdraw(balance, amount) {
 return new Promise((resolve, reject) => { 
    if (balance >= amount) 
   resolve("Withdrawal Successful");
    else
    reject("Insufficient Balance");
});
}
withdraw(5000, 2000) 
.then(msg => console.log(msg))
.catch(err => console.log(err));


/*******Q8******/
function download() {    
     return new Promise(resolve => {         
    setTimeout(() => {             
    console.log("Downloaded");             
    resolve();
        }, 1000);
    });
}
function compress() {     
    return new Promise(resolve => {        
    setTimeout(() => {
    console.log("Compressed");             
    resolve();
        }, 1000);
    });
}
function upload() {    
     return new Promise(resolve => {        
     setTimeout(() => {             
    console.log("Uploaded");            
    resolve();
        }, 1000);
    });
    }
download()
    .then(() => compress())
    .then(() => upload())
    .then(() => console.log("All Tasks Completed"));


/*******Q9******/
