"use strict";

// Story paths (planned before implementation):
// Hub -> Archive: torch + riddle -> sword -> Hub.
// Hub -> Guard: sword -> key + optional kitten -> Hub.
// Hub -> Mainframe: key required; kitten -> escape, alone -> capture.
// Exploring darkness or fighting unarmed also leads to capture.

function createState() {
    return { room: "hub", torch: false, sword: false, key: false,
        kitten: false, guardDefeated: false, ending: null };
}

function getChoice(state, message, options) {
    while (true) {
        const input = prompt(message + "\n\nCancel ends the adventure.");
        if (input === null) {
            finish(state, "cancelled", "Adventure ended safely. Thanks for playing!");
            return null;
        }
        const choice = input.trim().toLowerCase();
        if (options.includes(choice)) return choice;
        alert("Please enter one of the listed choices. Your progress has not changed.");
    }
}

function finish(state, ending, message) {
    state.ending = ending;
    alert(message);
    console.log("Result: " + ending);
}

function hub(state) {
    const choice = getChoice(state,
        "HUB: Three doors surround you.\n"
        + "1 / archive: Enter door A, the archive.\n"
        + "2 / guard: Enter door B, the guard room.\n"
        + "3 / mainframe: Try door C, the locked mainframe.\n"
        + "4 / torch: " + (state.torch ? "Inspect the empty torch stand." : "Take the torch."),
        ["1", "archive", "2", "guard", "3", "mainframe", "4", "torch"]);
    if (choice === null) return;
    if (["1", "archive"].includes(choice)) state.room = "archive";
    else if (["2", "guard"].includes(choice)) state.room = "guard";
    else if (["3", "mainframe"].includes(choice)) {
        if (state.key) state.room = "mainframe";
        else alert("Door C is locked. A sign reads: KEY HELD BY SECURITY, DOOR B.");
    } else if (state.torch) alert("The stand is empty. You already carry the torch.");
    else {
        state.torch = true;
        alert("You take the torch. You can now explore dark rooms safely.");
    }
}

function archive(state) {
    if (!state.torch) {
        const choice = getChoice(state,
            "ARCHIVE: It is pitch black. A deep pit hums ahead.\n"
            + "1 / back: Return to the hub for a light.\n"
            + "2 / explore: Walk into the darkness (dangerous).",
            ["1", "back", "2", "explore"]);
        if (choice === null) return;
        if (["1", "back"].includes(choice)) state.room = "hub";
        else finish(state, "lost", "You fall into a data pit. The AI captures you. Game over!");
        return;
    }
    const choice = getChoice(state,
        "ARCHIVE: Your torch reveals " + (state.sword ? "an empty, open chest." : "a chest with a numeric keypad.")
        + "\n1 / chest: Inspect the chest.\n2 / back: Return to the hub.",
        ["1", "chest", "2", "back"]);
    if (choice === null) return;
    if (["2", "back"].includes(choice)) state.room = "hub";
    else if (state.sword) alert("The chest is empty. You already collected its sword.");
    else {
        // The answer is checked separately so any incorrect answer permits another try.
        const answer = prompt("CHEST RIDDLE: I am an even prime number. What number am I?\n"
            + "Enter your answer, or type back to leave the keypad. Cancel ends the adventure.");
        if (answer === null) {
            finish(state, "cancelled", "Adventure ended safely. Thanks for playing!");
            return;
        }
        const normalized = answer.trim().toLowerCase();
        if (normalized === "back") return;
        if (normalized === "2" || normalized === "two") {
            state.sword = true;
            alert("Correct! The chest opens. You collect a plasma sword, strong enough to defeat the security guard.");
        } else alert("The chest stays locked. Inspect it again to retry, or return to the hub. Your progress has not changed.");
    }
}

function guardRoom(state) {
    if (!state.guardDefeated) {
        const choice = getChoice(state,
            "GUARD ROOM: A monster guards a key and a caged kitten.\n"
            + "A sign reads: AI WEAKNESS: CUTE ANIMALS CAUSE SYSTEM OVERLOAD.\n"
            + "1 / fight: Challenge the guard " + (state.sword ? "with your sword." : "unarmed (dangerous).")
            + "\n2 / back: Return to the hub.", ["1", "fight", "2", "back"]);
        if (choice === null) return;
        if (["2", "back"].includes(choice)) {
            state.room = "hub";
            return;
        }
        if (!state.sword) {
            finish(state, "lost", "Without a weapon, you cannot defeat the guard. It captures you. Game over!");
            return;
        }
        state.guardDefeated = true;
        state.key = true;
        alert("Your sword disables the guard. You collect the key to door C. The kitten's cage is now unlocked.");
    }
    const choice = getChoice(state,
        "GUARD ROOM: The defeated guard stays motionless. You have the mainframe key.\n"
        + "The sign reads: AI WEAKNESS: CUTE ANIMALS CAUSE SYSTEM OVERLOAD.\n"
        + "1 / kitten: " + (state.kitten ? "Check on your rescued kitten." : "Rescue the kitten.")
        + "\n2 / back: Return to the hub.", ["1", "kitten", "2", "back"]);
    if (choice === null) return;
    if (["2", "back"].includes(choice)) state.room = "hub";
    else if (state.kitten) alert("The kitten purrs on your shoulder. Its cage is empty.");
    else {
        state.kitten = true;
        alert("You rescue the kitten. It climbs onto your shoulder. Remember the AI's weakness!");
    }
}

function mainframe(state) {
    const choice = getChoice(state,
        "MAINFRAME: Your key opens door C. The AI watches you.\n"
        + "1 / confront: Confront the AI (you need its weakness to survive).\n"
        + "2 / back: Return to the hub to prepare.", ["1", "confront", "2", "back"]);
    if (choice === null) return;
    if (["2", "back"].includes(choice)) state.room = "hub";
    else if (state.kitten) finish(state, "escaped",
        "The kitten meows. The AI overloads from cuteness and crashes!\n"
        + "You free Branko and escape the digital fortress together. You win!");
    else finish(state, "lost", "Your sword cannot harm software. The AI seals the room and captures you. Game over!\n"
        + "Perhaps the guard room's clue could help next time.");
}

function game() {
    alert("ESCAPE THE EVIL AI!\n\nThe AI has trapped you in its digital fortress. Explore, collect useful items, and find its weakness to escape with Branko.");
    alert("HOW TO PLAY\n\nType a listed number or word. Spaces and capitalization do not matter. Cancel in any prompt ends the adventure.\n\n"
        + "The console provides an optional location and inventory log. All essential information also appears in dialogs.\n"
        + "Chrome/Edge (Windows): Ctrl+Shift+J; Mac: Cmd+Option+J.\n"
        + "Firefox (Windows): Ctrl+Shift+K; Mac: Cmd+Option+K.\n\n"
        + "You can play without opening the console.");
    let playing = true;
    while (playing) {
        const state = createState();
        console.log("--- New adventure: all progress reset ---");
        while (state.ending === null) {
            const inventory = ["torch", "sword", "key", "kitten"].filter(item => state[item]);
            console.log("Location: " + state.room + " | Inventory: " + (inventory.join(", ") || "empty"));
            switch (state.room) {
                case "hub": hub(state); break;
                case "archive": archive(state); break;
                case "guard": guardRoom(state); break;
                case "mainframe": mainframe(state); break;
            }
        }
        playing = confirm("Play again? OK starts a new adventure with all progress reset. Cancel finishes playing.");
    }
    console.log("Thank you for playing!");
}

game();
