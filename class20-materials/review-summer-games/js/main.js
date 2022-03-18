//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 


function mulitEach(arr){
    let product = 1
    arr.forEach( num => product *= num )
    alert(product)
}

mulitEach([10,7,9])