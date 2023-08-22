let x = "It's X's turn";
let o = "It's O's turn";
let turnText = $('#turn');

function startGame() {

 turnText.text(x);
 $('#startBtn').removeEventListener("click", startGame())
}


$('#1').on("click",function(){
    if (turnText.text() === x){
        $('#1').text('X').addClass('table-danger');
        turnText.text(o);
    } else {
        $('#1').text('O').addClass('table-primary');
        turnText.text(x);
    }
   
}
)

$('#2').on("click",function(){
    if (turnText.text() === x){
        $('#2').text('X').addClass('table-danger');
        turnText.text(o);
    } else {
        $('#2').text('O').addClass('table-primary');;
        turnText.text(x);
    }
}
)

$('#3').on("click",function(){
    if (turnText.text() === x){
        $('#3').text('X').addClass('table-danger');
        turnText.text(o);
    } else {
        $('#3').text('O').addClass('table-primary');;
        turnText.text(x);
    }
}
)

$('#4').on("click",function(){
    if (turnText.text() === x){
        $('#4').text('X').addClass('table-danger');
        turnText.text(o);
    } else {
        $('#4').text('O').addClass('table-primary');;
        turnText.text(x);
    }
}
)

$('#5').on("click",function(){
    if (turnText.text() === x){
        $('#5').text('X').addClass('table-danger');
        turnText.text(o);
    } else {
        $('#5').text('O').addClass('table-primary');;
        turnText.text(x);
    }
}
)

$('#6').on("click",function(){
    if (turnText.text() === x){
        $('#6').text('X').addClass('table-danger');
        turnText.text(o);
    } else {
        $('#6').text('O').addClass('table-primary');;
        turnText.text(x);
    }
}
)

$('#7').on("click",function(){
    if (turnText.text() === x){
        $('#7').text('X').addClass('table-danger');
        turnText.text(o);
    } else {
        $('#7').text('O').addClass('table-primary');;
        turnText.text(x);
    }
}
)

$('#8').on("click",function(){
    if (turnText.text() === x){
        $('#8').text('X').addClass('table-danger');
        turnText.text(o);
    } else {
        $('#8').text('O').addClass('table-primary');;
        turnText.text(x);
    }
}
)

$('#9').on("click",function(){
    if (turnText.text() === x){
        $('#9').text('X').addClass('table-danger');
        turnText.text(o);
    } else {
        $('#9').text('O').addClass('table-primary');;
        turnText.text(x);
    }
}
)