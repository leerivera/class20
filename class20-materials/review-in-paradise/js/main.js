// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let fFood = "cheesesteak";
alert(fFood)
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)

let dFood = "cheese"
alert( dFood[1] )
// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function threeNums(n1,n2,n3){
     sum = (n1 / n2) * n3
     alert(sum)
}
threeNums(17, 27, 400)
// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cubeIt(robot){
    console.log(Math.cbrt(robot)) 
}
cubeIt(198)

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"
function checkForSummer(month){
    let month = month.toLowerCase()
  if(month === "june" || month === "july" || month === "august"){

    alert('Yay')
  }else{ 
      alert("no")
}

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.
function skip5s(n){
    for(let i = 1; i<= n; i++){
        if(i % 5 !== 0){
            console.log(i)
        }
    }
}