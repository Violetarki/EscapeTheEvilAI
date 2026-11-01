# Escape the Evil AI

Open `index.html` in a browser. Play through the prompts and alerts; no installation is needed. The blank HTML page loads the external `game.js` without DOM manipulation.

Enter a listed number or word. Input ignores surrounding spaces and capitalization. Invalid input leaves progress unchanged. Cancel ends the current adventure; the replay confirmation offers a fresh start. The optional console logs your location and inventory, and the opening dialogs explain how to open it.

## Story sketch

```text
Hub (take torch)
 |-- A: Archive -- torch reveals chest -- even-prime riddle (2) -- sword
 |      |-- no torch: return, or explore and lose
 |      `-- return to Hub
 |-- B: Guard room -- sword defeats guard -- mainframe key
 |      |-- no sword: return, or fight and lose
 |      |-- rescue kitten (optional; sign explains AI weakness)
 |      `-- return to Hub; kitten remains available on later visits
 `-- C: Mainframe (requires key)
        |-- return to Hub to prepare
        `-- confront AI: kitten -> escape with Branko; alone -> capture
```

Collected items and defeated guards persist during a run. Chests and cages do not refill. Every replay creates a new state.


