// INTRO & INSTRUCTIONS

alert("Hello, humans! You may have survived my Rock, Paper, Scissors challenge, "
    + "but this time I have trapped you inside my digital fortress!");

alert("INSTRUCTIONS\n\n"
    + "Open your Browser Console for the full battle log:\n\n"
    + "• Chrome / Edge / Opera / Brave (Windows): F12 or Ctrl + Shift + I\n"
    + "• Chrome / Edge / Opera / Brave (Mac): Cmd + Option + I\n"
    + "• Firefox (Windows): Ctrl + Shift + K\n"
    + "• Firefox (Mac): Cmd + Option + K\n"
    + "• Safari (Mac): Enable the Develop menu in Settings > Advanced, then press Cmd + Option + C\n\n"
    + "Click 'OK' once your console is open to begin!");


// 1. SHARED STATE (Tracks the game's memory)
const gameState = {
    currentRoom: "start",
    hasTorch: false,
    hasSword: false,
    hasKeyC: false,     
    knowsSecret: false, 
    gameEnded: false,
    isWinner: false
};

// 2. VALIDATION 

// 3. STORY NAVIGATOR


// 4. INVENTORY & LOOP MANAGER

function game() {
    let playing = true; 

    while (playing) {
        
        // Reset state for new games
        gameState.currentRoom = "start";
        gameState.hasTorch = false;
        gameState.hasSword = false;
        gameState.hasKeyC = false;
        gameState.knowsSecret = false;
        gameState.gameEnded = false;
        gameState.isWinner = false;

        while (!gameState.gameEnded) {
            let nextRoom = null;
            console.log(`[System]: Entering ${gameState.currentRoom}`);

            switch (gameState.currentRoom) {
                case "start": nextRoom = startRoom(); break;
                case "doorA": nextRoom = doorARoom(); break;
                case "doorB": nextRoom = doorBRoom(); break;
                case "doorC": nextRoom = doorCRoom(); break;
                default: 
                    console.error("Unknown room."); 
                    gameState.gameEnded = true; 
                    break;
            }

            if (nextRoom === null) {
                gameState.gameEnded = true;
            } else {
                gameState.currentRoom = nextRoom;
            }
        }

        // ENDINGS & RESTART LOGIC 
        if (gameState.currentRoom === "doorC") { 
            if (gameState.isWinner) {
                alert("Congratulations! You defeated the Evil AI and escaped the digital fortress!");
                console.log("Result: Player Escaped");
            } else {
                alert("Game Over! You didn't know the secret. The Evil AI has deleted you from the system.");
                console.log("Result: Player Deleted");
            }
        }

        playing = confirm("Do you dare to try again? Click OK to restart and lose all your items, or Cancel to accept your fate.");
    }

    console.log("Thank you for playing!");
}

game();


    

    