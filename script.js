
    { quote: "May the Force be with you.", author: "Star Wars: A New Hope" },
    { quote: "I'm going to make him an offer he can't refuse.", author: "The Godfather" },
    { quote: "You can't handle the truth!", author: "A Few Good Men" },
    { quote: "There's no place like home.", author: "The Wizard of Oz" },
    { quote: "To infinity... and beyond!", author: "Toy Story" },
    { quote: "Bond. James Bond.", author: "Dr. No" },
    { quote: "Life is like a box of chocolates.", author: "Forrest Gump" },
    
    
    { quote: "Look at me! I'm not making minimum wage, here!", author: "The Devil's Advocate" },
    { quote: "The world is yours.", author: "Scarface" },
    { quote: "The fire rises.", author: "The Dark Knight Rises" },
    { quote: "Don't ever let somebody tell you, you can't do something. Not even me.", author: "The Pursuit of Happyness" },
    { quote: "You talkin' to me?", author: "Taxi Driver" },
    { quote: "O Captain! My Captain!", author: "Dead Poets Society" },
    { quote: "My mama always said life was like a box of chocolates. You never know what you're gonna get.", author: "Forrest Gump" },
    { quote: "Attica! Attica!", author: "Dog Day Afternoon" },
    { quote: "Say hello to my little friend!", author: "Scarface" },
    { quote: "It's not who I am underneath, but what I do that defines me.", author: "Batman Begins" },

    
    { quote: "Houston, we have a problem.", author: "Apollo 13" },
    { quote: "Here's Johnny!", author: "The Shining" },
    { quote: "Nobody puts Baby in a corner.", author: "Dirty Dancing" },
    { quote: "Elementary, my dear Watson.", author: "The Adventures of Sherlock Holmes" },
    { quote: "You're gonna need a bigger boat.", author: "Jaws" },
    { quote: "I'll be back.", author: "The Terminator" },
    { quote: "Keep your friends close, but your enemies closer.", author: "The Godfather Part II" },
    { quote: "Frankly, my dear, I don't give a damn.", author: "Gone With the Wind" },
    { quote: "Carpe diem. Seize the day, boys. Make your lives extraordinary.", author: "Dead Poets Society" },
    { quote: "Why so serious?", author: "The Dark Knight" },
    { quote: "Just keep swimming.", author: "Finding Nemo" },
    { quote: "E.T. phone home.", author: "E.T. the Extra-Terrestrial" },
    { quote: "I see dead people.", author: "The Sixth Sense" },
    { quote: "Wax on, wax off.", author: "The Karate Kid" },
    { quote: "Show me the money!", author: "Jerry Maguire" },
    { quote: "If you build it, he will come.", author: "Field of Dreams" },
    { quote: "Roads? Where we're going, we don't need roads.", author: "Back to the Future" },
    { quote: "I love the smell of napalm in the morning.", author: "Apocalypse Now" },
    { quote: "They call me Mister Tibbs!", author: "In the Heat of the Night" },
    { quote: "Hello. My name is Inigo Montoya. You killed my father. Prepare to die.", author: "The Princess Bride" },
    { quote: "A martini. Shaken, not stirred.", author: "Goldfinger" },
    { quote: "Is this heaven? No, it's Iowa.", author: "Field of Dreams" },
    { quote: "Hasta la vista, baby.", author: "Terminator 2: Judgment Day" },
    { quote: "My precious.", author: "The Lord of the Rings: Two Towers" },
    { quote: "We're not in Kansas anymore.", author: "The Wizard of Oz" },
    { quote: "Say 'I do.'", author: "Pulp Fiction" },
    { quote: "To me, you are perfect.", author: "Love Actually" },
    { quote: "We have met the enemy, and he is us.", author: "Pogo" },
    { quote: "I am your father.", author: "Star Wars: The Empire Strikes Back" },
    { quote: "The first rule of Fight Club is: You do not talk about Fight Club.", author: "Fight Club" }
];

const backgroundOptions = {
    none: { url: 'none', overlay: 'none' },
    pacino: { url: 'al-pacino.jpg', overlay: 'dark' }, 
    space: { url: 'space-nebula.jpg', overlay: 'dark' },
    city: { url: 'night-city.jpg', overlay: 'dark' }
};


const quoteText = document.getElementById('quote-text');
const quoteAuthor = document.getElementById('quote-author');
const newQuoteBtn = document.getElementById('new-quote-btn');
const bgSelect = document.getElementById('bg-select');


function displayNewQuote() {
    
    const randomIndex = Math.floor(Math.random() * movieQuotes.length);
    const randomQuote = movieQuotes[randomIndex];
    quoteText.textContent = randomQuote.quote;
    quoteAuthor.textContent = '– ' + randomQuote.author;
}
newQuoteBtn.addEventListener('click', displayNewQuote);
displayNewQuote();


function changeBackground() {
    const selectedValue = bgSelect.value;
    const option = backgroundOptions[selectedValue];
    const body = document.body;

    if (option.url === 'none') {
       
        body.style.backgroundImage = 'none';
        body.style.backgroundColor = '#f0f0f0'; 
        body.className = ''; 
    } else {
        
        body.style.backgroundImage = `url('${option.url}')`;
        body.style.backgroundColor = 'transparent'; 
        
       
        body.className = option.overlay; 
    }
}


if (bgSelect) {
    bgSelect.addEventListener('change', changeBackground);
}