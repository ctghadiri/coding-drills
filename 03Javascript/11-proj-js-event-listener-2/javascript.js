var keyHit;
var alphabet= 'abcdefghijklmnopqrstuvwxyz';

var keyHitArray = [];
document.onkeyup = function (input) {
    keyHit = input.key.toLowerCase();
    if (alphabet.includes(keyHit)){
        document.getElementById("document").textContent = keyHit;
        keyHitArray.push(keyHit);
        document.getElementById("doc1").textContent = keyHitArray;
    }
    else{
        alert("please press a letter")
    }


}