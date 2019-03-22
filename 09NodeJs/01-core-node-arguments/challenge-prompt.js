


/////////////////////////////5.1///////////////////////////////////////////

// console log "Hello World"

// ---------- code starts here ----------
console.log("hello world")


// ---------- code ends here ---------- 

/////////////////////////////5.2///////////////////////////////////////////

// next console log the command line arguments when this file is run in node

// ---------- code starts here ---------- 

console.log(process.argv)




// ---------- code ends here ---------- 

/////////////////////////////5.3///////////////////////////////////////////

// Console log the first and second command line argument that the user gives this file
// if there is no input it should come back undefined

// ---------- code starts here ---------- 


console.log(process.argv[2]+process.argv[3])



// ---------- code ends here ---------- 

/////////////////////////////5.4///////////////////////////////////////////

// If the first command line argument given to this file is "minion" and the second argument is "army", console log "I have found Gru"
// If the first command line argument given to this file is "minion" and the second argument is not "army", console log "Still looking for Gru"
// For any other command line arguments, console log "Minion RAGE!"

// ---------- code starts here ---------- 
arg1 = process.argv[2]
arg2 = process.argv[3]
function minion(arg1, arg2){
    if((arg1==="minion") && (arg2==="army")){
        console.log("I have found gru!");
    }
    else if((arg1==="minion") && (arg2!=="army")){
        console.log("Still looking for gru")
    }
    else{
        console.log("minion rage!")
    }
}
minion();




// ---------- code ends here ---------- 
