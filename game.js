
let currentRoom = "START";
let items = {
    torch:false,
    sword:false,
    key:false,
};
let choice = false;


function main() {
    alert("Hello, humans! You may have survived my Rock, Paper, Scissors challenge, "
        +"but this time I have trapped you inside my digital fortress!");

    alert("INSTRUCTIONS\n"
        +"You need the Developer Console open to see the round results.\n\n"
        +"Press F12 (Windows) or Cmd+Option+J (Mac) to open it.\n\n"
        +"Click 'OK' once your console is open to begin!");

    alert("You wake up in a strange room, lit only by a torch. You see three doors.");
    let nextStep = prompt("What do you want to do:\n"
        +"1. Look around"
        +"2. Check the doors"
        +"0. Do nothing"
    );
    alert(nextStep);
}


main();