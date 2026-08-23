import quotes from "../../quotes";

function getQuote() {
    
    const randIndex = [ 12, 15, 14, 18, 17, 9, 4, 13, 7, 3, 10, 8, 19, 16, 0, 1, 11, 2, 5, 6 ];
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