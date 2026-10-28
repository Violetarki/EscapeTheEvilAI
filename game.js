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

function startRoom(){
    console.log("Entering Starting Room");

    while (true) {
        const choice = getChoice();
        
        if (choice == null) {
            return null;
        } else {
            const destination = "0";
            switch (choice) {
                case "1":
                    alert("You open the first door and cross into the next room");
                    destination = "1";
                    break;

                case "2":
                    alert("You open the second door and cross into the next room");
                    destination = "2";
                    break;

                case "3":
                    alert("You try opening the third door but it's locked");
                    break;
                
                case "4":
                    alert("You look around. The only thing in the room is a torch. Do you want to take it? y/n");
                    break;

                default:
                    break;
            }
        }

        if (destination == "1") {
            return "doorA";
        } else if(destination == "2"){
            return "doorB";
        } else if(destination == "4"){
            hasTorch = true;
            return "start";
        } else {
            break;
        }

    }
}

function doorARoom() {
    console.log("Entering Room A");

    if (hasTorch) {
        
    } else {
        alert("The room is in complete darkness. Do you want to go back? y/n")
    }
    
}

function doorBRoom() {
    
}

function doorCRoom() {
    
}

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


    

    