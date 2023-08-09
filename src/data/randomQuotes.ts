export const getRandomQuote = async () => {
    const _quotes_ = [
        "Programmer: A machine that turns coffee into code.",
        "Computers are fast; programmers keep it slow.",
        "A good programmer is someone who always looks both ways before crossing a one-way street.",
        "When I wrote this code, only God and I understood what I did. Now only God knows.",
        "A son asked his father (a programmer) why the sun rises in the east, and sets in the west. His response? It works, don’t touch!",
        "How many programmers does it take to change a light bulb? None, that’s a hardware problem.",
        "Programming is like sex: One mistake and you have to support it for the rest of your life.",
        "Programming can be fun, and so can cryptography; however, they should not be combined.",
        "Programming today is a race between software engineers striving to build bigger and better idiot-proof programs, and the Universe trying to produce bigger and better idiots. So far, the Universe is winning.",
        "Copy-and-Paste was programmed by programmers for programmers actually.",
        "Always code as if the person who ends up maintaining your code will be a violent psychopath who knows where you live.",
    ];

    const randomQuote = Math.floor(Math.random() * _quotes_.length);

    const speachMarks = {
        start: '“',
        end: '”',
    };


    return `${speachMarks.start}${_quotes_[randomQuote]}${speachMarks.end}`;
};
