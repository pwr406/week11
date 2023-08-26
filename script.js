// Variables to use in functions later 
let x = "It's X's turn";
let o = "It's O's turn";
let turnText = $('#turn'); //Jquery to select elment with turn text - 
$('#startBtn').on("click",startGame) //jquery to select start button and give it on click event listner to start the game
$('#clearBtn').on("click", resetGame) //jquery to select clear button and reset the game
const myModal = new bootstrap.Modal(document.getElementById('myModal')) //modal 

//start game function 
function startGame() {
 turnText.text(x); //change turn text element to X variable from above
 $('#startBtn').off() //turn off the ability for the start button to be clicked
 $("td").on("click", (event) => onSquareClick("#" + event.target.id)) //Jquery to select <TD> elements and add on click event listener - to run onSquareClick Function - 
 //pass in string of "#" and the target id of the element that the event hapens on
}

//function for what happens when a sqaure is clicked, accepting parameter for the id of the square
function onSquareClick(idOfSquare){
    if (turnText.text() === x){ //if the turn text is set for X, then the square becomes an X
        $(idOfSquare).text('X').addClass('table-danger'); // Puts an X in the square, addes class to make the table cell red
        turnText.text(o); //changes Turn text to O.
    } else {
        $(idOfSquare).text('O').addClass('table-primary'); //Puts O in the <TD> that was clicked, addes class to make table cell blue
        turnText.text(x); //changes turn text to X.
    }
   $(idOfSquare).off() //turns off the ability for that <TD> to be clicked again
   checkForWinner() //call checkForWinner function after each click to see if a winner can be determined.
}

// Function to reset the game by pressing the button
function resetGame() {
$("td").text("").removeClass('table-danger table-primary'); //removes the text from the cells and removes the classes that gave background color

$('#startBtn').on("click",startGame) //turns the start button back on
turnText.text('Ready to play?') //turns the game text back to Ready to play?
}

//Function to check for the Winner 
function checkForWinner() {
 const winners = [ 
    [$('#1'),$('#2'),$('#3')], // Created an array of all the different winning combinations - used Jquery to grab by ID of TDs
    [$('#4'),$('#5'),$('#6')],
    [$('#7'),$('#8'),$('#9')],
    [$('#1'),$('#4'),$('#7')],
    [$('#2'),$('#5'),$('#8')],
    [$('#3'),$('#6'),$('#9')],
    [$('#1'),$('#5'),$('#9')],
    [$('#7'),$('#5'),$('#3')]
 ]
    for (winner of winners) { //for of loop to iterate through each array within the winners array
        const firstValue = winner[0].text(); //variable to get the first value of the first item in array within the larger array
        if (firstValue && winner.every(value => value.text() === firstValue)) { //if statement to check if the first value and every other value in the small array is the same. 
            turnText.text(firstValue + " is the winner!"); // sets the information text to who is the winner
            const modalText = $('#modalHeader') // variable to grab the ID Modal Header 
            modalText.text(firstValue + " is the winner!") // set modal header to display who the winner is
            const modalImg = $('#modalImg') //variable for ID Modal Image
            modalImg.attr('src', 'https://media.giphy.com/media/Id1Ay5MD5IsF6Or51v/giphy.gif') // setting the src attribute on the modal img to the address for the winner gif
            myModal.show(); // show the modal function
                  

            $("td").off();  // turn off the ability to click on any of the <TD> elements
        }
    }

    checkForTie(); //if a winner isn't found, call the checkForTie function
}   
    //function to check for a tie - 
function checkForTie() {
    const allSquaresFilled = $('td').toArray().every(square => $(square).text() !== ""); //variable that takes all the <td> elements, and puts them into an array
    //.every(to check if each square isn't blank)
    if (allSquaresFilled) { //if all square filled is true, then this runs 
        turnText.text("It's a Tie!"); //change turn text to read it's a tie
        const modalText = $('#modalHeader') //grab modal header
            modalText.text("IT'S A TIE!") //change modal header to read It's a tie
        const modalImg = $('#modalImg') //grab modal img
            modalImg.attr('src', 'https://media.giphy.com/media/3orifeagG1UwX4DeO4/giphy.gif') //change img src to link for tie gif
            myModal.show(); // show modal
        $("td").off(); //turn off ability to click on <TD> Elements
    }
}    
    
