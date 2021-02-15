//Use an array to hold the value of the quotes
const arrayOfQuotes = [
    {
        'author': 'Jim Rohn',
        'quote': 'Beware of what you become in pursuit of what you want.'
    },
    {
        'author': 'Epictetus',
        'quote': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    {
        'author': 'Frank Sinatra',
        'quote': 'The best revenge is massive success.'
    },
    {
        'author': 'Wayne Gretzy',
        'quote': 'You miss 100% of the shots you don\'t take.'
    },
    {
        'author': 'Nelson Mandela',
        'quote': 'Resentment is like drinking poison and waiting for your enemies to die.'
    },
    {
        'author': 'Elbert Hubbard',
        'quote': 'Do not take life too seriously. You will not get out alive.'
    },
    {
        'author': 'John Quincy Adams',
        'quote': 'Courage and perseverance have a magical talisman, before which difficulties disappear and obstacles vanish into air.'
    },
    {
        'author': 'Rumi',
        'quote': 'No one knows how spirit moves our bodies, but because of our movement, we know the spirit exists.'
    },
    {
        'author': 'Mahabharata',
        'quote': 'The more one yields to desire, the more insatiable it will become'
    },
    {
        'author': 'Dale Carnegie',
        'quote': 'Any fool can criticize, condemn, and complain but it takes character and self control to be understanding and forgiving.'
    },
    {
        'author': 'Henry David Thoreau',
        'quote': 'Things do not change; we do.'
    },
];

function generateQuote() {
    const random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
    document.querySelector('#quoteOutput').textContent = `\"${arrayOfQuotes[random].quote}\"`;
    document.querySelector('#authorOutput').textContent = `--${arrayOfQuotes[random].author}`;

}
