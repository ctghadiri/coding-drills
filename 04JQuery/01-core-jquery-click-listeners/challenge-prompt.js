

// document.ready makes sure the javascript doesn't load before the html page
$(document).ready(function () {
    var letter = $("div")

    $("h3").on("click", function (){
      var letterOne =  $(this).text();
      $("div").append(letterOne)
    })

    // Write a series of on click listeners for each letter in the html
    // Whenever the user clicks on a letter, you want to append the corresponding letter to the `text-div` element
    // You will need to set up an on click listener for each letter
    // $(document).on("click",(".letterA"), function (){
    //     letter.append("a")
    // })  
    // $(document).on("click",(".letterB"), function (){
    //     letter.append("b")
    // })  
    // $(document).on("click",(".letterC"), function (){
    //     letter.append("c")
    // })  
    // $(document).on("click",(".letterD"), function (){
    //     letter.append("d")
    // })  
    // $(document).on("click",(".letterE"), function (){
    //     letter.append("e")
    // })  
    // $(document).on("click",(".letterF"), function (){
    //     letter.append("f")
    // })  
    // $(document).on("click",(".letterG"), function (){
    //     letter.append("g")
    // })  
    // $(document).on("click",(".letterH"), function (){
    //     letter.append("h")
    // })  
    // $(document).on("click",(".letterI"), function (){
    //     letter.append("i")
    // })  
    // $(document).on("click",(".letterJ"), function (){
    //     letter.append("j")
    // })  
    // $(document).on("click",(".letterK"), function (){
    //     letter.append("k")
    // })  
    // $(document).on("click",(".letterL"), function (){
    //     letter.append("l")
    // })  
    // $(document).on("click",(".letterM"), function(){
    //     letter.append("m")
    // })
    // $(document).on("click",(".letterN"), function(){
    //     letter.append("n")
    // })
    // $(document).on("click",(".letterO"), function(){
    //     letter.append("o")
    // })
    // $(document).on("click",(".letterP"), function(){
    //     letter.append("p")
    // })
    // $(document).on("click", (".letterQ"), function(){
    //     letter.append("q")
    // })
    // $(document).on("click", (".letterR"), function(){
    //     letter.append("r")
    // })
    // $(document).on("click", (".letterS"), function(){
    //     letter.append("s")
    // })
    // $(document).on("click", (".letterT"), function(){
    //     letter.append("t")
    // })
    // $(document).on("click", (".letterU"), function(){
    //     letter.append("u")
    // })
    // $(document).on("click", (".letterV"), function(){
    //     letter.append("v")
    // })
    // $(document).on("click", (".letterW"), function(){
    //     letter.append("w")
    // })
    // $(document).on("click", (".letterX"), function(){
    //     letter.append("x")
    // })
    // $(document).on("click", (".letterY"), function(){
    //     letter.append("y")
    // })
    // $(document).on("click", (".letterZ"), function(){
    //     letter.append("z")
    // })
    // Within the document, set an on click listener for the element with a class of "letterA"

    
        // When that element is clicked, append the string "A" to the `text-div` element

        
    // Within the document, set an on click listener for the element with a class of "letterB"

    
        // When that element is clicked, append the string "B" to the `text-div` element

        
    // Continue for the other letters




  
})
