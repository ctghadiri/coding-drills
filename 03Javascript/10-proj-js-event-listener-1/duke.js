
var confirmInput;

document.onkeyup = function(input) {
    var keyHit = input.key.toLowerCase();

    console.log(keyHit);

    if("h" === keyHit){
        confirmInput = confirm("Did you mean to hit h");
    }

    if("k" === keyHit){

        if( confirmInput === true){
            alert("Hello");
        }
        else{
            alert("No thanks");
        }
    }
}