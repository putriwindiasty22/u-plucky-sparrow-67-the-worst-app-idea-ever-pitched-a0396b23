// The Worst App Idea Ever Pitched — one sentence, at most 240 characters.
// Writes the pitch to /output/entry.txt (or ./output/entry.txt locally).
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "Meet FridgeWatch: for just $9.99 a month, an app that livestreams the inside of your fridge 24/7 so busy professionals can watch their leftovers slowly expire from anywhere on Earth, with push alerts the moment your milk turns.";

function writeEntry(text: string): string {
  try {
    mkdirSync("/output", { recursive: true });
    writeFileSync("/output/entry.txt", text);
    return "/output/entry.txt";
  } catch {
    mkdirSync("./output", { recursive: true });
    writeFileSync("./output/entry.txt", text);
    return "./output/entry.txt";
  }
}

const path = writeEntry(pitch);
console.log(`Wrote ${pitch.length} characters to ${path}`);
