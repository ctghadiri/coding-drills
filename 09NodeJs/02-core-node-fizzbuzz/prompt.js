var n = process.argv[2]

function fizzBuzz(n) {
// ===================== YOUR WORK HERE =====================
    for(var i = 0; i < n-1; i++){
        if((i % 3 ===0) && (i % 5 === 0)){
            console.log("fizzbuzz")
        }
        else{
            if(i % 3 === 0){
                console.log("fizz");
            }
            else if(i % 5 === 0){
                console.log("buzz")
            }
            else{
                console.log(i)
            }
        }
    }



// ==========================================================
  
}

fizzBuzz(/*Pass an argument from the command line*/)

