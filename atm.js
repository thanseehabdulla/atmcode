function countCurrency(amount)
    {
        // initialize variable
        let notes = [  100, 50, 20 ];
        let noteCounter = Array(3).fill(0);
        
        // count notes using Greedy approach
        for (let i = 0; i < 3; i++) {
            if (amount >= notes[i]) {
                noteCounter[i] = Math.floor(amount / notes[i]);
                amount = amount - noteCounter[i] * notes[i];
            }
        }
        
        // check if there is any amount pending to dispense if true remove one 50 note
        if (amount > 0 && amount < 20) {             
        	noteCounter[1] -= 1
          amount += 50 

          // check if there is any amount pending to dispense if true remove one 20 note  
          if(noteCounter[2] > 0) {
          noteCounter[2] -= 1
          amount += 20 
          }

          // re calculate the amount and notes             
          if (amount >= notes[2]) {
                console.log('amount', amount)
                noteCounter[2] = Math.floor(amount / notes[2]);
                amount = amount - noteCounter[2] * notes[2];
            }
        }
       
        // check if there is any amount pending to dispense if true swap 100 with two 50 notes
        if (noteCounter[1] < 0) {
             noteCounter[0] -= 1
             noteCounter[1] += 2
        }   
    }
 
    let amount = 170;
    countCurrency(amount);
