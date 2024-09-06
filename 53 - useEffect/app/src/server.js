import express from "express";
import cors from "cors";
const app = express()
const PORT = 8000;

const facts =
    [
        "Cats have five toes on their front paws, but only four on their back paws.",
        "A group of cats is called a clowder.",
        "Cats can rotate their ears 180 degrees.",
        "A cat’s nose is as unique as a human’s fingerprint.",
        "The average cat sleeps for 13 to 16 hours a day.",
        "Cats can jump up to six times their body length in one leap.",
        "Domestic cats can run up to 30 miles per hour.",
        "Cats use their whiskers to determine if they can fit through a space.",
        "A cat's purring can be a self-soothing behavior as well as a sign of contentment.",
        "Cats have 32 muscles that control the outer ear."
    ];
let factIndex = 0;

app.use(express.json())
app.use(cors())

app.get("/cat-fact", (req, res) => {
    factIndex += 1
    res.send(facts[factIndex % facts.length])
});

app.listen(PORT, () => {
    console.log("Server listening on", PORT)
})