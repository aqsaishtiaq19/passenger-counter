// // let myAge = 30;
// // let humanDogRatio = 7;

// // let myDogAge =  myAge*humanDogRatio; 

// // console.log(myDogAge);    

// // // Create a variable, bonusPoints. Initialize it as 50. Increase it to 100.
// // // Decrease it down to 25, and then finally increase it to 70
// // let bonuspoints =50;
// // let bonusPoints =50 +50; 
// // console.log(bonusPoints);
// // let bonusPoints = 100 - 75;
// // console.log(bonusPoints);
// // let bonusPoints = 25 + 45;
// // console.log(bonusPoints);
// function increment(){
// console.log("The button was clicked");
// }
// function cmd(){
//     console.log("i can do this ");
// } 
// // Create a function (you decide the name) that logs out the number 42 to the console
// // Call/invoke the function
// function internship(){
//     console.log(43);
// }
// internship();
// function myLogger(){
//     console.log(42)
// }
// myLogger();

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36

// // Create a function that logs out the sum of all the lap times
// function logLapTime(){
//     let totalTime = lap1+lap2+lap3
//     console.log(totalTime)
// }
// logLapTime()


// // let lapsCompleted = 0

// // // Create a function that increments the lapsCompleted variable with one
// // // Run it three times
// // function incrementLap(){
// //     lapsCompleted += 1
// // }
// // incrementLap()
// // incrementLap()
// // incrementLap()


// // console.log(lapsCompleted)
// // document.getElementById("count").innerText = 5

// let count = 0
// count = count + 1
// console.log(count)

// // intialize the count as 0
// // listen for clicks on the increment button
// // increment the count variable when the button is clicked (log it out)
// // change the count-el in the HTML to reflect the new count


// // Create a variable, message, that stores the string: "You have tree new notifications"
// let message="you have three new notifications"
// console.log(message)
// // Create a variable, messageToUser, that contains the message we have logged
// let messageToUser = "you have logged in successfully"
// console.log(messageToUser)
// // Create two variables, name and greeting. The name variable should store your name,
// // and the greeting should store e.g. "Hi, my name is "



// // Create two variables, name and greeting. The name variable should store your name,
// // and the greeting should store e.g. "Hi, my name is "

// // Create a third variable, myGreeting, that contatenates the two strings
// // Log myGreeting to the console


// let candidate = "aqsa";
// let greeting = "hi, my name is ";
// let myGreeting = greeting + "" + candidate;
// console.log(myGreeting);


// let points =4
// let bonuspoints = 50
// let totalpoints = points + bonuspoints
// console.log(totalpoints)


// let completedgraduate = 2023
// let currentyear = 2026
// let yearcount= currentyear - completedgraduate
// console.log(yearcount)


// let welCome =document.getElementById("welCome")
// let name ="Aqsa"
// let gretting ="Welcome, my name is " + name
// welCome.innerText = gretting
// welCome.innerText += " 😎"
// let count = 0
// function increment(){
//     count = count + 1
//     document.getElementById("count").innerText = count
// }
// console.log(count);
//   // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
//     // 3. Render the variable in the saveEl using innerText
//     // NB: Make sure to not delete the existing content of the paragraph
// function save(){
//   let count= count + "-"
//   document.getElementById("save").innerText += count
// }
// console.log(count);

let welCome = document.getElementById("welCome");
let name = "Aqsa";
let greeting = "Welcome, my name is " + name;
welCome.innerText = greeting + " 😎";

let count = 0;
let countEl = document.getElementById("count");
let saveEl = document.getElementById("save-el");

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
    let countStr = count + " - ";
    saveEl.textContent += countStr;

    count = 0;              
    countEl.innerText = count; 
  }
