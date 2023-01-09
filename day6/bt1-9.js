//cau 1
function getDateTime() {
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var day = date.getDate();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var time = `Now is: ${year}-${month}-${day} ${hour}:${minute}:${second}`;
    return time;
}
const now=getDateTime();
console.log(now);

//cau 2
function allFormatsOfDate({day, month, year}){
    const dayStr = day.toString().padStart(2, '0');
    const monthStr = month.toString().padStart(2, '0');
    const yearStr = year.toString();
    // const yearShortStr = yearStr.slice(-2);
    return {
        dd__mm__yyyy: `${dayStr}/${monthStr}/${yearStr}`,
        dd_mm_yyyy:`${dayStr}-${monthStr}-${yearStr}`,
        mm_dd_yyyy:`${monthStr}/${dayStr}/${yearStr}`,
        mm__dd__yyyy:`${monthStr}-${dayStr}-${yearStr}`,
    }
}
const date = { 
	day: 28,
	month: 12,
	year: 2022
}

const result = allFormatsOfDate(date)
console.log(result)

//cau 3
function isIncreaseChainNumber(number){
    const strNumber = number.toString();
    for(let i = 0; i < strNumber.length - 1; i++){
        const currentNumber = parseInt(strNumber[i]);
        const nextNumber = parseInt(strNumber[i+1]);
        if(currentNumber > nextNumber){
            return false;
        }
    }
    return true;   
}
const number1 = 123456789n
const number2 = 12346899999n
const number3 = 988811111n

console.log(isIncreaseChainNumber(number1)) 
console.log(isIncreaseChainNumber(number2)) 
console.log(isIncreaseChainNumber(number3)) 

//cau 4
function caesarCypher(text, step){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const lowerCaseText = text.toLowerCase();
    let result = '';
    for(let i = 0; i < lowerCaseText.length; i++){
        const currentChar = lowerCaseText[i];
        const currentIndex = alphabet.indexOf(currentChar);
        if(currentIndex === -1){
            result += currentChar;
            continue;
        }
        const newIndex = (currentIndex + step) % alphabet.length;
        result += alphabet[newIndex];
    }
    return result;
}
const name = "Minh Triet";
const cypherText = caesarCypher(name, 2);
console.log(cypherText)

//cau 5
function highestFreqNumber(numbers) {
    const freqs = {};
    let highestFreq = 0;
    let highestFreqNumber = null;
    for(let i = 0; i < numbers.length; i++){
        const currentNumber = numbers[i];
        if(freqs[currentNumber]){
            freqs[currentNumber]++;
        }else{
            freqs[currentNumber] = 1;
        }
        if(freqs[currentNumber] > highestFreq){
            highestFreq = freqs[currentNumber];
            highestFreqNumber = currentNumber;
        }
    }
    return highestFreqNumber;
}
const numbers = [1,2,3,5,6,7,4,7,3,2,1,6,7,8,7,7,1,7,3,7,9999,7,123,7]

console.log(highestFreqNumber(numbers)) 

//cau 6
// function isIncludeJs() {
//     var str = prompt("Enter a string: ");
//     console.log("String is: " + str);
//     if (str.toLowerCase().indexOf("abc") != -1) {
//         console.log("String contains abc");
//     }
//     else {
//         console.log("String does not contain abc");
//     }
// }
// isIncludeJs();


//cau 7
const getMonthName= (monthNumber) => {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ]
    return months[monthNumber - 1];
}
console.log(getMonthName(3)) // March
console.log(getMonthName(4)) // April



//cau 8
const longestWord = (str) => {
    const words = str.split(' ');
    let longestWord = '';
    for(let i = 0; i < words.length; i++){
        if(words[i].length > longestWord.length){
            longestWord = words[i];
        }
    }
    return longestWord;
}
const str = "Little darlin', it's been a loooooong, cold, lonely winter"

console.log(longestWord(str)) // loooooong


//cau 9
const sum = (number) => {
    const digits = number.toString().split('').map(Number)
    const sum = digits.reduce((a, b) => a + b, 0)
    return sum 
}
console.log(sum(1231312321378127391237219312n)) // 90 
console.log(sum(99999999999999999999999999999n))// 261 
console.log(sum(12345678908765432123456555566n)) // 98 