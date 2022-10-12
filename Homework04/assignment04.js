/*  Author: John White
 *     Userid: jmw75
 *     githubID: jmw-75
 *     Date: September 29, 2022
 */

//count function that will return the number of words in the input
function countWord(wdCount){
    const countWords = wdCount.match(/[\w\d\'\'-]+/gi);
    return{ words: countWords ? countWords.length : 0};
}

function countFunc() {
    //no variables using var ha
    const response = document.getElementById("textBox");
    const wordCount = document.getElementById("wordCount");
    const charCount = document.getElementById("characterCount")

    //capitalize each character
    response.value = response.value.toUpperCase();

    //create the innerText for the word count displayed on screen
    response.addEventListener('keyup', function () {
        //count the number of words using countWord() function
        const word_count = countWord(this.value);

        //allow for plural is the total word count != 1
        wordCount.innerText = word_count.words + (word_count.words != 1 ? " words" : " word");
    });

    //create the innerText for the char total displayed on screen
    response.addEventListener('keyup', function () {
        //count the number of characters by splitting the input
        const char_count = response.value.split('');

        //allow for plural is the total char count != 1
        charCount.innerText = char_count.length + (char_count.length != 1 ? " characters" : " character");   
    });

}