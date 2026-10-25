There are rooms to explore, clues to discover and choices to make. But be careful—your earlier
decisions may change what happens next! Branko cannot rescue you now. Only your logic can help you
escape!
Mwahahahaha!

● Create a blank HTML document connected to an external JavaScript file. The game must use
prompt(), alert(), confirm() and the console for interaction. No DOM manipulation is
required or allowed.
● Create a short text adventure in which the player tries to escape the evil AI. Your team decides
the story, setting and challenges.
● Include at least three rooms or locations. The player must be able to make choices that lead to
different outcomes, including returning to a previously visited location.
● The game must remember earlier actions. At least one later choice must depend on something
the player previously discovered, collected or changed. For example, a locked exit might
require a key found elsewhere.
● Include at least two different endings: a successful escape and an unsuccessful outcome. The
player’s decisions must determine the ending.
● Clearly explain the available choices. Handle capitalization, unnecessary spaces and invalid
input without producing errors or accidentally changing the game’s progress. Pressing Cancel
in a prompt() must end the game safely.
● When the story ends, use confirm() to offer another game. Restarting must reset all
progress, collected items and previous decisions.
Organize your code using functions, conditions and loops. Your team decides how these should work
together.

Important note: Think about the user experience. Players should always understand where they are,
what has happened and what they can do next. If your game requires the console, explain why and
how to open it before play begins. These instructions must be available without already having the
console open.

Before coding, sketch the possible paths through your story. Test every ending and check that returning
to a location does not incorrectly repeat rewards or reset earlier actions. Ask someone unfamiliar with
your code to try the game without your help. Keep the adventure small and logical. A short game with
meaningful choices is better than a long story where every choice leads to the same result!


------ PLOT ------


You wake up in a room (START) you dont know. You look around and see three doors (A, B, C), Theres also a torch. One of them is locked. You pick up the torch and enter through A. You can see thanks to the torch you picked up. You can see a chest but it's locked. You see a riddle and the solution is the key to open the chest. Inside you find a sword. Go back to START and you go through door B. Inside this room there's a monster, which you defeat using the sword you found. You find out that the monster was guarding a cell. You learn the way to defeat the AI and also get a choice (have to figure it out), you can say yes or no. Go back to START and open it. Here's the mainframe of the AI, if you said yes you defeat the AI, if you say no, you lose.