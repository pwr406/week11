let x = "It's X's turn";
let o = "It's O's turn";
let turnText = $('#turn');
$('#startBtn').on("click",startGame)
$('#clearBtn').on("click", resetGame)

function startGame() {
 turnText.text(x);
 $('#startBtn').off()
 $("td").on("click", (event) => onSquareClick("#" + event.target.id))
}

function onSquareClick(idOfSquare){
    if (turnText.text() === x){
        $(idOfSquare).text('X').addClass('table-danger');
        turnText.text(o);
    } else {
        $(idOfSquare).text('O').addClass('table-primary');
        turnText.text(x);
    }
   $(idOfSquare).off()
   checkForWinner()
}

function resetGame() {
$("td").text("").removeClass('table-danger table-primary');

$('#startBtn').on("click",startGame)
turnText.text('Ready to play?')
}

function checkForWinner() {
    if ($('#1').text() =='X' && $('#2').text() == 'X' && $('#3').text() == 'X') {
        turnText.text("X is the Winner!")
        $("td").off()
    } else if ($('#1').text() =='O' && $('#2').text() == 'O' && $('#3').text() == 'O') {
        turnText.text("O is the Winner!")
        $("td").off()
    } else if ($('#4').text() =='X' && $('#5').text() == 'X' && $('#6').text() == 'X') {
        turnText.text("X is the Winner!")
        $("td").off()
    } else if ($('#4').text() =='O' && $('#5').text() == 'O' && $('#6').text() == 'O') {
        turnText.text("X is the Winner!")
        $("td").off()
    }
}

// $('#1').on("click", () => onSquareClick('#1')
// )

// $('#2').on("click", () => onSquareClick('#2')
// )

// $('#3').on("click",function(){
//     if (turnText.text() === x){
//         $('#3').text('X').addClass('table-danger');
//         turnText.text(o);
//     } else {
//         $('#3').text('O').addClass('table-primary');;
//         turnText.text(x);
//     }
// }
// )

// $('#4').on("click",function(){
//     if (turnText.text() === x){
//         $('#4').text('X').addClass('table-danger');
//         turnText.text(o);
//     } else {
//         $('#4').text('O').addClass('table-primary');;
//         turnText.text(x);
//     }
// }
// )

// $('#5').on("click",function(){
//     if (turnText.text() === x){
//         $('#5').text('X').addClass('table-danger');
//         turnText.text(o);
//     } else {
//         $('#5').text('O').addClass('table-primary');;
//         turnText.text(x);
//     }
// }
// )

// $('#6').on("click",function(){
//     if (turnText.text() === x){
//         $('#6').text('X').addClass('table-danger');
//         turnText.text(o);
//     } else {
//         $('#6').text('O').addClass('table-primary');;
//         turnText.text(x);
//     }
// }
// )

// $('#7').on("click",function(){
//     if (turnText.text() === x){
//         $('#7').text('X').addClass('table-danger');
//         turnText.text(o);
//     } else {
//         $('#7').text('O').addClass('table-primary');;
//         turnText.text(x);
//     }
// }
// )

// $('#8').on("click",function(){
//     if (turnText.text() === x){
//         $('#8').text('X').addClass('table-danger');
//         turnText.text(o);
//     } else {
//         $('#8').text('O').addClass('table-primary');;
//         turnText.text(x);
//     }
// }
// )

// $('#9').on("click",function(){
//     if (turnText.text() === x){
//         $('#9').text('X').addClass('table-danger');
//         turnText.text(o);
//     } else {
//         $('#9').text('O').addClass('table-primary');;
//         turnText.text(x);
//     }
// }
// )

//