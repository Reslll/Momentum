const quotes = [
    {
        quote: "You have to believe in yourself when no one else does",
        author: "Serena Williams",
    },
    {
        quote: "When you have a dream, you have got to grab it and never let go",
        author: "Carol Burnett",
    },
    {
        quote: "Spread love everywhere you go. Let no one ever come without leaving happier",
        author: "Steve Jobs",
    },
    {
        quote: "If you cannot do great things, do small things in a great way",
        author: "Napoleon Hill",
    },
    {
        quote: "Be yourself; everyone else is already taken",
        author: "Oscar Wilde",
    },
    {
        quote: "If you can do what you do best and be happy, you are further along in life than most people",
        author: "Leonardo DiCaprio",
    },
    {
        quote: "The only thing we have to fear is fear itself",
        author: "Franklin D. Roosevelt",
    },
    {
        quote: "You have to believe in yourself when no one else does",
        author: "Serena Williams",
    },
    {
        quote: "It does not matter how slowly you go, as long as you do not stop",
        author: "Confucius",
    },
    {
        quote: "Find out who you are and do it on purpose",
        author: "Dolly Parton",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]; //floor=내림 | random=0에서1 사이의 float 랜덤 생성

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;