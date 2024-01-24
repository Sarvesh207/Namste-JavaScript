let string = "radar";
// console.log(string.length);
// let revStr = string.split("").reverse().join("");
// console.log(revStr === string);

function isStringPalindrome(string){
    let low = 0;
    let high = string.length-1;

    while(low < high){
        if(string[low] !== string[high]){
            return false;
        }
        low++;
        high--;
    }
    return true;
}

console.log(isStringPalindrome(string));