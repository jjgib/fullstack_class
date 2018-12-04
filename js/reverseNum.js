var num = 521;
console.log(reverse(num));
function reverse(num){
    var rev = 0;
    while(num > 0){
        rem = num % 10;
        rev = rev * 10 + rem;
        num = parseInt(num / 10);
    }
    return rev;
}