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
                    alert("You try opening the third door.");
                    destination = "3";
                    break;
                
                case "4":
                    if (gameState.hasTorch) {
                        alert("You look around but you don't see anything noteworthy")
                    } else {
                        answer = prompt("You look around. The only thing in the room is a torch. Do you want to take it? y/n");
                    }
                    destination = "4";
                    continue;

                default:
                    break;
            }
        }

        if (destination == "1") {
            return "doorA";
        } else if(destination == "2"){
            return "doorB";
        }else if(destination == "3"){
            if(gameState.hasKeyC){
                alert("You unlock the door with the key you found.");
                return "doorC";
            } else{
                alert("The door is locked.")
                return "start";
            } 
        } else if(destination == "4"){
            gameState.hasTorch = true;
            return "start";
        } else {
            alert("That is not a valid choice.")
            return "start";
        }

    }
}


function doorARoom() {
    console.log("Entering Room A");

    while(true){
        const choice = getChoice();

        if (choice == null){
            return null;
        } else {
            if (gameState.hasTorch) {
                alert("You see a chest but when you try to open it, it's locked. However, it has a numeric keypad, and you notice a riddle over it");
                alert("The riddle reads like this:\n something something");
                const answer = prompt("You enter the solution:");

                while(true){
                    if (answer == "2") {
                        alert("The chest opens and you find a really cool sword inside it. You pick it up");
                        gameState.hasSword = true;
                        destination = "1";
                        break;

                    } else {
                        alert("Wrong answer. You can try again.");
                    }
                }

            } else {
                answer = prompt("The room is in complete darkness. Do you want to go back? y/n");
                if (answer == "y") {
                    destination = "1";
                } else {
                    alert("Because it was too dark to see, you trip with a chest shaped object and die. You lose.")
                    gameState.gameEnded = true;
                    break;
                }
            }
        }

        return "start";
    }

}

function doorBRoom() {
    console.log("Entering Room B");    

        if (choice == null){
            return null;
        } else {
            alert("You see a creature in the room but it hasn't seen you yet. It doesn't look very friendly. It seems to be guarding a cage and there's something shiny on top of it.");
            const answer = prompt("Do you want to try to sneak around it? y/n");

            if (answer == "y") {
                if (gameState.hasSword) {
                    alert("The monster notices you. You fight it using the sword you found and defeat it.");
                    alert("Now you can see clearly what the creature was guarding. Inside the cage there's a kitten and the shiny item was what seems to be the key to door C");
                    answer = prompt("You pick up the key. Do you want to free the kitten and take it with you? y/n");
                    if (answer == "y") {
                        gameState.knowsSecret = true;   
                    }
                } else {
                    alert("You try to sneak around but the monster notices you. Since you don't have anything to defense yourself, it kills your. You lose.")
                    gameState.gameEnded = true;
                }   
            }           
        }

        return "start";
}

function doorCRoom() {
    console.log("Entering Room C");    

        if (choice == null){
            return null;
        } else {
            alert("Inside you finally find the supercomputer that hosts the Evil AI. You feel it looking at you intensely through the cameras.");
            alert("The Evil AI then says: MUAHAHAHAHHAA, YOU THINK YOU CAN STOP ME NOW THAT YOU GOT HERE, BUT I HAVE ONE LAST ACE...");

            if (gameState.knowsSecret) {
                alert("However, the moment it finishes talking, it notices the kitten you rescued. It is so cute that the AI can't resist it and overloads and crashes");
                alert("With the AI defeated, you free Branko and escape the dungeon");
                alert("Congratulations! You win!");
                gameState.gameEnded = true;
                gameState.isWinner = true;
            } else {
                alert("You hear a hissing sound as the room starts to fill with neurotoxins. Seconds later you find yourself on the ground gasping for air.");
                alert("You lose.");
                gameState.gameEnded = true;
            }
  
        }
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


    

    