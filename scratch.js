function checkForWinner() {
    const winners = [ 
       [$('#1'),$('#2'),$('#3')],
       [4,5,6],
       [7,8,9],
       [1,4,7],
       [2,5,8],
       [3,6,9],
       [1,5,9],
       [7,5,3]
    ]
       for (winner of winners) {
           console.log(winner)
   
       }
   }   
    
   checkForWinner();