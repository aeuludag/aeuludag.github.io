import quotes from "../../quotes";

function getQuote() {
    
    const randIndex = [ 2, 10, 9, 15, 1, 8, 11, 17, 4, 16, 6, 13, 5, 14, 12, 3, 0, 7 ];
    const today = new Date();
    // const today = new Date(2000, 0, 1 + testIndex);
    const start = new Date(2000, 0, 1);
    const weeksSince2000 = Math.floor((today - start) / (1000 * 60 * 60 * 24 * 7));
    const weekIndex = (weeksSince2000) % quotes.length;
    const quote = quotes[randIndex[weekIndex]];
    // console.log(quote, weekIndex, weekIndex)

    return quote;
}

export default getQuote;