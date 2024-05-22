const quotes = [
    "Be yourself; everyone else is already taken.",
    "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
    "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.",
    "You've gotta dance like there's nobody watching, love like you'll never be hurt, sing like there's nobody listening, and live like it's heaven on earth.",
    "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
    "You only live once, but if you do it right, once is enough.",
    "Be the change that you wish to see in the world.",
    "In three words I can sum up everything I've learned about life: it goes on.",
    "If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.",
    "If you tell the truth, you don't have to remember anything.",
    "I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",
    "A friend is someone who knows all about you and still loves you.",
    "To live is the rarest thing in the world. Most people exist, that is all.",
    "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
    "Live as if you were to die tomorrow. Learn as if you were to live forever",
    "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment."
];

const usedIndexes = new Set();
const quoteElement = document.getElementById("quote");

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear();
    }

    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if (usedIndexes.has(randomIdx)) continue;

        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx);
        break;
    }


}