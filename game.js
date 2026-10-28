
alert("INSTRUCTIONS\n"
    +"You need the Developer Console open to see the round results.\n\n"
    +"Press F12 (Windows) or Cmd+Option+J (Mac) to open it.\n\n"
    +"Click 'OK' once your console is open to begin!")

// 1. INVENTORY & LOOP MANAGER 


let playing = true; 

while (playing) {
    
    let currentRoom = "start";
    let hasTorch = false;
    let hasSword = false;
    let knowsSecret = false;
    let gameOver = false;
    let isWinner = false;

    
    while (!gameOver) {

        
        // 2 & 3. STORY NAVIGATOR & VALIDATION 
        

    }

        
    // ENDINGS & RESTART LOGIC 
    
    
    
    if (isWinner) {
        alert("Congratulations! You defeated the Evil AI and escaped the digital fortress!");
    } else {
        alert("Game Over! The Evil AI has deleted you from the system.");
    }

    playing = confirm("Do you dare to try again? Click OK to restart and lose all your items, or Cancel to accept your fate.");
}

console.log("Thank you for playing!");
